
import { parseISO, format, addMinutes, isSameDay } from "date-fns";

interface Reservation {
  date: string;
  time: string;
  service: string;
}

const services = [
  { value: "classic-manicure", label: "Klasická manikúra", duration: 30 },
  { value: "gel-pedicure", label: "Gélová pedikúra", duration: 60 },
  {
    value: "acrylic-full-set",
    label: "Akrylové nechty - kompletná sada",
    duration: 120,
  },
  { value: "spa-pedicure", label: "Spa pedikúra", duration: 75 },
  { value: "nail-art", label: "Nechtové umenie", duration: 45 },
];

const getServiceDuration = (serviceValue: string) => {
  const service = services.find(s => s.value === serviceValue);
  return service ? service.duration : 0;
};

export function getAvailableTimeSlots(
  date: Date,
  reservations: Reservation[],
  serviceDuration: number
) {
  const availableSlots: string[] = [];
  const openingTime = new Date(date);
  openingTime.setHours(9, 0, 0, 0); // 9:00 AM

  const closingTime = new Date(date);
  closingTime.setHours(18, 0, 0, 0); // 6:00 PM

  let currentTime = new Date(openingTime);

  while (addMinutes(currentTime, serviceDuration) <= closingTime) {
    const slotEndTime = addMinutes(currentTime, serviceDuration);

    const isSlotAvailable = !reservations.some((reservation) => {
      const reservationDate = parseISO(`${reservation.date}T${reservation.time}`);
      const reservationServiceDuration = getServiceDuration(reservation.service);
      const reservationEndTime = addMinutes(reservationDate, reservationServiceDuration);

      // Check for overlap
      return (
        isSameDay(date, reservationDate) &&
        ((currentTime >= reservationDate && currentTime < reservationEndTime) ||
          (slotEndTime > reservationDate && slotEndTime <= reservationEndTime) ||
          (currentTime <= reservationDate && slotEndTime >= reservationEndTime))
      );
    });

    if (isSlotAvailable) {
      availableSlots.push(format(currentTime, "HH:mm"));
    }

    currentTime = addMinutes(currentTime, 15); // Check every 15 minutes
  }

  return availableSlots;
}

export function isDayFullyBooked(
  date: Date,
  reservations: Reservation[],
  serviceDuration: number
) {
  return getAvailableTimeSlots(date, reservations, serviceDuration).length === 0;
}
