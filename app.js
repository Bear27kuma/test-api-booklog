// Expressの呼び出し
const express = require('express');
// Expressの実行
const app = express();
// ポート番号の定義
const port = 3000;

// JSONを使えるようにする
app.use(express.json());

// Expressサーバーを起動する
app.listen(port, () => {
    console.log(`App Listening at http://localhost:${port}`);
});