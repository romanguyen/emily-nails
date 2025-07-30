"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash2, PlusCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function ManageServicesPage() {
  const services = [
    {
      id: "S001",
      name: "Classic Manicure",
      description: "Nail shaping, cuticle care, massage, and polish.",
      price: "$25",
      duration: "30 min",
    },
    {
      id: "S002",
      name: "Gel Pedicure",
      description: "Foot soak, exfoliation, massage, and long-lasting gel polish.",
      price: "$50",
      duration: "60 min",
    },
    {
      id: "S003",
      name: "Acrylic Full Set",
      description: "Durable acrylic extensions for a perfect look.",
      price: "$65+",
      duration: "90-120 min",
    },
    {
      id: "S004",
      name: "Nail Art (per nail)",
      description: "Custom designs, glitter, rhinestones.",
      price: "$5+",
      duration: "10-30 min",
    },
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
      <h1 className="text-3xl font-bold">Spravovať služby</h1>

      <Card>
        <CardHeader>
          <CardTitle>Pridať novú službu</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="service-name">Názov služby</Label>
              <Input id="service-name" placeholder="napr. Gélová manikúra" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Cena</Label>
              <Input id="price" type="text" placeholder="$40" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="duration">Trvanie</Label>
              <Input id="duration" type="text" placeholder="45 min" required />
            </div>
            <div className="grid gap-2 md:col-span-2">
              <Label htmlFor="description">Popis</Label>
              <Textarea id="description" placeholder="Stručný popis služby..." className="min-h-[80px]" required />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <Button type="submit">
                <PlusCircle className="mr-2 h-4 w-4" /> Pridať službu
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existujúce služby</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Názov</TableHead>
                <TableHead>Popis</TableHead>
                <TableHead>Cena</TableHead>
                <TableHead>Trvanie</TableHead>
                <TableHead className="text-right">Akcie</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{service.description}</TableCell>
                  <TableCell>{service.price}</TableCell>
                  <TableCell>{service.duration}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" /> Upraviť
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" /> Vymazať
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  )
}
