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
      id: "mewing-maidenL2D",
      title: "Mewing Maiden Live2D Gallery",
      description: "Live2D Gallery from Mewing Maiden (game made with Unity and C# animate character with Live2D)",
      image: "/img/MewwingMaiden-L2D/MewingMaidenL2D-Thumbnail.png",
      category: "Live2D",
    },
    {
      id: "OrientalResort",
      title: "Oriental Resort Website Mockup",
      description: "Mockup website for a resort with reference from my senior example PDF",
      image: "/img/BeachResort/Oriental.png",
      category: "Live2D",
    },
    {
      id: "e-commerce-fullstack",
      title: "E-Commerch-Web Store&Admin",
      description: "Full-stack E-commerce web application with Nextjs",
      image: "/img/eComWeb/eCom-Thumbnail.png",
      category: "Web",
    },
    {
      id: "Fenny-Game",
      title: "Fenny defense of the depth",
      description: "Fenny is the game my team made in GameJamGlobal2025",
      image: "/img/jam2025-game/jam2025game-Thumbnail.png",
      category: "Unity&Live2D",
    },
    {
      id: "Fenny-L2D",
      title: "Fenny defense of the depth L2D Gallery",
      description: "Live2D Gallery from Fenny defense of the depth (game made in GameJamGlobal2025)",
      image: "/img/jam2025-L2D/Jam2025Char-FullPic.png",
      category: "Live2D",
    },
    {
      id: "makia",
      title: "Illustration Gallery",
      description: "My illustration gallery",
      image: "/img/Makia/raorarraceQueenThumbnail.png",
      category: "Illustration",
    },
    {
      id: "P-Bow",
      title: "P'Bow Live2D Animation",
      description: "Live2D animation for my friend's character in webtoon",
      image: "/img/P-Bow/P-Bow-Thumbnail.png",
      category: "Live2D",
    },
    {
      id: "Character-Design-L2D",
      title: "Character Design Class Live2D",
      description: "Live2D i made in my character design class",
      image: "/img/CharDS/CharDS-Thumbnail.png",
      category: "Live2D",
    },
    //add pj here
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

