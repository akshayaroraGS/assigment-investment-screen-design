import {PortfolioResponse} from '../types/PortfolioResponse';

export const useDataCalculations = (data: PortfolioResponse | null) => {
  const totalInvestmentValue: number =
    data?.data?.userHolding
      ?.reduce((acc, currentItem) => {
        return acc + currentItem.quantity * currentItem.avgPrice;
      }, 0)
      .toFixed(1) ?? 0;

  const totalInvestmentCurrentValue: number =
    data?.data?.userHolding
      ?.reduce((acc, currentItem) => {
        return acc + currentItem.quantity * currentItem.ltp;
      }, 0)
      .toFixed(1) ?? 0;

  const totalLastDayValue: number =
    data?.data?.userHolding
      ?.reduce((acc, currentItem) => {
        return acc + currentItem.quantity * currentItem.close;
      }, 0)
      .toFixed(1) ?? 0;

  const totalPnL: number = (
    totalInvestmentCurrentValue - totalInvestmentValue
  ).toFixed(1);

  const totalTodayPnL: number = (
    totalInvestmentCurrentValue - totalLastDayValue
  ).toFixed(1);

  return {
    totalInvestmentValue,
    totalInvestmentCurrentValue,
    totalLastDayValue,
    totalPnL,
    totalTodayPnL,
  };
};
