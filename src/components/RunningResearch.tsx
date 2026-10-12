import React, { useEffect, useRef, useState } from 'react';
import { Microscope } from 'lucide-react';
import GlassCard from './GlassCard';

/* ------------------------------------------------------------------ */
/*  CONFIG – edit these to match your files / numbers                  */
/* ------------------------------------------------------------------ */
const BASE = import.meta.env.BASE_URL; // works locally and on GitHub Pages

const EQM_DIAGRAM = `${BASE}projec_imgs/eqm_.jpeg`;
const KWELL_DIAGRAM = `${BASE}projec_imgs/k_well.jpeg`;

// TODO: replace with the real GIF file names inside public/projec_imgs/
const KWELL_GIFS = [
  `${BASE}projec_imgs/sim_run_1.gif`,
  `${BASE}projec_imgs/sim_run_2.gif`,
];

// Success rates on AlohaTransferCube-v0 (LeRobot eval)
const EVAL_CAPTION = 'LeRobot Eval · AlohaTransferCube-v0 · Policy: Equilibrium Matching (EqM)';
const SUCCESS_RATES = [
  { name: 'EqM (ours)', success: 69, highlight: true },
  { name: 'Diffusion', success: 62, highlight: false },
  { name: 'ACT', success: 24, highlight: false },
];

// Tentative model footprint. level = 1 (lowest) .. 5 (highest), qualitative only.
const MODELS = [
  {
    name: 'Diffusion Policy',
    mb: 1000,
    label: '~1 GB',
    color: 'bg-gray-400',
    compute: { level: 5, text: 'High' },
    training: { level: 5, text: 'Long' },
  },
  {
    name: 'ACT',
    mb: 78,
    label: '~78 MB',
    color: 'bg-indigo-300',
    compute: { level: 1, text: 'Low' },
    training: { level: 2, text: 'Short' },
  },
  {
    name: 'EqM (ours)',
    mb: 100,
    label: '~100 MB',
    color: 'bg-emerald-500',
    compute: { level: 2, text: 'Low' },
    training: { level: 2, text: 'Short' },
  },
];

/* ------------------------------------------------------------------ */
/*  Summary text blocks                                                */
/* ------------------------------------------------------------------ */
type Block =
  | { t: 'p'; text: string }
  | { t: 'eq'; text: string }
  | { t: 'ul'; items: string[] };

const EQM_SUMMARY: Block[] = [
  {
    t: 'p',
    text: 'This policy follows the implicit-energy formulation of Equilibrium Matching (EqM), adapted from the EqM image-generation implementation to robot behavior cloning.',
  },
  {
    t: 'p',
    text: 'The observation (images, robot state, and environment state) is encoded into a conditioning vector. A Transformer or 1-D UNet then receives a noisy action sequence x and directly predicts an equilibrium score field fθ(x, o).',
  },
  {
    t: 'p',
    text: 'No explicit scalar energy is constructed. In other words, the network output itself is treated as the score:',
  },
  { t: 'eq', text: 'score = fθ(x, o)' },
  {
    t: 'p',
    text: 'During training, the predicted score is directly matched to the EqM target:',
  },
  { t: 'eq', text: 'fθ(xγ, o) ≈ (x₀ − x₁) c(γ)' },
  {
    t: 'p',
    text: 'where x₀ is the noisy sample and x₁ is the demonstrated action. During inference, an action trajectory is initialized from noise and iteratively refined using:',
  },
  { t: 'eq', text: 'x ← x − η fθ(x, o)' },
  {
    t: 'p',
    text: 'Therefore, the model learns a time-invariant vector field whose equilibrium corresponds to the demonstrated robot actions. Main characteristics:',
  },
  {
    t: 'ul',
    items: [
      'implicit energy / direct score prediction',
      'the network directly sees the noisy action x',
      'no explicit scalar energy is required',
      'no autograd Jacobian is required for the score',
      'EqM gradient-field training and iterative equilibrium sampling are retained',
    ],
  },
];

const KWELL_SUMMARY: Block[] = [
  {
    t: 'p',
    text: 'The new implementation keeps the EqM training objective but replaces the direct action-dependent score network with an observation-conditioned analytic energy landscape.',
  },
  {
    t: 'p',
    text: 'Instead of giving the noisy action x to the neural network, the network receives only the observation and predicts K possible action wells:',
  },
  {
    t: 'eq',
    text: 'μk(o) = centre of the k-th action mode\nwk(o) = importance of the k-th well\nbk(o) = maximum field strength of the k-th well',
  },
  { t: 'p', text: 'These K wells define a smooth mixture-of-wells energy:' },
  { t: 'eq', text: 'E(x|o) = −τ log Σk wk exp(−φk(x)/τ)' },
  {
    t: 'p',
    text: 'where each φk is a pseudo-Huber-type potential centered at μk. The action x is then evaluated analytically against these wells to obtain the EqM score:',
  },
  { t: 'eq', text: 'score(x|o) = ∇x E(x|o)' },
  {
    t: 'p',
    text: 'The important difference is that the score is obtained analytically. The neural network does not need to differentiate with respect to the action, so the network Jacobian does not enter the score. The resulting score is also intrinsically bounded:',
  },
  { t: 'eq', text: '‖score‖ < maxk bk' },
  {
    t: 'p',
    text: 'This gives the action-refinement process a built-in limit on the magnitude of its correction.',
  },
  {
    t: 'p',
    text: 'During inference, the network predicts the K wells once for a given observation. The wells are then kept fixed while the noisy action is iteratively refined:',
  },
  { t: 'eq', text: 'x ← x − η score(x|o)' },
  {
    t: 'p',
    text: 'Thus, the model can represent multiple possible action modes while providing a bounded equilibrium field.',
  },
  {
    t: 'p',
    text: 'The K-well formulation also provides additional signals that can potentially be used for OOD detection:',
  },
  {
    t: 'eq',
    text: '−E(x|o)       energy / confidence-related signal\n‖score‖       equilibrium-field magnitude\nwell entropy  uncertainty in the mixture weights\nwell spread   dispersion of the predicted action wells',
  },
  {
    t: 'p',
    text: 'The current implementation treats these as OOD-related diagnostic signals rather than a guaranteed probability or likelihood. The negative-energy signal is explicitly described in the code as a confidence-related quantity, not a true data likelihood.',
  },
];

function SummaryBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-gray-700">
      {blocks.map((b, i) => {
        if (b.t === 'p') return <p key={i}>{b.text}</p>;
        if (b.t === 'eq')
          return (
            <pre
              key={i}
              className="bg-black/5 rounded-md px-3 py-2 font-mono text-[13px] text-gray-800 whitespace-pre-wrap"
            >
              {b.text}
            </pre>
          );
        return (
          <ul key={i} className="list-disc list-inside space-y-1">
            {b.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function useAnimatedProgress(active: boolean, duration = 15000) {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setP(1 - Math.pow(1 - t, 3)); // ease-out cubic
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, duration]);
  return p;
}

/* ------------------------------------------------------------------ */
/*  Animated donut (one per model)                                     */
/* ------------------------------------------------------------------ */
function MiniDonut({
  name,
  success,
  highlight,
}: {
  name: string;
  success: number;
  highlight: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const p = useAnimatedProgress(inView,5000);

  const R = 38;
  const C = 2 * Math.PI * R;
  const fail = 100 - success;
  const sweep = p * 100;
  const greenPct = Math.min(sweep, success);
  const redPct = Math.max(0, sweep - success);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="14" />
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke="#22a55b"
            strokeWidth="14"
            strokeDasharray={`${(C * greenPct) / 100} ${C}`}
          />
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke="#e5483c"
            strokeWidth="14"
            strokeDasharray={`${(C * redPct) / 100} ${C}`}
            strokeDashoffset={-(C * success) / 100}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-gray-800">{Math.round(greenPct)}%</span>
          <span className="text-[10px] text-gray-500">success</span>
        </div>
      </div>
      <span
        className={`mt-2 text-sm ${
          highlight ? 'font-semibold text-emerald-700' : 'font-medium text-gray-700'
        }`}
      >
        {name}
      </span>
      <span className="text-xs text-gray-400">{fail}% fail</span>
    </div>
  );
}

function SuccessDonuts() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {SUCCESS_RATES.map((m) => (
          <MiniDonut key={m.name} {...m} />
        ))}
      </div>
      <div className="flex justify-center gap-5 mt-3 text-xs text-gray-600">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#22a55b]" /> Success
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#e5483c]" /> Fail
        </span>
      </div>
      <p className="text-xs text-gray-500 text-center mt-2">{EVAL_CAPTION}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Level meter (qualitative, 5 pips)                                  */
/* ------------------------------------------------------------------ */
function Pips({ level, active }: { level: number; active: boolean }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`h-2 w-5 rounded-full transition-all duration-700 ${
            active && i <= level ? 'bg-gray-700' : 'bg-black/10'
          }`}
          style={{ transitionDelay: `${i * 90}ms` }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Model size / compute / training time                               */
/* ------------------------------------------------------------------ */
function ModelComparison() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const p = useAnimatedProgress(inView, 5000);
  const max = Math.max(...MODELS.map((m) => m.mb));

  return (
    <div ref={ref} className="space-y-5">
      {MODELS.map((m) => (
        <div key={m.name}>
          <div className="flex justify-between text-sm text-gray-700 mb-1">
            <span className="font-medium">{m.name}</span>
            <span className="font-semibold">{m.label}</span>
          </div>
          <div className="h-2.5 rounded-full bg-black/5 overflow-hidden mb-2">
            <div
              className={`h-full rounded-full ${m.color}`}
              style={{ width: `${(m.mb / max) * 100 * p}%` }}
            />
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
            <div>
              <div className="mb-1">
                Compute: <span className="font-semibold text-gray-800">{m.compute.text}</span>
              </div>
              <Pips level={m.compute.level} active={inView} />
            </div>
            <div>
              <div className="mb-1">
                Training time:{' '}
                <span className="font-semibold text-gray-800">{m.training.text}</span>
              </div>
              <Pips level={m.training.level} active={inView} />
            </div>
          </div>
        </div>
      ))}
      <p className="text-xs text-gray-500">
        Tentative, qualitative estimates based on model size and architectural complexity. EqM
        stays in the same lightweight class as ACT while clearly outperforming it.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Panel with hover / tap-to-reveal summary                           */
/* ------------------------------------------------------------------ */
function ResearchPanel({
  title,
  subtitle,
  summaryTitle,
  summary,
  children,
}: {
  title: string;
  subtitle: string;
  summaryTitle: string;
  summary: Block[];
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false); // for touch devices

  return (
    <div
      className="relative rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm overflow-hidden cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
    >
      {/* Default content */}
      <div className={`p-6 transition-opacity duration-500 ${open ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
        {children}
        <p className="mt-4 text-xs text-gray-400 text-center">Hover (or tap) for architecture summary</p>
      </div>

      {/* Summary overlay */}
      <div
        className={`absolute inset-0 bg-white/85 backdrop-blur-md p-6 overflow-y-auto transition-opacity duration-500 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{summaryTitle}</h3>
        <SummaryBlocks blocks={summary} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function RunningResearch() {
  return (
    <GlassCard className="mb-12 p-8 animate-slide-up">
      <div className="flex items-center gap-2 mb-2">
        <Microscope className="text-gray-700" size={24} />
        <h2 className="text-2xl font-bold text-gray-800">Ongoing Research</h2>
      </div>
      <p className="text-gray-500 mb-6">
        Equilibrium-Matching policies for robot behavior cloning work in progress.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        {/* Panel 1 */}
        <ResearchPanel
          title="Equilibrium Matching Policy"
          subtitle="Implicit-energy score field over noisy actions"
          summaryTitle='EqM Model (energy landscape = implicit)'
          summary={EQM_SUMMARY}
        >
          <img
            src={EQM_DIAGRAM}
            alt="EqM architecture diagram"
            className="w-full rounded-lg bg-white object-contain mb-6"
          />

          <h4 className="text-sm font-semibold text-gray-700 mb-3">
            Simulation success rate
          </h4>
          <SuccessDonuts />

          <h4 className="text-sm font-semibold text-gray-700 mt-8 mb-3">
            Model size, compute &amp; training time
          </h4>
          <ModelComparison />
        </ResearchPanel>

        {/* Panel 2 */}
        <ResearchPanel
          title="K-Well EqM Policy"
          subtitle="Observation-conditioned analytic mixture-of-wells energy"
          summaryTitle='New K-Well EqM Model (ebm="k_wells")'
          summary={KWELL_SUMMARY}
        >
          <img
            src={KWELL_DIAGRAM}
            alt="K-Well EqM architecture diagram"
            className="w-full rounded-lg bg-white object-contain mb-6"
          />

          <h4 className="text-sm font-semibold text-gray-700 mb-3">Simulation runs</h4>
          <div className="grid grid-cols-2 gap-3">
            {KWELL_GIFS.map((src) => (
              <img
                key={src}
                src={src}
                alt="K-Well EqM simulation rollout"
                loading="lazy"
                className="w-full rounded-lg bg-black/5 object-cover aspect-video"
              />
            ))}
          </div>
        </ResearchPanel>
      </div>
    </GlassCard>
  );
}