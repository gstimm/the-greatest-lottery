export interface Game {
  id: number;
  type: string;
  description: string;
  color: string;
  range: number;
  price: number;
  'max-number': number;
  'min-cart-value': number;
}

export interface Bet {
  id: string;
  type: string;
  date: string;
  price: number;
  numbers: number[];
  color: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
}
