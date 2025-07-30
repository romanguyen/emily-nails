"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function FAQPage() {
  const faqs = [
    {
      question: "Aké sú vaše otváracie hodiny?",
      answer: "Máme otvorené od pondelka do soboty od 9:00 do 19:00. V nedele máme zatvorené.",
    },
    {
      question: "Ako si môžem objednať termín?",
      answer:
        "Termín si môžete objednať priamo cez stránku 'Objednať sa' na našom webe, alebo nám zavolať na číslo (123) 456-7890 počas otváracích hodín.",
    },
    {
      question: "Aká je vaša storno politika?",
      answer:
        "Žiadame vás o oznámenie zrušenia alebo preloženia termínu minimálne 24 hodín vopred. Zrušenie menej ako 24 hodín vopred môže byť spoplatnené.",
    },
    {
      question: "Aké platobné metódy akceptujete?",
      answer: "Akceptujeme hotovosť, hlavné kreditné karty (Visa, Mastercard, American Express) a debetné karty.",
    },
    {
      question: "Ponúkate darčekové poukážky?",
      answer:
        "Áno, darčekové poukážky sú k dispozícii na zakúpenie v našom salóne. Sú ideálnym darčekom pre každú príležitosť!",
    },
    {
      question: "Ako sa mám pripraviť na termín na nechty?",
      answer:
        "Pre manikúru, prosím, odstráňte starý lak, ak je to možné. Pre pedikúru si obujte otvorenú obuv, aby ste predišli rozmazaniu čerstvého laku. Prosím, príďte na termín včas.",
    },
    {
      question: "Sú vaše nástroje sterilizované?",
      answer:
        "Absolútne. Dodržiavame najvyššie hygienické štandardy. Všetky kovové nástroje sú po každom použití sterilizované v autokláve medicínskej kvality a jednorazové predmety sa používajú raz a potom sa likvidujú.",
    },
    {
      question: "Ponúkate nechtové umenie?",
      answer:
        "Áno, naši talentovaní technici sa špecializujú na širokú škálu dizajnov nechtového umenia, od jednoduchých akcentov po zložité vlastné kreácie. Prosím, uveďte svoj záujem o nechtové umenie pri objednávaní, aby sme mohli vyhradiť dostatok času.",
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
    <motion.section
      variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Často kladené otázky</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nájdite odpovede na časté otázky o našich službách, zásadách a termínoch.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  )
}
