import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PortfolioItem from './components/PortfolioItem';
import {useFetchPortfolioData} from './hooks/useFetchPortfolioData';
import {UserHolding} from './types/PortfolioResponse';
import TotalInvestmentFooterView from './components/TotalInvestmentFooterView';
import Loader from '../shared/components/Loader';
import ListItemSeparator from './components/ListItemSeparator';

const PortFolio: React.FC = () => {
  const {data} = useFetchPortfolioData();

  const renderItem = ({item, index}: {item: UserHolding; index: number}) => {
    return <PortfolioItem item={item} index={index} />;
  };

  if (!data) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item: UserHolding) => `item_${item.symbol}`}
        data={data?.data?.userHolding}
        renderItem={renderItem}
        ItemSeparatorComponent={<ListItemSeparator />}
      />
      <TotalInvestmentFooterView data={data} />
    </View>
  );
};

export default PortFolio;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
