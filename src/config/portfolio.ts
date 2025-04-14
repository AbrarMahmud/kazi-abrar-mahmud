export const portfolio = {
  name: "Kazi Abrar Mahmud",
  title: "Robotics Research Scientist",
  bio: "Leading researcher in autonomous robotics and machine learning with a focus on human-robot interaction. Published extensively in top-tier robotics journals and conferences including ICRA, RSS, and IEEE Robotics and Automation Letters.",
  avatar: "/kazi-abrar-mahmud/profile_imgs/IMG_1.jpeg",
  cv: `${import.meta.env.BASE_URL}CV/CV_Kazi_Abrar_Mahmud.pdf`,
  experience: [
    {
      title: "Senior Robotics Researcher",
      company: "MIT Robotics Lab",
      period: "2020 - Present",
      description: "Leading research in adaptive robot control and human-robot interaction. Managing a team of 5 PhD students and collaborating with industry partners.",
      achievements: [
        "Published 12 papers in top-tier conferences",
        "Secured $2M in research funding",
        "Developed novel control algorithms deployed in industrial settings"
      ]
    },
    {
      title: "Robotics Engineer",
      company: "Boston Dynamics",
      period: "2018 - 2020",
      description: "Developed motion planning algorithms for quadruped robots. Led the perception team for autonomous navigation.",
      achievements: [
        "Improved robot stability by 40%",
        "Filed 3 patents",
        "Reduced computation time by 60%"
      ]
    },
    {
      title: "Research Assistant",
      company: "Stanford Robotics Lab",
      period: "2015 - 2018",
      description: "Conducted research in robot learning and manipulation. Developed novel reinforcement learning algorithms.",
      achievements: [
        "Published 6 conference papers",
        "Best Paper Award at ICRA 2017",
        "Open-sourced learning framework"
      ]
    }
  ],
  skills: [
    "Robotic Systems",
    "Computer Vision",
    "Machine Learning",
    "ROS/ROS2",
    "PyTorch",
    "C++",
    "SLAM",
    "Motion Planning",
    "Control Systems",
    "Sensor Fusion"
  ],
  blogs: [
    {
      id: "adaptive-control-explained",
      title: "Understanding Adaptive Robot Control",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/EXAMPLE1",
      date: "2024-03-15",
      summary: "A deep dive into adaptive control algorithms for robotic systems",
      content: `
# Understanding Adaptive Robot Control

In today's video, I walk you through the fascinating world of adaptive control in robotics and how it enables robots to handle uncertain environments. This technology is revolutionizing how robots interact with dynamic environments and adapt to changing conditions in real-time.

## What is Adaptive Control?

Adaptive control is a sophisticated approach that allows robots to:
- Automatically adjust their behavior based on changing conditions
- Learn from their interactions with the environment
- Maintain stability even when faced with uncertainties

## Key Components Covered

### 1. System Identification
- Real-time parameter estimation
- Dynamic model updates
- Sensor fusion techniques

### 2. Control Architecture
- Adaptive gain scheduling
- Model reference adaptive control (MRAC)
- Self-tuning regulators

### 3. Implementation Challenges
- Stability guarantees
- Computational efficiency
- Robustness considerations

## Practical Examples

In the video, we demonstrate several real-world applications:
1. **Industrial Manipulation**
   - Handling objects of varying weights
   - Adapting to different surface properties
   - Real-time force control adjustments

2. **Mobile Robot Navigation**
   - Terrain adaptation
   - Dynamic obstacle avoidance
   - Energy optimization

## Code Implementation

We walk through a Python implementation of a basic adaptive controller:

\`\`\`python
class AdaptiveController:
    def __init__(self, learning_rate=0.1):
        self.params = np.zeros(3)
        self.lr = learning_rate

    def update(self, error, state):
        self.params += self.lr * error * state
        return self.params @ state
\`\`\`

## Future Directions

The field of adaptive control continues to evolve with:
- Integration with deep learning
- Multi-robot adaptive systems
- Human-in-the-loop adaptation

## Resources

For those interested in learning more:
- [Adaptive Control Textbook](https://example.com)
- [Research Papers](https://example.com)
- [GitHub Repository](https://example.com)

## Next Steps

In our next video, we'll dive deeper into implementing these concepts on a real robotic system. Stay tuned!
      `
    },
    {
      id: "slam-tutorial",
      title: "SLAM Tutorial: Building Maps with Robots",
      thumbnail: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/EXAMPLE2",
      date: "2024-03-01",
      summary: "Learn how robots build maps and navigate using SLAM",
      content: `
# SLAM Tutorial: Building Maps with Robots

Welcome to this comprehensive tutorial on Simultaneous Localization and Mapping (SLAM). In this video, we break down the complex topic of SLAM into digestible components and show you how to implement a basic SLAM system.

## Understanding SLAM

SLAM is a crucial technology that allows robots to:
- Build maps of unknown environments
- Track their position within these maps
- Navigate autonomously

## Key Concepts Covered

### 1. Feature Detection
- Corner detection algorithms
- Feature descriptors
- Matching techniques

### 2. Loop Closure
- Place recognition
- Graph optimization
- Error correction

### 3. Mapping
- Occupancy grid maps
- Landmark-based maps
- 3D point clouds

## Implementation Steps

We walk through a complete implementation using Python:

### Step 1: Feature Extraction
\`\`\`python
def extract_features(image):
    orb = cv2.ORB_create()
    keypoints, descriptors = orb.detectAndCompute(image, None)
    return keypoints, descriptors
\`\`\`

### Step 2: Feature Matching
\`\`\`python
def match_features(desc1, desc2):
    matcher = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
    matches = matcher.match(desc1, desc2)
    return sorted(matches, key=lambda x: x.distance)
\`\`\`

### Step 3: Motion Estimation
\`\`\`python
def estimate_motion(matches, kp1, kp2):
    pts1 = np.float32([kp1[m.queryIdx].pt for m in matches])
    pts2 = np.float32([kp2[m.trainIdx].pt for m in matches])
    F, mask = cv2.findFundamentalMat(pts1, pts2, cv2.RANSAC)
    return F, mask
\`\`\`

## Practical Tips

1. **Parameter Tuning**
   - Feature detector thresholds
   - Matching distance criteria
   - RANSAC parameters

2. **Performance Optimization**
   - Keyframe selection
   - Local mapping
   - Bundle adjustment

3. **Error Handling**
   - Outlier rejection
   - Loop closure verification
   - Scale drift correction

## Common Challenges

We address several common challenges:
- Scale ambiguity
- Loop closure detection
- Real-time performance
- Dynamic environments

## Next Steps

To continue learning:
1. Download the sample code
2. Try with your own dataset
3. Experiment with different parameters
4. Join our community

## Resources

- [Complete Code Repository](https://example.com)
- [Dataset Collection](https://example.com)
- [Research Papers](https://example.com)

Stay tuned for our next tutorial where we'll implement advanced SLAM techniques!
      `
    }
  ],
  projects: [
    {
      title: "Adaptive Robot Control",
      description: "Developed novel adaptive control algorithms for robotic manipulation in uncertain environments. Implemented real-time learning mechanisms for dynamic adaptation to changing conditions.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      technologies: ["ROS2", "PyTorch", "C++"],
      achievements: ["40% improvement in task success rate", "Published in ICRA 2023", "Open-sourced on GitHub"],
      link: "#"
    },
    {
      title: "Vision-Based Navigation",
      description: "Implemented real-time SLAM system for autonomous navigation in dynamic environments. Developed novel algorithms for obstacle avoidance and path planning.",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=600&fit=crop",
      technologies: ["Computer Vision", "CUDA", "Python"],
      achievements: ["30Hz update rate on embedded hardware", "Deployed in 3 industrial robots", "2 patent applications"],
      link: "#"
    },
    {
      title: "Human-Robot Collaboration",
      description: "Created predictive models for safe and efficient human-robot interaction in shared workspaces. Implemented real-time trajectory optimization.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      technologies: ["PyTorch", "ROS", "Motion Planning"],
      achievements: ["50% reduction in task completion time", "Featured in MIT Tech Review", "Industry collaboration"],
      link: "#"
    }
  ],
  research: [
    {
      title: "Learning-based Adaptive Control for Robotic Manipulation",
      journal: "IEEE Transactions on Robotics",
      year: 2023,
      abstract: "This paper presents a novel approach to robotic manipulation combining deep reinforcement learning with adaptive control. We introduce a hybrid architecture that leverages the generalization capabilities of deep learning while maintaining the robustness guarantees of classical control theory. Our method demonstrates significant improvements in task success rates across various manipulation scenarios, particularly in environments with uncertain dynamics and changing conditions. The system achieves real-time performance and has been validated on multiple robotic platforms.",
      description: "Novel approach combining reinforcement learning with adaptive control for robust manipulation in uncertain environments. Demonstrated 40% improvement in task success rate.",
      link: "#",
      citations: 45
    },
    {
      title: "Real-time Visual SLAM for Dynamic Environments",
      journal: "International Conference on Robotics and Automation (ICRA)",
      year: 2022,
      abstract: "We present a robust visual SLAM system designed specifically for dynamic environments. Our approach introduces a novel method for detecting and tracking moving objects while maintaining accurate camera localization and mapping. The system employs a multi-threaded architecture that achieves real-time performance on embedded hardware. Extensive experiments demonstrate the system's effectiveness in challenging scenarios including crowded indoor environments and dynamic outdoor scenes. The results show significant improvements over existing methods in terms of accuracy and computational efficiency.",
      description: "Innovative SLAM system capable of handling dynamic obstacles and changing environments. Achieved 30Hz update rate on embedded hardware.",
      link: "#",
      citations: 78
    },
        {
      title: "Learning-based Adaptive Control for Robotic Manipulation",
      journal: "IEEE Transactions on Robotics",
      year: 2023,
      abstract: "This paper presents a novel approach to robotic manipulation combining deep reinforcement learning with adaptive control. We introduce a hybrid architecture that leverages the generalization capabilities of deep learning while maintaining the robustness guarantees of classical control theory. Our method demonstrates significant improvements in task success rates across various manipulation scenarios, particularly in environments with uncertain dynamics and changing conditions. The system achieves real-time performance and has been validated on multiple robotic platforms.",
      description: "Novel approach combining reinforcement learning with adaptive control for robust manipulation in uncertain environments. Demonstrated 40% improvement in task success rate.",
      link: "#",
      citations: 45
    },
        {
      title: "Learning-based Adaptive Control for Robotic Manipulation",
      journal: "IEEE Transactions on Robotics",
      year: 2023,
      abstract: "This paper presents a novel approach to robotic manipulation combining deep reinforcement learning with adaptive control. We introduce a hybrid architecture that leverages the generalization capabilities of deep learning while maintaining the robustness guarantees of classical control theory. Our method demonstrates significant improvements in task success rates across various manipulation scenarios, particularly in environments with uncertain dynamics and changing conditions. The system achieves real-time performance and has been validated on multiple robotic platforms.",
      description: "Novel approach combining reinforcement learning with adaptive control for robust manipulation in uncertain environments. Demonstrated 40% improvement in task success rate.",
      link: "#",
      citations: 45
    },
        {
      title: "Learning-based Adaptive Control for Robotic Manipulation",
      journal: "IEEE Transactions on Robotics",
      year: 2023,
      abstract: "This paper presents a novel approach to robotic manipulation combining deep reinforcement learning with adaptive control. We introduce a hybrid architecture that leverages the generalization capabilities of deep learning while maintaining the robustness guarantees of classical control theory. Our method demonstrates significant improvements in task success rates across various manipulation scenarios, particularly in environments with uncertain dynamics and changing conditions. The system achieves real-time performance and has been validated on multiple robotic platforms.",
      description: "Novel approach combining reinforcement learning with adaptive control for robust manipulation in uncertain environments. Demonstrated 40% improvement in task success rate.",
      link: "#",
      citations: 45
    }
  ],
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    email: "sarah.chen@robotics.edu",
    googleScholar: "https://scholar.google.com"
  }
};
