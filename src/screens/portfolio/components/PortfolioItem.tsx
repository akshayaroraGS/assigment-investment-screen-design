import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {UserHolding} from '../types/PortfolioResponse';
import {useInvestmentValuesForStock} from '../hooks/useInvestmentValuesForStock';

type Props = {item: UserHolding; index: number};

const PortfolioItem: React.FC<Props> = ({item, index}) => {
  const {currentPnL} = useInvestmentValuesForStock(item);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.symbolStyle}>{item.symbol}</Text>
        <Text style={[styles.textStyle, styles.marginTop5]}>
          {item.quantity} Q
        </Text>
      </View>
      <View style={styles.priceView}>
        <Text style={styles.textStyle}>
          LTP: <Text style={styles.boldText}>₹ {item.ltp}</Text>
        </Text>
        <Text style={[styles.textStyle, styles.marginTop5]}>
          P/L: <Text style={styles.boldText}>₹ {currentPnL?.toFixed(2)}</Text>
        </Text>
      </View>
    </View>
  );
};

export default PortfolioItem;

const styles = StyleSheet.create({
  priceView: {alignItems: 'flex-end'},
  symbolStyle: {fontWeight: 'bold', color: 'black', fontSize: 14},
  marginTop5: {marginTop: 5},
  boldText: {fontWeight: 'bold'},
  textStyle: {color: 'black'},
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
});
