"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  CheckCircle,
  Trash2,
  CalendarDays,
  List,
} from "lucide-react";
import { motion } from "framer-motion";
import { AdminReservationCalendar } from "@/components/admin-reservation-calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { isToday, isThisWeek, isThisMonth, parseISO } from "date-fns"; // Import date-fns functions
import { Reservation } from "@/types";

export default function ManageReservationsPage() {
  const [viewMode, setViewMode] = useState<"calendar" | "table">("calendar");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterDateRange, setFilterDateRange] = useState<string>("all"); // New state for date range filter
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch("/api/reservations");
      const data = await response.json();
      setReservations(data);
    };
    fetchReservations();
  }, []);

  const filteredReservations = useMemo(() => {
    return reservations.filter((reservation) => {
      const reservationDate = parseISO(reservation.date);

      // Filter by status
      if (filterStatus !== "all" && reservation.status !== filterStatus) {
        return false;
      }

      // Filter by date range
      if (filterDateRange === "today" && !isToday(reservationDate)) {
        return false;
      }
      if (
        filterDateRange === "this-week" &&
        !isThisWeek(reservationDate, { weekStartsOn: 1 })
      ) {
        // Monday as start of week
        return false;
      }
      if (filterDateRange === "this-month" && !isThisMonth(reservationDate)) {
        return false;
      }

      return true;
    });
  }, [reservations, filterStatus, filterDateRange]);

  const handleUpdateStatus = async (id: string, status: string) => {
    const response = await fetch(`/api/reservations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });
    if (response.ok) {
      setReservations(
        reservations.map((r) => (r.id === id ? { ...r, status } : r)),
      );
    }
  };

  const handleDelete = async (id: string) => {
    const response = await fetch(`/api/reservations/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setReservations(reservations.filter((r) => r.id !== id));
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "default";
      case "Pending":
        return "outline";
      case "Cancelled":
        return "destructive";
      default:
        return "secondary";
    }
  };

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
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
      className="grid gap-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Spravovať rezervácie</h1>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "calendar" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("calendar")}
          >
            <CalendarDays className="h-4 w-4 mr-2" /> Kalendár
          </Button>
          <Button
            variant={viewMode === "table" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("table")}
          >
            <List className="h-4 w-4 mr-2" /> Tabuľka
          </Button>
        </div>
      </div>

      {viewMode === "calendar" ? (
        <AdminReservationCalendar reservations={reservations} />
      ) : (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Všetky termíny</CardTitle>
            <div className="flex items-center gap-4">
              {" "}
              {/* Increased gap */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Filter podľa stavu:
                </span>
                <Select onValueChange={setFilterStatus} defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Všetky stavy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Všetky stavy</SelectItem>
                    <SelectItem value="Confirmed">Potvrdené</SelectItem>
                    <SelectItem value="Pending">Čakajúce</SelectItem>
                    <SelectItem value="Cancelled">Zrušené</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Filter podľa dátumu:
                </span>
                <Select onValueChange={setFilterDateRange} defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Všetky dátumy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Všetky dátumy</SelectItem>
                    <SelectItem value="today">Dnes</SelectItem>
                    <SelectItem value="this-week">Tento týždeň</SelectItem>
                    <SelectItem value="this-month">Tento mesiac</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Klient</TableHead>
                  <TableHead>Služba</TableHead>
                  <TableHead>Dátum</TableHead>
                  <TableHead>Čas</TableHead>
                  <TableHead>Stav</TableHead>
                  <TableHead className="text-right">Akcie</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReservations.map((reservation) => (
                  <TableRow key={reservation.id}>
                    <TableCell className="font-medium">
                      {reservation.id}
                    </TableCell>
                    <TableCell>{reservation.name}</TableCell>
                    <TableCell>{reservation.service}</TableCell>
                    <TableCell>{reservation.date}</TableCell>
                    <TableCell>{reservation.time}</TableCell>
                    <TableCell>
                      <Badge
                        variant={getStatusBadgeVariant(reservation.status)}
                      >
                        {reservation.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() =>
                              handleUpdateStatus(reservation.id, "Confirmed")
                            }
                          >
                            <CheckCircle className="mr-2 h-4 w-4" /> Potvrdiť
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleDelete(reservation.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" /> Vymazať
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}
