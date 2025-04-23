export const portfolio = {
  name: "Kazi Abrar Mahmud",
  title: "Robotics • Ai/ML • Singnal Processing",
  bio: "I'm an EEE graduate with a strong focus on advanced robotics and the integration of state-of-the-art AI/ML algorithms into real robotic hardware. My research aims to bridge the gap between intelligent algorithms and real-world applications. Currently, I'm exploring funded PhD opportunities to further pursue this path and contribute to the advancement of autonomous systems.",
  avatar: "profile_imgs/IMG_1.jpeg",
  cv: `${import.meta.env.BASE_URL}CV/CV_Kazi_Abrar_Mahmud.pdf`,
  experience: [
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
    "Robotic Systems",
    "Computer Vision",
    "Machine Learning",
    "ROS",
    "PyTorch",
    "C++",
    "3D CAD",
    "SLAM",
    "Motion Planning",
    "Control Systems"
  ],
  blogs: [
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
      title: "Fire-Bot: FOMO-vision model based autonomous robot for fire detection and suppression",
      description: "Fire-Bot is an autonomous firefighting robot that uses real-time image processing, stereoscopic cameras, and machine learning for fire detection. It features PID-controlled motion and IMU-based feedback for precise navigation, all powered by a low-power microcontroller, integrating robotics, control systems, and AI into a unified solution.",
      image: "projec_imgs/Ai_FireBot.jpeg",
      technologies: ["Computer Vision", "edge-impulse", "control-systems" , "esp32-arduino"],
      achievements: ["Vision Models on Embedded Systems", "Stereoscopic Distance Estimation","Open-sourced on GitHub"],
      link: "https://github.com/AbrarMahmud/Ai_FireBot"
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
