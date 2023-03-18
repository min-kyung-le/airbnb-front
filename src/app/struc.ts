export interface Menu {
  seq: number;
  id: string;
  name: string;
}

export interface Room {
  seq: number;
  id: string;
  title: string;
  subtitle: string;
  price: string;
  grade: string;
  location: string;
  possiable_start_date: Date;
  possiable_end_date: Date;
  img1: string;
  img2: string;
  img3: string;
}
