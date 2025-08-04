"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      category: "Manikúry",
      items: [
        {
          name: "Klasická manikúra",
          description:
            "Tvarovanie nechtov, starostlivosť o kožičku, masáž a lakovanie.",
          price: "$25",
          duration: "30 min",
        },
        {
          name: "Gélová manikúra",
          description:
            "Dlhotrvajúci gélový lak s odolnosťou proti odlupovaniu.",
          price: "$40",
          duration: "45 min",
        },
        {
          name: "Spa manikúra",
          description: "Zahŕňa exfoliáciu, hydratačnú masku a predĺženú masáž.",
          price: "$55",
          duration: "60 min",
        },
      ],
    },
    {
      category: "Pedikúry",
      items: [
        {
          name: "Klasická pedikúra",
          description:
            "Kúpeľ nôh, tvarovanie nechtov, starostlivosť o kožičku, masáž a lakovanie.",
          price: "$35",
          duration: "45 min",
        },
        {
          name: "Gélová pedikúra",
          description:
            "Kúpeľ nôh, exfoliácia, masáž a dlhotrvajúci gélový lak.",
          price: "$50",
          duration: "60 min",
        },
        {
          name: "Luxusná pedikúra",
          description:
            "Vulkanická spa procedúra, masáž horúcimi kameňmi a parafínový zábal.",
          price: "$70",
          duration: "75 min",
        },
      ],
    },
    {
      category: "Predĺženie nechtov",
      items: [
        {
          name: "Akrylové nechty - kompletná sada",
          description: "Odolné akrylové predĺženie pre dokonalý vzhľad.",
          price: "$65+",
          duration: "90-120 min",
        },
        {
          name: "Doplnenie akrylových nechtov",
          description:
            "Doplnenie a pretvarovanie existujúcich akrylových nechtov.",
          price: "$45+",
          duration: "60-90 min",
        },
        {
          name: "Gélový prášok - kompletná sada",
          description: "Ľahké a flexibilné predĺženie gélovým práškom.",
          price: "$70+",
          duration: "90-120 min",
        },
        {
          name: "Doplnenie gélového prášku",
          description:
            "Doplnenie a pretvarovanie existujúceho gélového prášku.",
          price: "$50+",
          duration: "60-90 min",
        },
      ],
    },
    {
      category: "Doplnky a opravy",
      items: [
        {
          name: "Francúzska špička",
          description: "Klasický biely špičkový dizajn.",
          price: "$10",
          duration: "15 min",
        },
        {
          name: "Nechtové umenie (za necht)",
          description: "Vlastné dizajny, trblietky, kamienky.",
          price: "$5+",
          duration: "10-30 min",
        },
        {
          name: "Parafínový zábal",
          description: "Hĺbková hydratácia rúk alebo nôh.",
          price: "$15",
          duration: "15 min",
        },
        {
          name: "Oprava nechtov (za necht)",
          description: "Oprava odlomených alebo zlomených nechtov.",
          price: "$5",
          duration: "10 min",
        },
      ],
    },
  ];

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
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Naše služby
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Objavte našu komplexnú ponuku služieb starostlivosti o nechty,
              navrhnutých tak, aby vás rozmaznali a zdokonalili vaše nechty.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={categoryIndex}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-pink-500">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  {category.items.map((service, serviceIndex) => (
                    <div key={service.name}>
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{service.price}</p>
                          <p className="text-xs text-muted-foreground">
                            {service.duration}
                          </p>
                        </div>
                      </div>
                      {serviceIndex < category.items.length - 1 && (
                        <Separator className="my-3" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
