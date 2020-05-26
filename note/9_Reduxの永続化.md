# Reduxの永続化

## 通常のReduxの場合

スマホのメモリ上にデータの領域を確保しているため、一度、ホーム画面に戻ると保存した情報が削除されてしまいます。

## ストレージ上にデータを保存する方法

redux-persistを利用します。

[公式のページ](https://github.com/rt2zz/redux-persist)

インストールするためには、下記のコマンドを実行します。
`yarn add redux-persist`

## persistConfigについて

保存するデータの内容を指定する部分には、必要なデータのみを指定するように設定しておきましょう。

データの指定は、「ホワイトリスト」「ブラックリスト」形式が利用できます。

```js
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [`user`],
};
```

## 状態をそのスクリーンしか使っていない場合

スクリーンのstateを利用してもいいのでは無いか？

全部にReduxを用いないといけない訳では無い！

## 参考情報

React Native Debugger

<https://github.com/jhen0409/react-native-debugger>

Redux DevTools Extension

<https://github.com/zalmoxisus/redux-devtools-extension>

Redux Hooks

<https://react-redux.js.org/api/hooks>
