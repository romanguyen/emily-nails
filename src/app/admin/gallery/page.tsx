"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Upload, Trash2 } from "lucide-react"
import { motion } from "framer-motion"

export default function ManageGalleryPage() {
  const galleryImages = [
    { id: "G001", src: "/placeholder.svg?height=200&width=300", alt: "Gel Nails Art" },
    { id: "G002", src: "/placeholder.svg?height=200&width=300", alt: "Acrylic Nails Design" },
    { id: "G003", src: "/placeholder.svg?height=200&width=300", alt: "Pedicure Spa" },
    { id: "G004", src: "/placeholder.svg?height=200&width=300", alt: "Classic Manicure" },
  ]

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
    <motion.div variants={fadeInAnimationVariants} initial="initial" animate="animate" className="grid gap-6">
      <h1 className="text-3xl font-bold">Spravovať galériu</h1>

      <Card>
        <CardHeader>
          <CardTitle>Nahrať nový obrázok</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="image-file">Súbor obrázka</Label>
              <Input id="image-file" type="file" accept="image/*" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image-alt">Popis obrázka (Alt text)</Label>
              <Input id="image-alt" placeholder="napr. Detail ružových gélových nechtov s trblietkami" required />
            </div>
            <Button type="submit" className="w-full">
              <Upload className="mr-2 h-4 w-4" /> Nahrať obrázok
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existujúce obrázky v galérii</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-lg border">
                <Image
                  src={image.src || "/placeholder.svg"}
                  width={300}
                  height={200}
                  alt={image.alt}
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Button variant="destructive" size="icon" className="h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Vymazať obrázok</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
