# APIとの通信について

## Stateの利用方法について

ファンクションコンポーネントでstateを利用したい場合は、Hookを利用しなければならない。

以前は、クラスコンポーネントでないと、stateを持てなかったのですが、最近では、ファンクションコンポーネントでもstateを使えるようになりました。

ファンクションコンポーネントで書く方がシンプルに記述できるため、ファンクションコンポーネントを利用する事が推奨されています。

[公式のページ](https://ja.reactjs.org/docs/hooks-intro.html)

```JS
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## フックについて

React16.8で追加された新機能です。React Native 0.59以降でサポートされています。
ExpoではSDK33以降で対応しています。

## フックのuseEffectについて

詳しい情報はこちらの[公式ページ](https://ja.reactjs.org/docs/hooks-reference.html#useeffect)に記載されています。

### 条件付きで副作用を実行する

デフォルトの動作では、副作用関数はレンダーの完了時に毎回実行されます。これにより、コンポーネントの依存配列のうちのいずれかが変化した場合に毎回副作用が再作成されます。

しかし、上述のデータ購読の例でもそうですが、これは幾つかのケースではやりすぎです。新しい購読を設定する必要があるのは毎回の更新ごとではなく、source プロパティが変化した場合のみです。

これを実装するためには、useEffect の第 2 引数として、この副作用が依存している値の配列を渡します。変更後の例は以下のようになります。

```JS
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
```

今回は、空の配列 `[]` を渡し、この副作用がコンポーネント内のどの値にも依存していないということを React に伝えます。
そのため、副作用はマウント時に実行されアンマウント時にクリーンアップされますが、更新時には実行されないようになります。
読み込まれたタイミングで一度だけ実行したい関数等は上記の方法を用いる。

### useEffectのクリーンアップ処理

useEffectの返り値でクリーンアップ関数というものがあります。
このコンポーネントがアンマウントされる際のクリーンアップが必要な場合は、ここの処理に記載します。

今回は、timerをクリアしておく必要があります。

```JS
  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 2000);
    return () => clearTimeout(timer);  // ここがクリーンアップ処理
  }, []); 
```
