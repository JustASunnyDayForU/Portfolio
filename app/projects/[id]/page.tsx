"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string

  // This would typically come from an API or database
  const projects = {
    project1: {
      title: "Live2D Character Pulita",
      description:
        "Interactive Live2D character with facial expressions and animations. This project showcases advanced Live2D techniques including physics-based hair and clothing movement, realistic eye tracking, and responsive facial expressions.",
      images: [
        "/img/pulita/pulita-thumbnail.png",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      category: "Live2D",
      link: "https://live2d-project.com",
      videoId: "hUm-qH6-zww", // YouTube video ID
      technologies: ["Live2D Cubism", "ClipStudio Paint",],
      features: [
        "facial expressions",
        "Physics-based hair and clothing",
        "Eye tracking",
        "Responsive animations",
      ],
    },
    project2: {
      title: "Unity Game",
      description:
        "3D adventure game built with Unity and C#. ",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      category: "Unity",
      link: "https://unity-game.com",
      videoId: "nbZkcDlMiEM", // YouTube video ID
      technologies: ["Unity", "C#", "Live2D", "ClipStudio Paint"],
      features: ["Tower Defense", "Dynamic weather system", "Advanced AI", "Adaptive storyline"],
    },
    // Add more projects as needed
  }

  const project = projects[projectId as keyof typeof projects]

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
      <Button variant="ghost" onClick={() => router.push("/projects")} className="mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <Badge className="text-base px-3 py-1">
              {project.category}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        {/* Main image or video */}
        <div className="mb-8 rounded-lg overflow-hidden">
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
              ></iframe>
            </div>
          ) : (
            <Image
              src={project.images[0] || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full aspect-video object-cover"
            />
          )}
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {project.images.map((image, index) => (
            <Image
              key={index}
              src={image || "/placeholder.svg"}
              alt={`${project.title} - Image ${index + 1}`}
              width={400}
              height={300}
              className="rounded-lg object-cover aspect-video"
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <ul className="space-y-2">
              {project.technologies.map((tech, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-secondary mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visit site button */}
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

