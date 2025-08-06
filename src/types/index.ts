export interface Reservation {
  id: string;
  name: string;
  client: string;
  service: string;
  date: string; // YYYY-MM-DD format
  time: string;
  status: string;
}
