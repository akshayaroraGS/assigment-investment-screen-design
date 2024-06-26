import React from 'react';
import {StyleSheet, View} from 'react-native';

const ListItemSeparator = () => <View style={styles.separator} />;

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {height: 1, width: '100%', backgroundColor: '#00000032'},
});
