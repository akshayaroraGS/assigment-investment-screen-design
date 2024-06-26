import {UserHolding} from '../types/PortfolioResponse';

const currentValueOfInvestedAmountForStock = (item: UserHolding) => {
  return item.quantity * item.ltp;
};

const totalInvestedAmountForStock = (item: UserHolding) => {
  return item.quantity * item.avgPrice;
};

export default {
  currentValueOfInvestedAmountForStock,
  totalInvestedAmountForStock,
};
