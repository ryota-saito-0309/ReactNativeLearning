import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles';

// Styleは上に記述する流派と下に書く流派がある。
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
