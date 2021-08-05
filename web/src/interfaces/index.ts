export interface Game {
  id: number;
  type: string;
  description: string;
  color: string;
  range: number;
  price: number;
  max_number: number;
  min_cart_value: number;
}

export interface Bet {
  id: number;
  type: string;
  date: string;
  price: number;
  numbers: number[];
  color: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface NewBet {
  game_id: number;
  numbers: number[];
}

export interface GetBet {
  meta: {
    total: number;
    per_page: number;
    current_page: number | null;
    last_page: number;
    first_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    previous_page_url: string | null;
  };
  data: LongBetData[];
}

export interface LongBetData {
  id: number;
  user_id: number;
  game_id: number;
  price: number;
  numbers: string;
  color: string;
  created_at: string;
  updated_at: string;
  game: {
    id: number;
    type: string;
    description: string;
    color: string;
    range: number;
    price: number;
    max_number: number;
    min_cart_value: number;
    created_at: string;
    updated_at: string;
  };
}

export interface AddBet {
  bet: {
    userId: number;
    gameId: number;
    price: number;
    numbers: string;
    color: string;
  }[];
}
