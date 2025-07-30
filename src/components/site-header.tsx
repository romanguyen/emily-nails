"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu, Sparkles } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation" // Import usePathname

export function SiteHeader() {
  const pathname = usePathname() // Get current pathname

  const navLinks = [
    { href: "/", label: "Domov" },
    { href: "/about", label: "O nás" },
    { href: "/services", label: "Služby" },
    { href: "/gallery", label: "Galéria" },
    { href: "/faq", label: "Časté otázky" },
    { href: "/contact", label: "Kontakt" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
          <Sparkles className="h-6 w-6 text-pink-500" />
          <span>Emily Nails</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:underline underline-offset-4 ${
                pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground"
              }`}
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/reservation">Objednať sa</Link>
          </Button>
          <ModeToggle />
        </nav>
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Prepnúť navigačné menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex w-full items-center py-2 text-lg font-semibold ${
                      pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild>
                  <Link href="/reservation">Objednať sa</Link>
                </Button>
                <Link
                  href="/login"
                  className="flex w-full items-center py-2 text-lg font-semibold text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Prihlásenie pre administrátorov
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
