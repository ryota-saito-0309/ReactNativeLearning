import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// Styleは上に記述する流派と下に書く流派がある。
const styles = StyleSheet.create({
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

// Functionコンポーネントを用いて実装する
const ListItem = ({ imageUrl, title, author }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.imageContainer}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subtext}>{author}</Text>
      </View>
    </View>
  );
};

export default ListItem;
