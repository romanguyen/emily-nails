"use client"

import { motion } from "framer-motion"
import { MultiStepReservationForm } from "@/components/multi-step-reservation-form" // Import the new component

export default function ReservationPage() {
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
      className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center"
    >
      <MultiStepReservationForm />
    </motion.section>
  )
}
