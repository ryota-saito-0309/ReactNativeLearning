# Reduxとは

状態を管理するために必要な機能である。

reduxは状態を管理するためのstoreを提供してくれる。

## ComponentがStoreの情報を更新するまでの流れ

ComponentがActionをDispatchする。
Actionの中にはTypeとPayloadを持っている。

ActionがReducerへ伝わると、新しい状態をstoreに保存する。
その後、storeからComponentへ変更が伝わる。

![流れの画像](2020-05-25-16-59-29.png)
