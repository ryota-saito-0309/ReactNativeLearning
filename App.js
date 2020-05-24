import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
    width: 100,
  },
  rightContainer: {
    flex: 1, //余ったエリアを全て使って描画を行う
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between', // コンテナ内のスペースをいい感じにする
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 14,
    color: 'gray',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={styles.imageContainer}
            source={{
              uri: 'https://picsum.photos/200/200',
            }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            Tokyo Manga as Image container link orientation numberOfLines
            orientation alignItems photos style MyImage koro style=
            assetBundlePatterns
          </Text>
          <Text style={styles.subtext}>React News</Text>
        </View>
      </View>
    </View>
  );
}
