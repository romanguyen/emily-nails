"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
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
  };

  return (
    <motion.section
      variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              O Emily Nails
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Vitajte v Emily Nails, kde sa krása stretáva s umením. Sme
              odhodlaní poskytovať výnimočné služby starostlivosti o nechty v
              relaxačnom a hygienickom prostredí. Našou vášňou je, aby sa každý
              klient cítil rozmaznaný a odišiel s nechtami, ktoré skutočne
              žiaria.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Spoločnosť Emily Nails, založená v roku 20XX, začala s jednoduchou
              víziou: vytvoriť priestor, kde môžu klienti uniknúť každodennému
              zhonu a dopriať si špičkové nechtové procedúry. Veríme, že krásne
              nechty sú formou sebavyjadrenia a sebadôvery.
            </p>
          </div>
          <Image
            src="/logo.jpg"
            width={600}
            height={400}
            alt="Interiér nechtového salónu"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <Image
            src="/team.png"
            width={600}
            height={400}
            alt="Náš tím"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Spoznajte náš talentovaný tím
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Náš tím skúsených a certifikovaných nechtových technikov je
              nadšený svojím remeslom. Neustále sa vzdelávajú v najnovších
              trendoch a technikách, aby vám zabezpečili tie najlepšie možné
              služby. Od klasických manikúr po zložité nechtové umenie, naši
              odborníci sú tu, aby premenili vašu víziu na skutočnosť.
            </p>
            <ul className="list-disc list-inside text-muted-foreground md:text-lg">
              <li>Jane Doe - Lead Nail Artist</li>
              <li>Sarah Lee - Senior Technician</li>
              <li>Emily Chen - Nail Art Specialist</li>
              <li>David Kim - Pedicure Expert</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
