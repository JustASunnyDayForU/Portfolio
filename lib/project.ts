// lib/projects.ts

// Type definitions for your projects
export type Project = {
    id: string
    title: string
    description: string
    shortDescription: string
    image: string
    category: "Live2D" | "Unity" | "Web" | "Mobile" | "3D" // Add your categories
    link?: string
    technologies: string[]
  }
  
  export type ProjectDetail = Project & {
    longDescription: string
    images: string[]
    videoId?: string
    features: string[]
    githubLink?: string
    liveDemo?: string
    timeline?: string
    role?: string
    team?: string[]
    challenges?: string[]
    solutions?: string[]
  }
  
  // Featured projects (for homepage)
  export const featuredProjects: Project[] = [
    {
      id: "live2d-vtuber",
      title: "VTuber Live2D Model",
      shortDescription: "Interactive Live2D character for streaming",
      description: "A fully rigged Live2D character with advanced expressions and physics",
      image: "/images/projects/live2d-vtuber/main.jpg",
      category: "Live2D",
      link: "https://your-live2d-demo.com",
      technologies: ["Live2D Cubism", "After Effects", "Photoshop"],
    },
    {
      id: "unity-game",
      title: "Adventure Game",
      shortDescription: "3D Unity adventure game",
      description: "An immersive 3D adventure game built with Unity",
      image: "/images/projects/unity-game/main.jpg",
      category: "Unity",
      link: "https://your-game.com",
      technologies: ["Unity", "C#", "Blender", "FMOD"],
    },
    // Add more featured projects
  ]
  
  // All projects with detailed information
  export const projectsData: Record<string, ProjectDetail> = {
    "live2d-vtuber": {
      id: "live2d-vtuber",
      title: "VTuber Live2D Model",
      shortDescription: "Interactive Live2D character for streaming",
      description: "A fully rigged Live2D character with advanced expressions and physics",
      longDescription: `
        This project showcases a professionally rigged Live2D character designed for VTubing and streaming applications.
        
        The character features advanced facial expressions, physics-based hair and clothing movement, and smooth transitions between different emotional states.
        
        Special attention was paid to creating natural movement and realistic responses to user input, making the character feel alive and engaging during streams.
        
        The implementation includes:
        - Advanced face tracking integration
        - Custom expression presets
        - Physics-based movement for hair and accessories
        - Optimized performance for real-time streaming
      `,
      image: "/images/projects/live2d-vtuber/main.jpg",
      images: [
        "/images/projects/live2d-vtuber/main.jpg",
        "/images/projects/live2d-vtuber/expressions.jpg",
        "/images/projects/live2d-vtuber/rigging.jpg",
        "/images/projects/live2d-vtuber/physics.jpg",
      ],
      category: "Live2D",
      link: "https://your-live2d-demo.com",
      videoId: "your-youtube-video-id",
      technologies: [
        "Live2D Cubism",
        "After Effects",
        "Photoshop",
        "Live2D Viewer",
        "OBS Studio",
      ],
      features: [
        "Advanced facial rigging",
        "Physics-based animation",
        "Multiple expression presets",
        "Real-time face tracking",
        "Custom motion animations",
      ],
      githubLink: "https://github.com/your-username/live2d-vtuber",
      liveDemo: "https://your-live2d-demo.com",
      timeline: "3 months",
      role: "Live2D Artist & Rigger",
      team: ["You (Lead Artist)", "Animator", "Technical Advisor"],
      challenges: [
        "Implementing complex facial expressions while maintaining performance",
        "Creating natural-looking physics for hair and clothing",
        "Optimizing for real-time streaming",
      ],
      solutions: [
        "Developed a custom expression system using parameter groups",
        "Implemented layered physics calculations for natural movement",
        "Optimized mesh deformations and reduced parameter complexity",
      ],
    },
    "unity-game": {
      id: "unity-game",
      title: "Adventure Game",
      shortDescription: "3D Unity adventure game",
      description: "An immersive 3D adventure game built with Unity",
      longDescription: `
        This 3D adventure game was developed using Unity and features a rich, interactive world with dynamic environments and engaging gameplay mechanics.
        
        Players explore a vast open world, solve puzzles, and interact with various characters while uncovering the story through environmental storytelling.
        
        The game implements advanced features such as:
        - Dynamic day/night cycle
        - Weather system
        - AI-driven NPCs
        - Quest system
        - Inventory management
      `,
      image: "/images/projects/unity-game/main.jpg",
      images: [
        "/images/projects/unity-game/main.jpg",
        "/images/projects/unity-game/gameplay.jpg",
        "/images/projects/unity-game/environment.jpg",
        "/images/projects/unity-game/characters.jpg",
      ],
      category: "Unity",
      link: "https://your-game.com",
      videoId: "your-youtube-video-id",
      technologies: [
        "Unity",
        "C#",
        "Blender",
        "FMOD",
        "Shader Graph",
        "ProBuilder",
      ],
      features: [
        "Open world environment",
        "Dynamic weather system",
        "Advanced AI pathfinding",
        "Quest management system",
        "Inventory system",
        "Save/Load functionality",
      ],
      githubLink: "https://github.com/your-username/unity-game",
      liveDemo: "https://your-game.com",
      timeline: "8 months",
      role: "Lead Developer",
      team: [
        "You (Lead Developer)",
        "3D Artist",
        "Sound Designer",
        "Level Designer",
      ],
      challenges: [
        "Optimizing large open-world performance",
        "Implementing complex AI behavior",
        "Creating a flexible quest system",
      ],
      solutions: [
        "Implemented dynamic LOD and object pooling",
        "Developed modular behavior tree system",
        "Created data-driven quest framework",
      ],
    },
    // Add more projects...
  }