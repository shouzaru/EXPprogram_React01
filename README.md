# 概要
- G’sACADEMYのEXP_PROGRAM [Reactハンズオン] 1回目講義の課題です。

# 機能
- 横浜FCトップチームの選手の「背番号」をリクエストすると「選手名」が返ってきます。

# 使い方
- express-projectディレクトリ上で以下リクエストを送信  
`curl -X POST -H "Content-Type: application/json" -d "{\"number\”:\”<背番号>\”}” localhost:3001/member`  
<背番号>の部分には任意の番号を入力する。

## 実行例
`curl -X POST -H "Content-Type: application/json" -d "{\"number\":\"49\"}" localhost:3001/member`  
↓  
`{"result":"スベンド ブローダーセン"}`
