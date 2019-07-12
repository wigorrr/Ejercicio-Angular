import { Rates } from '../models/rates';

export class Quote {
  base: string;
  date: string;
  rates: Rates;
  success: boolean;
  timestamp: number;
}