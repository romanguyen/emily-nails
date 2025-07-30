"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function HomePage() {
  const featuredServices = [
    {
      name: "Klasická manikúra",
      description: "Tvarovanie nechtov, starostlivosť o kožičku, masáž a lakovanie.",
      price: "$25",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Gélová pedikúra",
      description: "Kúpeľ nôh, exfoliácia, masáž a dlhotrvajúci gélový lak.",
      price: "$50",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Akrylové nechty - kompletná sada",
      description: "Odolné akrylové predĺženie pre dokonalý vzhľad.",
      price: "$65",
      image: "/placeholder.svg?height=200&width=300",
    },
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
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="flex justify-center items-center w-full py-12 md:py-24 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950 dark:to-purple-950 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Pozdvihnite svoj štýl s dokonalými nechtami
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Objavte svet krásy a relaxu v Emily Nails. Ponúkame širokú škálu nechtových služieb, aby sme vás
                  rozmaznali.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/reservation">Objednať sa</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-black">
                  <Link href="/services">Zobraziť služby</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative min-h-[300px] w-full lg:min-h-[400px] xl:min-h-[500px]"
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                width={600}
                height={500}
                alt="Interiér nechtového salónu"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Naše odporúčané služby</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Preskúmajte naše najobľúbenejšie a najlepšie hodnotené nechtové procedúry.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      width={300}
                      height={200}
                      alt={service.name}
                      className="rounded-md object-cover w-full h-48"
                    />
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold">{service.name}</CardTitle>
                      <p className="text-muted-foreground mt-2">{service.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-bold">{service.price}</span>
                      <Button variant="outline" size="sm">
                        Zistiť viac
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Navštívte nás ešte dnes!</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sme pohodlne umiestnení a pripravení poskytnúť vám výnimočný zážitok z nechtovej starostlivosti.
            </p>
            <div className="grid gap-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-pink-500" />
                <span>123 Nail Art Lane, Beauty City, BC 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-pink-500" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-pink-500" />
                <span>Po-So: 9:00 - 19:00, Ne: Zatvorené</span>
              </div>
            </div>
            <Button asChild className="mt-4">
              <Link href="/contact">Získať trasu</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Exteriér nechtového salónu"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
