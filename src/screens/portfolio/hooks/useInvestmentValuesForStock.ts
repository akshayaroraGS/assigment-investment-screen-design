import {useEffect, useState} from 'react';
import helper from '../helper';
import {UserHolding} from '../types/PortfolioResponse';

export const useInvestmentValuesForStock = (item: UserHolding) => {
  const [stockValues, setStockValues] = useState({});
  useEffect(() => {
    const investedAmount = helper.totalInvestedAmountForStock(item);
    const currentValue = helper.currentValueOfInvestedAmountForStock(item);
    const currentPnL = currentValue - investedAmount;
    setStockValues({investedAmount, currentValue, currentPnL});
  }, [item]);
  return stockValues;
};
