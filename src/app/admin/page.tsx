"use client"

import { Button } from "@/components/ui/button"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarCheck, Palette, ImageIcon, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function AdminDashboardPage() {
  const stats = [
    { title: "Nadchádzajúce rezervácie", value: "12", icon: CalendarCheck },
    { title: "Celkový počet služieb", value: "25", icon: Palette },
    { title: "Obrázky v galérii", value: "87", icon: ImageIcon },
    { title: "Celkový počet klientov", value: "500+", icon: Users },
  ]

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grid gap-6">
      <h1 className="text-3xl font-bold">Administrátorský prehľad</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.title === "Nadchádzajúce rezervácie" && "v najbližších 7 dňoch"}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Posledné rezervácie</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span>Jane Doe - Gélová manikúra</span>
                <span className="text-sm text-muted-foreground">Dnes, 14:00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>John Smith - Klasická pedikúra</span>
                <span className="text-sm text-muted-foreground">Zajtra, 10:30</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Emily White - Doplnenie akrylových nechtov</span>
                <span className="text-sm text-muted-foreground">1. augusta, 11:00</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rýchle akcie</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <Button variant="outline">Pridať novú službu</Button>
            <Button variant="outline">Nahrať obrázok do galérie</Button>
            <Button variant="outline">Zobraziť všetky rezervácie</Button>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
