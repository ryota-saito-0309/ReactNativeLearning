import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Styleは上に記述する流派と下に書く流派がある。
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row', //rowが横並び colunmが縦並び
  },
  leftContainer: {
    backgroundColor: 'red',
    width: 100,
  },
  rightContainer: {
    backgroundColor: 'blue',
    flex: 1, //余ったエリアを全て使って描画を行う
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer} />
        <View style={styles.rightContainer} />
      </View>
    </View>
  );
}
