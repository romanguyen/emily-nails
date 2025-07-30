import { isSameDay } from "date-fns"

export interface Reservation {
  id: string
  client: string
  service: string
  date: string // YYYY-MM-DD format
  time: string // HH:MM format
  status: "Confirmed" | "Pending" | "Cancelled"
  duration: number // Duration in minutes
}

// Mock reservation data
export const allReservations: Reservation[] = [
  {
    id: "RES001",
    client: "Jane Doe",
    service: "Gélová manikúra",
    date: "2025-07-30",
    time: "14:00",
    status: "Confirmed",
    duration: 60,
  },
  {
    id: "RES002",
    client: "John Smith",
    service: "Klasická pedikúra",
    date: "2025-07-31",
    time: "10:30",
    status: "Pending",
    duration: 45,
  },
  {
    id: "RES003",
    client: "Emily White",
    service: "Doplnenie akrylových nechtov",
    date: "2025-08-01",
    time: "11:00",
    status: "Confirmed",
    duration: 90,
  },
  {
    id: "RES004",
    client: "Sarah Lee",
    service: "Spa manikúra",
    date: "2025-08-01",
    time: "15:00",
    status: "Cancelled",
    duration: 60,
  },
  {
    id: "RES005",
    client: "David Kim",
    service: "Luxusná pedikúra",
    date: "2025-08-02",
    time: "09:00",
    status: "Confirmed",
    duration: 75,
  },
  {
    id: "RES006",
    client: "Anna Kováčová",
    service: "Gélová manikúra",
    date: "2025-08-02",
    time: "10:00",
    status: "Pending",
    duration: 60,
  },
  {
    id: "RES007",
    client: "Peter Novák",
    service: "Klasická manikúra",
    date: "2025-08-03",
    time: "16:00",
    status: "Confirmed",
    duration: 30,
  },
  {
    id: "RES008",
    client: "Mária Veselá",
    service: "Gélová pedikúra",
    date: "2025-08-03",
    time: "10:00",
    status: "Confirmed",
    duration: 60,
  },
  {
    id: "RES009",
    client: "Tomáš Kráľ",
    service: "Akrylové nechty - kompletná sada",
    date: "2025-08-03",
    time: "11:00",
    status: "Confirmed",
    duration: 120,
  },
  {
    id: "RES010",
    client: "Zuzana Malá",
    service: "Klasická manikúra",
    date: "2025-08-04",
    time: "09:00",
    status: "Confirmed",
    duration: 30,
  },
  {
    id: "RES011",
    client: "Jozef Veľký",
    service: "Spa manikúra",
    date: "2025-08-04",
    time: "10:00",
    status: "Pending",
    duration: 60,
  },
  {
    id: "RES012",
    client: "Eva Nová",
    service: "Gélová pedikúra",
    date: "2025-08-04",
    time: "11:00",
    status: "Confirmed",
    duration: 60,
  },
  {
    id: "RES013",
    client: "Michal Dlhý",
    service: "Doplnenie akrylových nechtov",
    date: "2025-08-04",
    time: "12:00",
    status: "Confirmed",
    duration: 90,
  },
  {
    id: "RES014",
    client: "Lucia Krátka",
    service: "Nechtové umenie (za necht)",
    date: "2025-08-04",
    time: "13:30",
    status: "Pending",
    duration: 30,
  },
  {
    id: "RES015",
    client: "Martin Hrubý",
    service: "Klasická pedikúra",
    date: "2025-08-04",
    time: "14:00",
    status: "Confirmed",
    duration: 45,
  },
  {
    id: "RES016",
    client: "Veronika Tenká",
    service: "Luxusná pedikúra",
    date: "2025-08-04",
    time: "15:00",
    status: "Confirmed",
    duration: 75,
  },
  {
    id: "RES017",
    client: "Filip Široký",
    service: "Gélová manikúra",
    date: "2025-08-04",
    time: "16:30",
    status: "Confirmed",
    duration: 60,
  },
  {
    id: "RES018",
    client: "Diana Úzka",
    service: "Klasická manikúra",
    date: "2025-08-04",
    time: "17:30",
    status: "Pending",
    duration: 30,
  },
  {
    id: "RES019",
    client: "Ondrej Hladký",
    service: "Gélová pedikúra",
    date: "2025-08-04",
    time: "18:00",
    status: "Confirmed",
    duration: 60,
  },
  {
    id: "RES020",
    client: "Barbora Krivá",
    service: "Akrylové nechty - kompletná sada",
    date: "2025-08-05",
    time: "09:00",
    status: "Confirmed",
    duration: 120,
  },
  {
    id: "RES021",
    client: "Adam Rovný",
    service: "Spa manikúra",
    date: "2025-08-05",
    time: "11:00",
    status: "Pending",
    duration: 60,
  },
  {
    id: "RES022",
    client: "Katarína Tichá",
    service: "Klasická pedikúra",
    date: "2025-08-05",
    time: "12:00",
    status: "Confirmed",
    duration: 45,
  },
  {
    id: "RES023",
    client: "Dávid Hlasný",
    service: "Luxusná pedikúra",
    date: "2025-08-05",
    time: "13:00",
    status: "Confirmed",
    duration: 75,
  },
  {
    id: "RES024",
    client: "Elena Rýchla",
    service: "Gélová manikúra",
    date: "2025-08-05",
    time: "14:30",
    status: "Pending",
    duration: 60,
  },
  {
    id: "RES025",
    client: "Jakub Pomalý",
    service: "Klasická manikúra",
    date: "2025-08-05",
    time: "15:30",
    status: "Confirmed",
    duration: 30,
  },
  {
    id: "RES026",
    client: "Natália Veselá",
    service: "Gélová pedikúra",
    date: "2025-08-05",
    time: "16:00",
    status: "Confirmed",
    duration: 60,
  },
  {
    id: "RES027",
    client: "Samuel Smutný",
    service: "Akrylové nechty - kompletná sada",
    date: "2025-08-05",
    time: "17:00",
    status: "Pending",
    duration: 120,
  },
]

// Helper function to get available time slots for a given date and service duration
export const getAvailableTimeSlots = (
  selectedDate: Date,
  reservations: Reservation[],
  serviceDuration: number, // in minutes
) => {
  const workingHours = { start: 9 * 60, end: 19 * 60 } // 9:00 AM to 7:00 PM in minutes from midnight
  const interval = 30 // Time slots in 30-minute intervals

  const bookedSlots: { start: number; end: number }[] = []

  reservations.forEach((res) => {
    if (isSameDay(selectedDate, new Date(res.date))) {
      const [resHour, resMinute] = res.time.split(":").map(Number)
      const resStartTime = resHour * 60 + resMinute
      const resEndTime = resStartTime + res.duration
      bookedSlots.push({ start: resStartTime, end: resEndTime })
    }
  })

  const availableSlots: string[] = []
  for (let time = workingHours.start; time < workingHours.end; time += interval) {
    const slotStartTime = time
    const slotEndTime = time + serviceDuration

    // Check if the slot overlaps with any booked slot
    const isBooked = bookedSlots.some(
      (booked) =>
        (slotStartTime < booked.end && slotEndTime > booked.start) ||
        (booked.start < slotEndTime && booked.end > slotStartTime),
    )

    // Ensure the slot doesn't extend beyond working hours
    if (!isBooked && slotEndTime <= workingHours.end) {
      const hours = Math.floor(time / 60)
      const minutes = time % 60
      availableSlots.push(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`)
    }
  }
  return availableSlots
}

// Helper function to check if a day is fully booked
export const isDayFullyBooked = (date: Date, reservations: Reservation[], serviceDuration: number): boolean => {
  const availableSlots = getAvailableTimeSlots(date, reservations, serviceDuration)
  return availableSlots.length === 0
}
