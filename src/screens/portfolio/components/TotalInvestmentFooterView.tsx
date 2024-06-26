import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PortfolioResponse} from '../types/PortfolioResponse';
import {COLORS} from '../../shared/theme/AppColors';
import {useTotalCalculations} from '../hooks/useTotalCalculations';

type Props = {
  data: PortfolioResponse | null;
};

const TotalInvestmentFooterView: React.FC<Props> = ({data}) => {
  const [expenedView, setExpenedView] = useState<boolean>(false);

  const {
    totalInvestmentValue,
    totalInvestmentCurrentValue,
    totalPnL,
    totalTodayPnL,
  } = useTotalCalculations(data);

  const onExpandClickHandle = () => {
    setExpenedView(!expenedView);
  };

  const renderBottomView = () => (
    <View style={styles.bottomView}>
      <Text style={styles.detailsRowTitleText}>Profilt & Loss:</Text>
      <Text style={styles.priceText}>₹{totalPnL}</Text>
    </View>
  );
  const renderDetailView = () => {
    return expenedView ? (
      <View style={styles.detailsView}>
        <View style={styles.detailsRowView}>
          <Text style={styles.detailsRowTitleText}>Current Value:</Text>
          <Text style={styles.priceText}>₹{totalInvestmentCurrentValue}</Text>
        </View>
        <View style={styles.detailsRowView}>
          <Text style={styles.detailsRowTitleText}>Total Invetment:</Text>
          <Text style={styles.priceText}>₹{totalInvestmentValue}</Text>
        </View>
        <View style={styles.detailsRowView}>
          <Text style={styles.detailsRowTitleText}>
            Today's Profilt & Loss:
          </Text>
          <Text style={styles.priceText}>₹{totalTodayPnL}</Text>
        </View>
      </View>
    ) : null;
  };
  const renderArrowView = () => {
    return (
      <Pressable style={styles.arrowBtn} onPress={onExpandClickHandle}>
        <View
          style={[
            styles.triangle,
            {
              transform: [{rotate: expenedView ? '180deg' : '0deg'}],
            },
          ]}
        />
      </Pressable>
    );
  };

  if (!data) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      {renderArrowView()}
      {renderDetailView()}
      {renderBottomView()}
    </View>
  );
};

export default TotalInvestmentFooterView;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    padding: 10,
    elevation: 2,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: `${COLORS.PRIMARY}48`,
  },
  arrowBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {fontSize: 14, color: 'black'},
  detailsRowTitleText: {fontSize: 16, fontWeight: 'bold', color: 'black'},
  detailsRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsView: {marginBottom: 30},
  pnlView: {fontSize: 16, fontWeight: 'bold', color: 'black'},
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 7,
    borderBottomWidth: 14,
    borderLeftWidth: 7,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.PRIMARY,
    borderLeftColor: 'transparent',
  },
});
