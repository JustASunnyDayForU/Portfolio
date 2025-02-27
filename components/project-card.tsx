"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Project } from "@/lib/project"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/projects/${project.id}`}>
        <Card className="overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer">
          <div className="relative">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <Badge className="absolute top-4 right-4">
              {project.category}
            </Badge>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="outline">
                  +{project.technologies.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}