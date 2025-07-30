"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ContactPage() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
      },
    },
  }

  return (
    <motion.section
      variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Kontaktujte nás</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Radi by sme od vás počuli! Kontaktujte nás pomocou ktorejkoľvek z nižšie uvedených metód.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2">
          <div className="grid gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Spojte sa s nami</h2>
              <p className="text-muted-foreground">
                Vyplňte formulár nižšie alebo použite naše kontaktné údaje na priamy kontakt.
              </p>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Meno</Label>
                <Input id="name" placeholder="Vaše meno" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="vas@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Predmet</Label>
                <Input id="subject" placeholder="Ohľadom vašich služieb..." required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Správa</Label>
                <Textarea id="message" placeholder="Vaša správa tu..." className="min-h-[120px]" required />
              </div>
              <Button type="submit" className="w-full">
                Odoslať správu
              </Button>
            </form>
          </div>
          <div className="grid gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Naše informácie</h2>
              <p className="text-muted-foreground">Nájdite nás, zavolajte nám alebo sa s nám spojte online.</p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-pink-500 shrink-0" />
                <div>
                  <h3 className="font-semibold">Adresa</h3>
                  <p>123 Nail Art Lane, Beauty City, BC 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-pink-500 shrink-0" />
                <div>
                  <h3 className="font-semibold">Telefón</h3>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-pink-500 shrink-0" />
                <div>
                  <h3 className="font-semibold">E-mail</h3>
                  <p>info@nailworkshop.com</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <h2 className="text-2xl font-bold">Sledujte nás</h2>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                  <Instagram className="h-7 w-7" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                  <Facebook className="h-7 w-7" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
