// Expressの呼び出し
const express = require("express");
// Expressの実行
const app = express();
// ポート番号の定義
const port = 3000;
// リクエストボディ格納用変数
let booklog = {};

// JSONを使えるようにする
app.use(express.json());

// 読書ログを記録する
app.post("/booklog", (req, res) => {
    booklog = req.body;

    if (!(booklog.name && booklog.text)) {
        res.json({
            "ok": false,
            "error": "Invalid Parameter"
        });
    }

    res.json({
        "ok": true,
        "booklog": booklog
    });
});

// 読書ログの一覧を取得する
app.get("/booklog", (req, res) => {
    res.json({
        "ok": true,
        "booklog": [
            booklog
        ]
    });
});

// Expressサーバーを起動する
app.listen(port, () => {
    console.log(`App Listening at http://localhost:${port}`);
});