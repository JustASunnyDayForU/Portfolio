"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const allProjects = [
    {
      id: "pulita",
      title: "Live2D Character Pulita",
      description: "Interactive Live2D character with facial expressions and animations",
      image: "/img/pulita/pulita-thumbnail.png",
      category: "Live2D",
    },
    {
      id: "mewing-maiden",
      title: "Mewing Maiden",
      description: "Tower defense game built with Unity and C# animate character with Live2D",
      image: "/img/MewingMaiden/MewingMaiden-Thumbnail.png",
      category: "Unity&Live2D",
    },
    {
      id: "e-commerce-fullstack",
      title: "E-Commerch-Web Store&Admin",
      description: "Full-stack E-commerce web application with Nextjs",
      image: "/img/eComWeb/eCom-Thumbnail.png",
      category: "Web",
    },
    {
      id: "makia",
      title: "Makia Illustration (OC Character)",
      description: "Original illustration",
      image: "/img/Makia/Makia-Thumbnail.png",
      category: "Illustration",
    },
    {
      id: "project5",
      title: "Live2D Animation",
      description: "Custom Live2D animation for streaming",
      image: "/placeholder.svg?height=400&width=600",
      category: "Live2D",
    },
    {
      id: "project6",
      title: "3D Character Model",
      description: "Detailed 3D character model for games",
      image: "/placeholder.svg?height=400&width=600",
      category: "3D Modeling",
    },
    {
      id: "project7",
      title: "UI Design System",
      description: "Comprehensive UI design system for web applications",
      image: "/placeholder.svg?height=400&width=600",
      category: "UI/UX",
    },
    {
      id: "project8",
      title: "Interactive Installation",
      description: "Interactive art installation using motion sensors",
      image: "/placeholder.svg?height=400&width=600",
      category: "Interactive",
    },
  ]

  return (
    <div className="container pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-8">All Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/projects/${project.id}`}>
              <Card className="overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer h-full">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="aspect-video object-cover"
                  />
                  <Badge className="absolute top-4 right-4">{project.category}</Badge>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

