"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, FileText } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold text-primary">
            Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/projects"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/projects" && "text-primary",
              )}
            >
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
  )
}

