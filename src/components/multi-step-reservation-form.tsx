"use client"

import type React from "react"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { format, isSameDay, addDays, parseISO } from "date-fns" // Removed CalendarIcon, Popover imports
import { CheckCircle } from "lucide-react" // Removed CalendarIcon
import { ScrollArea } from "@/components/ui/scroll-area"
import { allReservations, getAvailableTimeSlots, isDayFullyBooked } from "@/lib/mock-data"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  date: Date | undefined
  time: string
  notes: string
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: undefined,
  time: "",
  notes: "",
}

// Mock services with durations
const services = [
  { value: "classic-manicure", label: "Klasická manikúra", duration: 30 },
  { value: "gel-pedicure", label: "Gélová pedikúra", duration: 60 },
  { value: "acrylic-full-set", label: "Akrylové nechty - kompletná sada", duration: 120 },
  { value: "spa-pedicure", label: "Spa pedikúra", duration: 75 },
  { value: "nail-art", label: "Nechtové umenie", duration: 45 },
]

export function MultiStepReservationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [serviceDuration, setServiceDuration] = useState<number>(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Update service duration when service changes
  useEffect(() => {
    const duration = services.find((s) => s.value === formData.service)?.duration || 0
    setServiceDuration(duration)
    // Reset time if service changes and current time is no longer valid
    if (
      formData.date &&
      formData.time &&
      !getAvailableTimeSlots(formData.date, allReservations, duration).includes(formData.time)
    ) {
      setFormData((prev) => ({ ...prev, time: "" }))
    }
  }, [formData.service, formData.date, formData.time])

  const availableTimeSlots = useMemo(() => {
    if (!formData.date || !serviceDuration) return []
    return getAvailableTimeSlots(formData.date, allReservations, serviceDuration)
  }, [formData.date, serviceDuration])

  const disabledDates = useMemo(() => {
    const disabled: Date[] = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    for (let i = 0; i < 90; i++) {
      const checkDate = addDays(today, i)
      if (checkDate.getDay() === 0) {
        // Sunday
        disabled.push(checkDate)
      } else if (serviceDuration > 0 && isDayFullyBooked(checkDate, allReservations, serviceDuration)) {
        disabled.push(checkDate)
      }
    }
    return disabled
  }, [serviceDuration])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, date, time: "" })) // Reset time when date changes
  }

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, time }))
  }

  const handleNext = () => {
    if (currentStep === 1) {
      // Basic validation for Step 1
      if (!formData.name || !formData.email || !formData.phone || !formData.service) {
        alert("Prosím, vyplňte všetky povinné polia v prvom kroku.")
        return
      }
    } else if (currentStep === 2) {
      // Basic validation for Step 2
      if (!formData.date || !formData.time) {
        alert("Prosím, vyberte dátum a čas pre vašu rezerváciu.")
        return
      }
    }
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send formData to your backend here.
    console.log("Form Submitted:", formData)
    setIsSubmitted(true)
    // Optionally, clear form or redirect
    // setFormData(initialFormData);
  }

  const getServiceLabel = (value: string) => {
    return services.find((s) => s.value === value)?.label || value
  }

  const getServiceDuration = (value: string) => {
    return services.find((s) => s.value === value)?.duration || 0
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto text-center py-12">
        <CardHeader>
          <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl font-bold">Rezervácia potvrdená!</CardTitle>
          <CardDescription>Ďakujeme za vašu rezerváciu. Čoskoro vám pošleme potvrdzujúci e-mail.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => window.location.reload()}>Vytvoriť novú rezerváciu</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Objednať sa</CardTitle>
        <CardDescription>Krok {currentStep} z 3</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Celé meno</Label>
                <Input id="name" placeholder="Ján Novák" required value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jan@example.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Telefónne číslo</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="service">Služba</Label>
                <Select
                  required
                  onValueChange={(value) => handleSelectChange("service", value)}
                  value={formData.service}
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Vyberte službu" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label} ({service.duration} min)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="button" onClick={handleNext} className="w-full">
                Ďalej
              </Button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4 items-center">
                {" "}
                {/* Centered calendar */}
                <Label htmlFor="date">Dátum</Label>
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={handleDateChange}
                  initialFocus
                  disabled={(day) => day < new Date() || disabledDates.some((d) => isSameDay(d, day))}
                  modifiers={{
                    hasReservations: allReservations.map((res) => parseISO(res.date)),
                  }}
                  modifiersStyles={{
                    hasReservations: {
                      fontWeight: "bold",
                      backgroundColor: "hsl(var(--accent))",
                      color: "hsl(var(--accent-foreground))",
                    },
                  }}
                  className="rounded-md border" // Added border and rounded-md for consistent styling
                />
                <div className="grid gap-2 w-full mt-4">
                  {" "}
                  {/* Moved notes here, full width */}
                  <Label htmlFor="notes">Ďalšie poznámky (voliteľné)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Akékoľvek špecifické požiadavky alebo preferencie?"
                    className="min-h-[100px]"
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Label htmlFor="time">Dostupné časy ({getServiceDuration(formData.service)} min)</Label>
                <ScrollArea className="h-[300px] border rounded-md p-2">
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimeSlots.length > 0 ? (
                      availableTimeSlots.map((timeSlot) => (
                        <Button
                          key={timeSlot}
                          type="button"
                          variant={formData.time === timeSlot ? "default" : "outline"}
                          onClick={() => handleTimeSelect(timeSlot)}
                          className="text-sm"
                        >
                          {timeSlot}
                        </Button>
                      ))
                    ) : (
                      <p className="col-span-3 text-muted-foreground text-center py-4">
                        {!formData.date || !formData.service
                          ? "Najprv vyberte dátum a službu"
                          : "Žiadne dostupné časy pre tento deň a službu."}
                      </p>
                    )}
                  </div>
                </ScrollArea>
              </div>

              <div className="flex justify-between md:col-span-2 mt-4">
                <Button type="button" variant="outline" onClick={handlePrevious}>
                  Späť
                </Button>
                <Button type="button" onClick={handleNext} disabled={!formData.date || !formData.time}>
                  Ďalej
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid gap-6">
              <h2 className="text-2xl font-bold text-center">Potvrďte vašu rezerváciu</h2>
              <div className="grid gap-4 p-4 border rounded-md">
                <div className="flex justify-between">
                  <span className="font-medium">Meno:</span>
                  <span>{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">E-mail:</span>
                  <span>{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Telefón:</span>
                  <span>{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Služba:</span>
                  <span>{getServiceLabel(formData.service)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dátum:</span>
                  <span>{formData.date ? format(formData.date, "PPP") : "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Čas:</span>
                  <span>{formData.time || "N/A"}</span>
                </div>
                {formData.notes && (
                  <div className="flex justify-between">
                    <span className="font-medium">Poznámky:</span>
                    <span>{formData.notes}</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between mt-4">
                <Button type="button" variant="outline" onClick={handlePrevious}>
                  Späť
                </Button>
                <Button type="submit">Potvrdiť rezerváciu</Button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
