# Component

React Native では複雑な UI を`Component`という小さな部品を組み合わせて実現しています。

Component を入れ子で配置して UI を構成していく

◾️ 適切な粒度のComponentに分ける事で・・・

- 可読性
- 再利用性

の2点が解消される。

※アトミックデザインという考え方も有る！
→ [参考ページ](https://goworkship.com/magazine/atomic_design/)

## Componentで利用するもの

- JSX
- Props
- state

### JSXについて

`render`関数が返す`JSX`によって画面描画を行っている。  
※関数コンポーネントの場合は、render関数を利用しません。

JSXでComponentの"見た目"を定義する。  
下記のコードの`<View>`から`</View>`の部分がJSXである。

```JS
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }
}
```

### PropsとStateの違いについて

下記の内容を理解して利用する必要がある。

- Props  
  ...性質、不変
- State  
  ...状態、可変

### Propsについて

componentの`性質`を定義する物です。  
親から子に情報を渡す際に利用します。

### Stateについて

componentの`状態`を表現する物です。  
可変な値をとります。  
stateを変更する事で、画面が更新されます。  
→ Stateを監視していて、Stateを変更すると、自動的に検知して、画面を更新してくれる。

## Imageコンポーネント

[公式リファレンス](https://reactnative.dev/docs/image)

## flexDirectionについて

縦並び・横並びを指定する
flexDirection: 'column' → 縦に並ぶ
flexDirection: 'row' → 横に並ぶ

## alignItemsについて

flexDirectionに対して垂直方向にどう配置するかを指定する。

alignItemsはアイテムの位置を調整する。
flex-start → 縦並びの場合は、左　横並びの場合は、上
flex-end   → 縦並びの場合は、右　横並びの場合は、下

## justifyContent

flexDirectionと同じ軸に対してどのように寄せるのかを定義する

space-between → 各コンポーネントの間を均等に開けてくれる。
space-around → 左右と各コンポーネントの間を均等に開けてくれる。
