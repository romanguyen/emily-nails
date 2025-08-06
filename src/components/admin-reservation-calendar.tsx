"use client"

import { useState, useMemo } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format, isSameDay, parseISO } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Reservation } from "@/types"

interface AdminReservationCalendarProps {
  reservations: Reservation[]
}

export function AdminReservationCalendar({ reservations }: AdminReservationCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const reservationsForSelectedDay = useMemo(() => {
    if (!selectedDate) return []
    return reservations
      .filter((res) => isSameDay(parseISO(res.date), selectedDate))
      .sort((a, b) => a.time.localeCompare(b.time))
  }, [selectedDate, reservations])

  const daysWithReservations = useMemo(() => {
    return reservations.map((res) => parseISO(res.date))
  }, [reservations])

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "default"
      case "Pending":
        return "outline"
      case "Cancelled":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Kalendár rezervácií</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            modifiers={{
              hasReservations: daysWithReservations,
            }}
            modifiersStyles={{
              hasReservations: {
                fontWeight: "bold",
                backgroundColor: "hsl(var(--accent))",
                color: "hsl(var(--accent-foreground))",
              },
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rezervácie pre {selectedDate ? format(selectedDate, "PPP") : "vybraný deň"}</CardTitle>
        </CardHeader>
        <CardContent>
          {reservationsForSelectedDay.length > 0 ? (
            <ScrollArea className="h-[300px] pr-4">
              <ul className="space-y-4">
                {reservationsForSelectedDay.map((res) => (
                  <li key={res.id} className="flex flex-col gap-1 border-b pb-2 last:border-b-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{res.client}</span>
                      <Badge variant={getStatusBadgeVariant(res.status)}>{res.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {res.service} at {res.time}
                    </p>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          ) : (
            <p className="text-muted-foreground">Žiadne rezervácie pre tento deň.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}