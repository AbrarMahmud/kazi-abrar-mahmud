export const portfolio = {
  name: "Kazi Abrar Mahmud",
  title: "Robotics • Ai/ML • Singnal Processing",
  bio: "I'm an EEE graduate with a strong focus on advanced robotics and the integration of state-of-the-art AI/ML algorithms into real robotic hardware. My research aims to bridge the gap between intelligent algorithms and real-world applications. Currently, I'm exploring funded PhD opportunities to further pursue this path and contribute to the advancement of autonomous systems.",
  avatar: "profile_imgs/IMG_1.jpeg",
  cv: `${import.meta.env.BASE_URL}CV/CV_Kazi_Abrar_Mahmud.pdf`,
  experience: [
    {
    title: "Lecturer",
    company: "United International University (UIU)",
    period: "July 2025 - Present",
    description: "Serving as a faculty member in the Department of Electrical and Electronic Engineering (EEE), delivering undergraduate coursework, leading student activities, and coordinating academic initiatives.",
    achievements: [
      "Desined and developed a new lab: Numerical Analysis, with python based codeing modality for EEE students.",
      "Deliver engaging theoretical and hands-on lectures to undergraduate students.",
      "Serve as Moderator of the Electrical and Electronic Club, overseeing activities, projects, and student engagement.",
      "Coordinated the launch of Power Energy Training Academy (PETA) training programs focused on Industry 4.0 technologies."
    ]
  },
    {
      title: "Industrial Attachment",
      company: "Bangladesh Data Center Company Limited (BDCCL)",
      period: "June 2024 - July 2024",
      description: "​BDCCL operates Bangladesh's Tier IV-certified National Data Center, offering 99.995% uptime, advanced cloud services, and robust security infrastructure.",
      achievements: [
        "Gained hands-on experience by touring a highly secure 4th-tier data center",
        "Observed and learned about advanced data center infrastructure, security protocols, and operational standards."
      ]
    },
    // {
    //   title: "Robotics Engineer",
    //   company: "Boston Dynamics",
    //   period: "2018 - 2020",
    //   description: "Developed motion planning algorithms for quadruped robots. Led the perception team for autonomous navigation.",
    //   achievements: [
    //     "Improved robot stability by 40%",
    //     "Filed 3 patents",
    //     "Reduced computation time by 60%"
    //   ]
    // },
    // {
    //   title: "Research Assistant",
    //   company: "Stanford Robotics Lab",
    //   period: "2015 - 2018",
    //   description: "Conducted research in robot learning and manipulation. Developed novel reinforcement learning algorithms.",
    //   achievements: [
    //     "Published 6 conference papers",
    //     "Best Paper Award at ICRA 2017",
    //     "Open-sourced learning framework"
    //   ]
    // }
  ],
  skills: [
    "ROS",
    "Imitation Learning",
    "Robotic Systems",
    "Computer Vision",
    "Machine Learning",
    "PyTorch",
    "C++",
    "3D CAD",
    "SLAM",
    "Motion Planning",
    "Control Systems"
  ],

  
  blogs: [
    { 
      id: "12",
      title: "Diffusion Policy Done Right: End-to-End Imitation Learning in ROS1-Gazebo",
      thumbnail: "https://img.youtube.com/vi/iT2fyZKa5s8/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/iT2fyZKa5s8?si=J4sspQdzq-6nEKUq",
      date: "2026-06-21",
      summary: "Teaching Robots by Example: Inside the Imitation Learning in Gazebo Repo",
      content: `
Writing rules for autonomous robots is notoriously difficult. If you’ve ever tried to hard-code navigation logic for dynamic environments, you know it’s a never-ending battle of edge cases. But what if, instead of writing endless \`if-else\` statements, you could just *show* the robot how to drive? 

That is the core premise of Imitation Learning, and it is exactly what the [imitation-learning-gazebo](https://github.com/AbrarMahmud/imitation-learning-gazebo) repository by Abrar Mahmud brings to life. 

This project provides a hands-on, end-to-end pipeline for teaching a simulated robot how to navigate using **Behavioral Cloning** a branch of Imitation Learning where a neural network learns to map sensor inputs directly to control actions based on expert demonstrations.

Here is a breakdown of what makes this repository a great starting point for robotics and AI enthusiasts.

## The Core Workflow

The repository bridges the gap between the **Gazebo simulator** (the gold standard for open-source robotics physics) and deep learning frameworks. It breaks the autonomous robotics problem into three highly digestible phases:

1. **Expert Demonstration (Data Collection):** 
   You step into the shoes of the "expert." Using teleoperation, you drive the robot through a simulated Gazebo environment. As you navigate, the system pairs the robot's camera feed (what it sees) with your control commands (steering, acceleration, and braking). This creates a paired dataset of images and optimal actions.
   
2. **Model Training:** 
   Once the dataset is collected, a Convolutional Neural Network (CNN) is trained to understand the relationship between the visual input and the physical output. The network essentially learns your driving style, recognizing that when a wall approaches on the right, the correct action is to steer left.

3. **Autonomous Deployment:** 
   The training wheels come off. The trained model is plugged back into the ROS (Robot Operating System) and Gazebo loop. The robot uses its onboard camera to feed live images to the neural network, which then outputs real-time velocity and steering commands to navigate the track autonomously.

## Why This Repository Stands Out

* **End-to-End Pipeline:** It doesn't just give you a model or a simulation; it provides the glue that holds them together. Moving data from a ROS/Gazebo environment into a PyTorch or TensorFlow training script is often the hardest part for beginners, and this repo handles that infrastructure.
* **Accessible Simulation:** Hardware is expensive and prone to breaking. By keeping the entire pipeline inside Gazebo, developers can iterate rapidly, crash as many virtual robots as they need, and experiment with different camera angles or track layouts without spending a dime.
* **A Sandbox for Advanced Algorithms:** While Behavioral Cloning is a fantastic start, the architecture of this repo makes it a perfect launchpad for more complex algorithms like DAgger (Dataset Aggregation) or Reinforcement Learning. 

## Who Is This For?

If you are a student transitioning from standard machine learning into applied robotics, or a hobbyist looking to understand how self-driving cars work under the hood, this repository is a fantastic sandbox. It abstracts away just enough of the ROS boilerplate to let you focus on the machine learning, while keeping you grounded in realistic robotic constraints.

Head over to the [GitHub repository](https://github.com/AbrarMahmud/imitation-learning-gazebo) to clone the code, spin up the Gazebo world, and start teaching your virtual robot how to drive.
    `
    },
    {
      id: "11",
      title: "Designing & Coding a Custom 6DOF Robotic Arm From Scratch! (Fusion360 + Arduino)",
      thumbnail: "https://img.youtube.com/vi/aLEBEnKvmhI/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/aLEBEnKvmhI",
      date: "2026-10-21",
      summary: "My full workflow for solving analytical inverse kinematics and building a custom robot, from DH parameters to a working arm.",
      content: `
What does it take to design, calculate and build a robotic system from the ground up? This video walks through my entire workflow for **solving analytical inverse kinematics (IK)** and building a custom robot from scratch.

## The four stages

* **The math:** DH (Denavit-Hartenberg) parameters are used to derive the closed-form analytical IK solution
* **The design:** custom 3D CAD design and fabrication in **Fusion 360**
* **The software:** the kinematic results are visualised and the motion simulated in **Processing 5**
* **The hardware:** the same math runs on the physical fabricated robot using an **Arduino Uno**

## Why this workflow works

Each stage checks the one before it. If the equations are wrong, the Processing simulation shows it immediately. If the simulation looks right but the robot misbehaves, the problem is in the mechanical design or the hardware, not the math. That separation makes debugging far easier.

## Open source

The Processing simulation code is available here: [N_DOF_simulation on GitHub](https://github.com/AbrarMahmud/N_DOF_simulation.git).

Which part do you find most interesting: the math, the CAD, or the code?
    `
    },
{
      id: "10",
      title: "I Built a DIY Force Feedback Steering Wheel with Arduino Leonardo! (Self-Centering PID Demo)",
      thumbnail: "https://img.youtube.com/vi/UkbvZklW3iQ/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/UkbvZklW3iQ",
      date: "2026-10-18",
      summary: "A custom force-feedback steering wheel that uses a PID controller to mimic tire resistance and self-centering.",
      content: `
Sim racing feels real because the wheel *pushes back*. In this project I built my own **DIY force feedback (FFB) steering wheel** and used control theory to make that push feel natural.

## How it works

An **Arduino Leonardo** sits at the heart of the build. Its native USB HID support lets it talk directly to PC games as a game controller. On top of that, a **custom-coded PID controller** (Proportional-Integral-Derivative) continuously compares the wheel's position with the centre and generates a restoring torque.

The result is the behaviour you expect from a real car:

* **Active self-centering:** let go and the wheel snaps back smoothly
* **Dynamic force response:** the harder you turn, the more resistance you feel, like real tire load

## The control engineering angle

PID is the same idea used in line-following robots, drones and motor controllers. Here the tuning decides whether the wheel feels heavy, floaty or jittery, which makes it a very tangible way to understand what each gain actually does.

The video shows how smoothly it tracks and returns to centre under load.
    `
    },
    {
      id: "9",
      title: "From RViz to Reality: ROS MoveIt! on a Custom 5-DOF Robotic Arm",
      thumbnail: "https://img.youtube.com/vi/GbZTpitNsWM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/GbZTpitNsWM",
      date: "2026-10-20",
      summary: "The complete MoveIt pipeline for a custom 5-DOF arm: Setup Assistant, RViz simulation, and real hardware execution.",
      content: `
A fast-paced walkthrough of the full pipeline for bringing a **custom 5-DOF robotic arm** under ROS and MoveIt, from configuration to real hardware.

## The workflow

1. **MoveIt Setup Assistant:** configure the arm's kinematics and planning groups
2. **RViz:** simulate trajectory planning and check the motion before anything moves
3. **Real hardware:** execute the inverse kinematics (IK) on the physical arm

Going through simulation first means you can catch bad configurations in RViz instead of on the robot.

## Origin

This demonstration reflects the workflow taught during an **IEEE RAS workshop where I served as the Lead Instructor**. The idea was to give participants a complete path from an empty workspace to a moving arm.

## Get the code

The setup files, launch configurations and IK code are open-source: [RoboHack_ROS_Moveit_iK on GitHub](https://github.com/AbrarMahmud/RoboHack_ROS_Moveit_iK).
    `
    },
    {
      id: "8",
      title: "I Built an Animated Humanoid Robot Head That Tracks Your Every Move",
      thumbnail: "https://img.youtube.com/vi/bw7ItyD5RvM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/bw7ItyD5RvM",
      date: "2026-10-21",
      summary: "A custom humanoid robotic head that uses face tracking to follow people in a lively, animated way, built on ROS.",
      content: `
A robot feels alive when it *looks at you*. This project is a **custom humanoid robotic head** that uses **face tracking** to follow human movement with expressive, animated behaviour.

## What the video covers

* **Live demonstration** of the robot tracking a person in real time
* **Face animation workflow:** a short, behind-the-scenes look at how the facial animations were created
* **ROS architecture:** a structural overview of the workspace powering the head's vision and movement

## Why share the workspace

Seeing how a ROS workspace is organised is often more useful than seeing the demo itself. The video walks through the codebase so you can understand how perception and motion nodes fit together, and then adapt it for your own robot.

## Build it yourself

The entire ROS workspace is open-source: [robo_face_tracker on GitHub](https://github.com/AbrarMahmud/robo_face_tracker.git).
    `
    },
   {
      id: "7",
      title: "Building a Custom ROS Robot: Testing Autonomous Navigation (move_base + ESP32)",
      thumbnail: "https://img.youtube.com/vi/wNz_-tCpsQU/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/wNz_-tCpsQU",
      date: "2026-10-19",
      summary: "Putting the ROS Navigation Stack to the test on a robot I designed from scratch, with a custom ESP32 motor controller.",
      content: `
How well does the ROS Navigation Stack work on a robot you designed yourself? This video tests **autonomous navigation with move_base** on a fully custom-built platform.

## System architecture

* **High-level brain:** all ROS nodes, including move_base, run on a Linux laptop
* **Low-level control:** a custom-designed **ESP32-based motor controller**
* **Communication:** velocity commands and data stream back and forth through **rosserial** over a serial connection

## From CAD to costmap

The robot was modeled from scratch in **Autodesk Fusion 360**, and the **URDF was generated directly from the Fusion 360 design**. That single model supplies the joint states and also the footprint parameters move_base needs for planning around obstacles, so the physical robot and the software stay in sync.

## What to watch for

The video focuses on the robot's path planning and navigation behaviour in practice, which is where a design either holds up or shows its weak points. If you want to build something similar, the ESP32 + rosserial split is a lightweight way to get real hardware under ROS.
    `
    },
    {
      id: "6",
      title: "I Built a Custom AM Radio Transmitter with a 1:1 Veroboard PCB Layout!",
      thumbnail: "https://img.youtube.com/vi/cv9XeXgPsO0/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/cv9XeXgPsO0",
      date: "2026-10-19",
      summary: "A homemade AM transmitter and receiver, with a PCB designed in Eagle to map 1:1 onto a standard Veroboard.",
      content: `
Not every project is a robot. This one is a **custom Amplitude Modulation (AM) transmitter and receiver**, designed, built and tested from scratch for wireless signal transmission.

## The 1:1 Veroboard trick

The PCB was designed in **Autodesk Eagle** with a layout aligned to a standard **Veroboard / perfboard** grid (0.1 inch / 2.54 mm pitch). Because the design maps one-to-one onto the stripboard, component placement and trace routing transfer to the physical board almost without guesswork. It bridges proper PCB design and easy hand prototyping.

## Highlights

* Wireless **AM RF transmission** and audio modulation
* **1:1 matrix mapping** in Eagle for direct Veroboard transfer
* Live performance testing with a **radio receiver and an oscilloscope**

## Tools used

Autodesk Eagle for schematic and layout, Veroboard, and a digital storage oscilloscope with a function generator for checking the signal.

Seeing the modulated waveform on the scope while hearing it on the receiver is a great way to make communication theory feel real.
    `
    },
    {
      id: "5",
      title: "I Controlled a Custom Humanoid Arm with ROS & Pi 5",
      thumbnail: "https://img.youtube.com/vi/c_kv290j9nA/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/c_kv290j9nA",
      date: "2026-10-20",
      summary: "A proof-of-concept demo: real-time control of a single-side humanoid arm using ROS, MoveIt and a Raspberry Pi 5.",
      content: `
This is a progress update on a **custom humanoid robot arm prototype**, showing real-time control of a single-side arm with a **Raspberry Pi 5** acting as the onboard brain.

## The setup

* **Compute:** Raspberry Pi 5 on the robot
* **Framework:** ROS (Robot Operating System)
* **Motion planning:** MoveIt solvers and kinematics
* **Interface:** SSH remote control

Everything you see, from motion planning to execution, is driven by ROS and MoveIt. Running the stack on the Pi means the arm doesn't depend on an external computer for its intelligence.

## Where it's heading

This is a proof-of-concept test rather than a finished product. It is a stepping stone toward more advanced autonomous capabilities for the hardware, and it fits into my broader interest in embodied AI, where good hardware and good control software have to grow together.
    `
    },


    {
      id: "4",
      title: "DIY Cardboard 5 DOF robotic arm",
      thumbnail: "https://img.youtube.com/vi/vEUU0YJDqW8/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/vEUU0YJDqW8",
      date: "2026-10-18",
      summary: "A fast, precise pick-and-place arm built from nothing but cardboard, servos and an Arduino Uno.",
      content: `
You don't need an expensive aluminium frame to learn serious robotics. This build is a fully working **5-DOF robotic arm made out of cardboard**, and it still performs a quick, precise pick-and-place with smooth multi-axis motion.

## What's inside

* **Brain:** Arduino Uno
* **Servo driver:** 16-channel PCA9685 PWM controller, so all joints are driven cleanly from one board
* **Actuators:** MG996R high-torque servos for lifting and joint articulation
* **Five axes:** base rotation, shoulder, elbow, wrist pitch and gripper
* **Frame:** lightweight but sturdy DIY cardboard

## Why it matters

A cheap, disposable frame lets students and hobbyists experiment with kinematics, servo control and motion sequencing without worrying about breaking expensive parts. It is also the starting point for the more advanced arms I build later with inverse kinematics and ROS MoveIt.

Watch the full demo above, and if you build your own version, I'd love to hear how it turns out.
    `
    },
    
    {
      id: "3",
      title: "Arduino 2-DOF Planar Robot Arm (MG996R) | Drawing a Lissajous Figure",
      thumbnail: "https://img.youtube.com/vi/74dQP6MFEEc/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/74dQP6MFEEc",
      date: "2026-10-19",
      summary: "A two-link Arduino arm that draws a figure-of-eight, simulated first in Processing 5 and then run on real hardware.",
      content: `
This is a classic first step into robot kinematics: a **2-DOF planar arm** built with MG996R servos and controlled by an Arduino, programmed to draw a continuous **Lissajous figure** (a figure of 8).

## Simulate first, build second

Before touching the hardware, the kinematics and the trajectory were simulated with a custom **Processing 5** script. Once the motion looked right on screen, the same math was ported to the physical arm. Testing in simulation first saves servos, time and a lot of frustration.

## The trajectory

The drawing path comes from **Lissajous parametric functions**: two sinusoids with different frequencies produce the smooth looping curve. At every step, inverse kinematics converts the desired pen position into the two joint angles the servos need to reach.

## Where this came from

This project was developed and showcased as part of a non-credit robotics course I instructed on behalf of **BUET IRAb**.

The simulation, Arduino code and project files are open-source: [RoboBootCamp_Day4 on GitHub](https://github.com/AbrarMahmud/RoboBootCamp_Day4.git).
    `
    },
 

    
    { 
      id: "2",
      title: "Advance ev3 robotic arm",
      thumbnail: "ytube_thumbnails/Advance_ev3_robotic_arm.png",
      videoUrl: "https://www.youtube.com/embed/ypaqZYPvJ34",
      date: "2024-03-15",
      summary: "This is a factory grade robotic arm,Using mindstorm as base kit .The whole robot is programmed to sort different coloured bricks",
      content: `
This project demonstrates a robotic arm built entirely using components from the LEGO EV3 base set. The design leverages the mechanical flexibility of LEGO Technic parts and is powered by the EV3 Intelligent Brick.

## Features

- **Fully Functional Robotic Arm**: Built exclusively using the EV3 base kit without additional parts.
- **Custom Mechanical Design**: Utilized gears, beams, and motors to create a stable and functional structure.
- **EV3 Programming**: The robotic arm is programmed using the official EV3 graphical programming language, allowing for intuitive control of movement and logic.

## Highlights

- **Creative Engineering**: Maximized the use of base kit components to build a fully operational robot.
- **Educational Focus**: Showcases how robotics, mechanics, and programming can be integrated into a hands-on learning experience.
- **Interactive Demo**: Includes various motion sequences to demonstrate pick-and-place capability and arm articulation.

## Technologies Used

- LEGO Mindstorms EV3
- EV3 Programming Environment

This project highlights the power of creativity and engineering, showing how even basic kits can be used to build complex robotic systems.
      `
    },
    {
      id: "1",
      title: "Ev3 Grab and Lift Bot",
      thumbnail: "ytube_thumbnails/Ev3_grab_and_lift_bot.png",
      videoUrl: "https://www.youtube.com/embed/ep-ILe__7Mk",
      date: "2024-03-01",
      summary: "A versatile EV3 robot using one motor for gripping and lifting, combined with PID line following for smooth autonomous navigation.",
      content: `
This project demonstrates a LEGO EV3 robot built entirely using components from the base EV3 kit. The robot is designed to grab specific objects and lift them into a storage unit, all using a single motor mechanism. It integrates a PID-based line following algorithm for smooth and accurate navigation.

## Features

- **Single Motor Mechanism**: Ingeniously uses one motor to perform two different actions — grabbing an object and lifting it into storage.
- **Object Handling**: Capable of identifying, grabbing, and storing items autonomously.
- **PID Line Following**: Employs a PID control algorithm to ensure smooth and stable line following for path navigation.
- **Compact Design**: Constructed using only the LEGO Technic parts available in the standard EV3 base kit.
- **EV3 Programming**: Programmed using the official LEGO EV3 graphical programming environment.

## Technical Highlights

- **Mechanical Linkage**: A smart mechanical design allows a single EV3 motor to handle both grabbing and lifting, maximizing functionality with minimal hardware.
- **Control System**: PID (Proportional-Integral-Derivative) control ensures responsive and smooth path tracking.
- **Programming Logic**: Custom logic blocks manage object detection, movement control, and storage operations.

## Applications

This robot serves as a great example of resource-efficient design in educational robotics. It can be used for demonstrations, STEM learning, or as a prototype for more complex automation projects.

## Future Enhancements

- Add object detection sensors.
- Introduce multiple storage units.
- Integrate more motors for advanced articulation.

## Conclusion

This LEGO EV3 project highlights creative problem solving and engineering by achieving complex motion and navigation using just a single motor and basic components. It’s an ideal showcase for educational use and a great platform for learning about robotics and control systems.
      `
    }
  ],
  projects: [
    {
    title: "End-to-End Imitation Learning in ROS1-Gazebo",
    description: "An end-to-end robotics framework for training autonomous navigation models using Behavioral Cloning in ROS and Gazebo. The pipeline records camera feeds paired with teleoperated expert controls, training a neural network to map vision inputs directly to real-time velocity and steering commands.",
    image: "projec_imgs/imitation_learning_gazebo.gif",
    technologies: ["ROS", "Gazebo", "Behavioral Cloning", "PyTorch", "Python", "Computer Vision"],
    achievements: ["End-to-End ROS & Deep Learning Integration", "Data Collection via Teleoperation", "Open-Sourced on GitHub"],
    link: "https://github.com/AbrarMahmud/imitation-learning-gazebo"
  },
  {
    title: "RoboBootCamp: Hands-on ROS & Simulation Workshop (Day 5)",
    description: "Interactive workshop curriculum and practical exercises designed for Day 5 of RoboBootCamp. Focused on introducing students and robotics enthusiasts to practical ROS workflows, robot simulation environments, state estimation, and sensor integration.",
    image: "projec_imgs/robo_bootcamp.gif",
    technologies: ["ROS", "Gazebo", "RViz", "Python", "C++", "Robotics Education"],
    achievements: ["Hosted Live Workshop uder IRAB", "Hands-on Practical Simulation Exercises", "Open-Sourced Educational Resource"],
    link: "https://github.com/AbrarMahmud/RoboBootCamp_Day5"
  },
  {
    title: "RoboHack: ROS MoveIt Inverse Kinematics & Manipulation",
    description: "A ROS and MoveIt motion planning project developed for RoboHack. Features inverse kinematics (IK) computations, obstacle-aware trajectory planning, and joint-space motion control for robotic arm manipulators inside simulated environments.",
    image: "projec_imgs/RoboHack.gif",
    technologies: ["ROS", "MoveIt", "Inverse Kinematics", "C++", "Python", "RViz"],
    achievements: ["Robotics Hackathon Implementation", "Complex Motion Planning & Trajectory Execution", "Open-Sourced on GitHub"],
    link: "https://github.com/AbrarMahmud/RoboHack_ROS_Moveit_iK"
  },
      {
      title: "Robotic Arm Manipulator Visualizer using Processing3",
      description: "A powerful tool for visualizing and comparing the solutions of robotic arm inverse kinematics (IK) using Processing3. This project allows users to input a Denavit-Hartenberg (DH) matrix table and visualize the solution path of the manipulator according to a given parametric path function. It also supports real-time Arduino integration.",
      image: "projec_imgs/6_DOF_arm.gif",
      technologies: ["arduino", "inverse kinematics", "processing3"],
      achievements: ["robotic kinematics and DH parameters", "Deployed in practical robots"],
      link: "https://github.com/AbrarMahmud/N_DOF_simulation"
    },
    {
      title: "Fire-Bot: FOMO-vision model based autonomous robot for fire detection and suppression",
      description: "Fire-Bot is an autonomous firefighting robot that uses real-time image processing, stereoscopic cameras, and machine learning for fire detection. It features PID-controlled motion and IMU-based feedback for precise navigation, all powered by a low-power microcontroller, integrating robotics, control systems, and AI into a unified solution.",
      image: "projec_imgs/Ai_FireBot.jpeg",
      technologies: ["Computer Vision", "edge-impulse", "control-systems" , "esp32-arduino"],
      achievements: ["Vision Models on Embedded Systems", "Stereoscopic Distance Estimation","Open-sourced on GitHub"],
      link: "https://github.com/AbrarMahmud/Ai_FireBot"
    },

    {
      title: "WiFi-RoverCam: ESP32-CAM Controlled RC Vehicle Over Local WiFi",
      description: "This project demonstrates a standalone WiFi-based RC vehicle system using the ESP32-CAM module. It serves a custom HTML-based camera interface over a local HTTP server without requiring internet access. The vehicle is controlled via a custom web page, and the control signals are relayed wirelessly to an Arduino Uno handling motor control.",
      image: "projec_imgs/esp32_car.gif",
      technologies: ["html-css-javascript", "huffman-compression-algorithm", "esp32-arduino"],
      achievements: ["Doesn't require active internet", "Doesn't require dedicated app/apk", "ESP32-CAM serves as a standalone HTTP server"],
      link: "https://github.com/AbrarMahmud/esp_cam_car"
    },
    {
      title: "Bluetooth-Controlled Paper Chassis Vehicle",
      description: "This project demonstrates a low-cost Bluetooth-controlled vehicle built using an A4-sized single cut paper chassis template. The goal is to provide a simple and accessible hands-on electronics project that introduces core Arduino and motor control concepts, especially for beginners or students.",
      image: "projec_imgs/blutooth_car.jpeg",
      technologies: ["CAD", "embedded sysytem"],
      achievements: ["Custom Chassis from A4 Hard Paper", "Open-Source Design"],
      link: "https://github.com/AbrarMahmud/Bluetooth_Vehicle"
    }
  ],
  research: [
    {
      title: "Towards Empathetic Voice Assistants :Enhancing Long-Term Conversations with Small Language Models, Semantic Routing, and Emotion-Aware Speech Recognition.Learning-based Adaptive Control for Robotic Manipulation",
      journal: "Undergraduate Thesis",
      year: 2025,
      abstract: "This thesis introduces a sentiment-aware conversational AI system that enhances voice assistant interactions through emotional intelligence. Central to the architecture is Whisper-E, an advanced ASR model integrating emotion recognition via a novel E-tokenizer, enabling real-time sentiment tagging alongside accurate transcription. A fine-tuned Small Language Model, guided by a semantic router and dynamic prompts, generates emotionally aligned responses in long-term dialogues. The system leverages a custom data pipeline for emotion-tagged speech synthesis, addressing dataset limitations. Evaluations reveal improved coherence, empathy, and relevance over baselines. This scalable solution fosters emotionally intelligent AI, with applications in mental health, companionship, and customer service, promoting compassionate digital interactions.",
      description: "Utilized a fine-tuned Small Language Model (SLM) with semantic routing to enable long-term conversations while reducing inference time. Developed a custom Emotion-Aware Speech Recognition model to enhance the context of SLM.",
      link: "#",
      additional_info: "Supervisor : Dr. Mohammad Ariful Haque"
    },
    {
      title: " University Helping Robot .A LLM based multi-agent robotic system.",
      journal: "Funded Research",
      year: "In Progress",
      abstract: "Work In progress",
      description: "Currently working as the ROS developer ,integrating LLM agents with robot’s low level hardware, with the ultimate goal of giving full control to the LLM agent.",
      link: "#",
      additional_info: "Supervisor : Dr. Mohammad Ariful Haque"
    }
  ],
  social: {
    github: "https://github.com/AbrarMahmud",
    linkedin: "www.linkedin.com/in/kazi-abrar-mahmud",
    youtube: "https://www.youtube.com/@abrarmahmud8652",
    email: "abrar.mahmud790011@gmail.com",
    googleScholar: "https://scholar.google.com/citations?hl=en&user=NixBC9MAAAAJ"
  },
  articles: [
    {
      title: "We Made a Robot That Plays Chess With Us — Here’s How",
      journal: "Medium",
      year: 2024,
      abstract: "ChessBot is an intelligent robotic system designed to autonomously play chess by integrating mechanical design, computer vision, and artificial intelligence. The system features a 5-DoF robotic arm modeled in Autodesk Fusion 360 and simulated using PyBullet for motion planning. A vision system processes real-time images of the chessboard, utilizing CNNs to classify piece positions and detect human moves. These inputs are analyzed by the Stockfish engine to compute optimal responses, which are then executed by the robotic arm. ChessBot demonstrates the seamless fusion of robotics and AI, offering an innovative approach to human-robot interaction through a strategic board game.",
      description: "ChessBot is an AI-powered robotic system that plays chess autonomously using a 5-DoF robotic arm, computer vision for move detection, and the Stockfish engine for strategy, showcasing real-time integration of robotics, machine learning, and intelligent decision-making.",
      link: "https://medium.com/@shadidyousuf14/chessbot-an-intelligent-robotic-system-for-playing-chess-d7ca3e93752a",
      //citations: 0
    }
    // Add more articles as needed
  ]
};
