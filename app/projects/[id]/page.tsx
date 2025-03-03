"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

// Project type definition for better TypeScript support
type Project = {
  title: string
  description: string
  images: string[]
  category: "Live2D" | "Unity" | "Web" | "3D" | "Unity&Live2D" | "Illustration" | "Mobile"
  link?: string
  videoId?: string
  technologies: string[]
  features: string[]
  gallery?: {
    title: string
    image: string
  }[]
}

// Projects data
const projects: Record<string, Project> = {
  "pulita": {
    title: "Live2D Character Pulita",
    description: "Interactive Live2D character with facial expressions and animations",
    images: [
      "/img/pulita/pulita-thumbnail.png",
      "/img/pulita/pulita-1.png",
      "/img/pulita/pulita-2.png",
      "/img/pulita/pulita-3.png",
    ],
    category: "Live2D",
    link: process.env.NEXT_PUBLIC_LIVE2D_URL as string,
    videoId: "hUm-qH6-zww",
    technologies: [
      "Live2D Cubism",
      "ClipStudio Paint",
    ],
    features: [
      "Facial expressions",
      "Physics-based hair and clothing",
      "Eye tracking",
      "Responsive animations",
    ],
  },
  "mewing-maiden": {
    title: "Mewing Maiden",
    description: "Tower defense game built with Unity and C# animate character with Live2D",
    images: [
      "/img/tower-defense/main.png",
      "/img/tower-defense/gameplay.png",
      "/img/tower-defense/characters.png",
    ],
    category: "Unity&Live2D",
    link: "https://unity-game.com",
    videoId: "nbZkcDlMiEM",
    technologies: [
      "Unity",
      "C#",
      "Live2D",
      "ClipStudio Paint"
    ],
    features: [
      "Tower Defense",
      "Upgrade system",
      "Unique tower abilities",
      "Smooth animations with Live2D"
    ]
  },
  "e-commerce-fullstack": {
    title: "E-Commerch-Web Store&Admin",
    description: "Full-stack E-commerce web application with Nextjs",
    images: [
      "/img/tower-defense/main.png",
      "/img/tower-defense/gameplay.png",
      "/img/tower-defense/characters.png",
    ],
    category: "Web",
    link: "https://unity-game.com",
    videoId: "nbZkcDlMiEM",
    technologies: [
      "Unity",
      "C#",
      "Live2D",
      "ClipStudio Paint"
    ],
    features: [
      "Tower Defense",
      "Dynamic weather system",
      "Advanced AI",
      "Adaptive storyline"
    ]
  },
  "makia": {
    title: "Tower Defense Game",
    description: "3D adventure game built with Unity and C#.",
    images: [
      "/img/Makia/Makia-FullPic.png",
    ],
    category: "Illustration",
    technologies: [
      "ClipStudio Paint"
    ],
    features: [
    ]
  },
  "P-Bow": {
    title: "P'Bow Live2D Animation",
    description: "Live2D animation for my friend's character in webtoon",
    images: [
      "/img/tower-defense/main.png",
      "/img/P-Bow/P,Bow-FullPic.png",
    ],
    videoId : "U8PezhTxC4s",
    category: "Live2D",
    link: process.env.NEXT_PUBLIC_LIVE2D_URL as string,
    technologies: [
      "ClipStudio Paint",
      "Live2D Cubism",
    ],
    features: [
      "Idle Animation",
      "Clicked Animation",
    ]
  },
  "Fenny-Game": {
    title: "P'Bow Live2D Animation",
    description: "Live2D animation for my friend's character in webtoon",
    images: [
      "/img/tower-defense/main.png",
      "/img/P-Bow/P,Bow-FullPic.png",
    ],
    videoId : "U8PezhTxC4s",
    category: "Live2D",
    link: process.env.NEXT_PUBLIC_LIVE2D_URL as string,
    technologies: [
      "ClipStudio Paint",
      "Live2D Cubism",
    ],
    features: [
      "Idle Animation",
      "Clicked Animation",
    ]
  },
  // Add more projects here
}

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string
  const project = projects[projectId]

  if (!project) {
    return (
      <div className="container pt-24 pb-16 text-center">
        <h1 className="text-4xl font-bold mb-8">Project not found</h1>
        <Button onClick={() => router.push("/projects")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
      </div>
    )
  }

  return (
    <div className="container pt-24 pb-16">
      <Button 
        variant="ghost" 
        onClick={() => router.push("/projects")} 
        className="mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <Badge className="text-base px-3 py-1">
              {project.category}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        {/* Main Content - Video or Main Image */}
        <div className="mb-8 rounded-lg overflow-hidden bg-muted">
          {project.videoId ? (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
          ) : (
           <div className="relative rounded-lg overflow-hidden bg-muted group">
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="100vw"
          priority
        />
      </div>
      {/* Optional overlay for better text visibility */}
      <div className="absolute" />
    </div>
  )}
</div>

       {/* Image Gallery with Masonry Layout */}
{project.images.length > 1 && (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
      {project.images.slice(1).map((image, index) => (
        <div 
          key={index} 
          className="group relative rounded-lg overflow-hidden bg-muted break-inside-avoid"
        >
          <div className="relative w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${project.title} - Image ${index + 2}`}
              width={1200}
              height={800}
              className="w-full h-auto object-cover transition-transform group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        {/* Additional Gallery (if exists) */}
        {project.gallery && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  <p className="text-center font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies & Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <ul className="space-y-2">
              {project.technologies.map((tech, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-secondary mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        {project.link && (
          <div className="text-center">
            <Button asChild size="lg">
              <Link href={project.link} target="_blank">
                Visit Project <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  )
}