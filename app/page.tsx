"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MoonIcon, SunIcon, Copy, Mail, Github, Linkedin, Twitter, ChevronDown, FileText } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Page() {
  const { theme, setTheme } = useTheme()
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_EMAIL as string)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const featuredProjects = [
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
      id: "Fenny-Game",
      title: "Fenny defense of the depth",
      description: "Fenny is the game my team made in GameJamGlobal2025",
      image: "/img/jam2025-game/jam2025game-Thumbnail.png",
      category: "Unity&Live2D",
    },
  ]

  const skills = ["Live2D", "Unity", "Clipstudio Paint","Next.js", "React",  "JavaScript", "TypeScript","Flutter"]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-2xl font-bold text-primary">
              Portfolio
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button asChild variant="outline">
              <Link href="/PDF/Threerith CV Resume.pdf" target="_blank">
                Resume
              </Link>
            </Button>
            <Button asChild variant="outline">
            <Link href="/PDF/Live2D-Tutorial.pdf" target="_blank" title="Live2D Tutorial">
              <FileText className="h-4 w-4 mr-2" />
            </Link>
          </Button>
            <Button asChild>
              <Link href={process.env.NEXT_PUBLIC_LIVE2D_URL as string} target="_blank">
                View Live2D
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container pt-24">
        {/* About Section - Now at the top */}
        <section className="py-20" id="about">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Image
                src="/img/Mypic/Myportpic.jpg"
                alt="About"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
              <p className="text-muted-foreground">
              Hi I&apos;m a creative developer blending art and technology to craft engaging digital experiences. I specialize in Live2D animation for anime and game projects, focusing on immersive, interactive media.
               I also build responsive web interfaces with NextJS, React, and TypeScript, and have experience with Unity, Live2DSDK integration, and anime-style illustration.
              </p>
              <p className="text-muted-foreground">
              As a native Thai speaker fluent in English, I&apos; eager to bring my diverse skills to an internship in Live2D design, web, and game development.
              </p>
              <motion.div
                className="flex justify-center pt-4"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => {
                    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <ChevronDown className="h-6 w-6" />
                  <span className="sr-only">Scroll to skills</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section - Simplified */}
        <section className="py-20" id="skills">
          <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl">Skills</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-center p-4 border rounded-lg hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-medium">{skill}</h3>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="py-20" id="projects">
          <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-md space-y-8"
          >
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
              <p className="text-muted-foreground">Feel free to reach out through any of these channels.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>dosyim@gmail.com</span>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={copyEmail}>
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy email</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{copiedEmail ? "Copied!" : "Copy email"}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href={process.env.NEXT_PUBLIC_GITHUB_URL as string} target="_blank">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL as string} target="_blank">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={process.env.NEXT_PUBLIC_TWITTER_URL as string} target="_blank">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js and Tailwind CSS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href={process.env.NEXT_PUBLIC_TWITTER_URL as string} target="_blank">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={process.env.NEXT_PUBLIC_GITHUB_URL as string} target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

