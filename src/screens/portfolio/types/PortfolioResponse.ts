export interface UserHolding {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
}

export interface Data {
  userHolding: UserHolding[];
}

export interface PortfolioResponse {
  data: Data;
}
