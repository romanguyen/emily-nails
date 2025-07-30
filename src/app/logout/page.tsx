"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // Remove the authentication cookie
    document.cookie = "authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  }, [])

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
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
      className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12"
    >
      <Card className="mx-auto max-w-sm text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Odhlásený</CardTitle>
          <CardDescription>Boli ste úspešne odhlásený.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => router.push("/login")}>Prihlásiť sa znova</Button>
          <Button variant="link" onClick={() => router.push("/")} className="ml-2">
            Prejsť na Domov
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
