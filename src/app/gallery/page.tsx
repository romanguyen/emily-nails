"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const images = [
    { src: "/logo.jpg", alt: "Technik pri práci" },
    { src: "/nails_01.jpg", alt: "Gélové nechty - umenie" },
    { src: "/nails_02.jpg", alt: "Dizajn akrylových nechtov" },
    { src: "/nails_03.jpg", alt: "Spa pedikúra" },
    { src: "/nails_04.jpg", alt: "Klasická manikúra" },
    { src: "/nails_05.jpg", alt: "Interiér salónu" },
    { src: "/nails_01.jpg", alt: "Výklad lakov" },
    { src: "/nails_02.jpg", alt: "Ombre nechty" },
    { src: "/nails_03.jpg", alt: "Francúzska manikúra" },
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
              Naša galéria
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Preskúmajte našu zbierku krásneho nechtového umenia, interiéru
              salónu a spokojných klientov.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="group relative overflow-hidden rounded-xl">
                <Image
                  src={image.src || "/placeholder.svg"}
                  width={600}
                  height={400}
                  alt={image.alt}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-white text-lg font-semibold">
                    {image.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
