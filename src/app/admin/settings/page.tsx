"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { motion } from "framer-motion"

export default function AdminSettingsPage() {
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
      <h1 className="text-3xl font-bold">Nastavenia</h1>

      <Card>
        <CardHeader>
          <CardTitle>Informácie o salóne</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="salon-name">Názov salónu</Label>
              <Input id="salon-name" defaultValue="Emily Nails" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Adresa</Label>
              <Input id="address" defaultValue="123 Nail Art Lane, Beauty City, BC 12345" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Telefónne číslo</Label>
              <Input id="phone" type="tel" defaultValue="(123) 456-7890" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Kontaktný e-mail</Label>
              <Input id="email" type="email" defaultValue="info@nailworkshop.com" />
            </div>
            <Button type="submit" className="w-fit">
              Uložiť zmeny
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Otváracie hodiny</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="mon-fri-open">Po-Pia Otvorené</Label>
                <Input id="mon-fri-open" type="time" defaultValue="09:00" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mon-fri-close">Po-Pia Zatvorené</Label>
                <Input id="mon-fri-close" type="time" defaultValue="19:00" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="sat-open">Sobota Otvorené</Label>
                <Input id="sat-open" type="time" defaultValue="09:00" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sat-close">Sobota Zatvorené</Label>
                <Input id="sat-close" type="time" defaultValue="19:00" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sunday-closed">Nedeľa Zatvorené</Label>
              <Switch id="sunday-closed" defaultChecked />
            </div>
            <Button type="submit" className="w-fit">
              Aktualizovať hodiny
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Nastavenia e-mailu</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="reservation-confirm-email">Odosielať potvrdzujúce e-maily o rezervácii</Label>
              <Switch id="reservation-confirm-email" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="cancellation-email">Odosielať oznámenia o zrušení</Label>
              <Switch id="cancellation-email" defaultChecked />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email-signature">E-mailový podpis</Label>
              <Textarea id="email-signature" defaultValue="S pozdravom,\nTím Emily Nails" className="min-h-[80px]" />
            </div>
            <Button type="submit" className="w-fit">
              Uložiť nastavenia e-mailu
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
