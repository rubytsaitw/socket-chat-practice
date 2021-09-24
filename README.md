## Chat room using socket.io

具有雛形和基本功能的陽春版聊天室

## Function List - 功能列表

- 在 Message 框輸入訊息，Room 保持空白，可以對（自己以外的）所有在線使用者廣播。
- 在 Room 框輸入聊天室名稱，可加入該聊天室。
- 在 Message 框輸入訊息，Room 框輸入聊天室名稱，可以對該聊天室的所有在線使用者廣播。
- 使用者所處的個人聊天室id如畫面所示 "You connencted with id: #####"，在Room 中輸入此id 即可和該使用者私聊。

- 發送訊息一律按 Send
- 加入聊天室按 Join

## Project Image - 專案畫面

![image](https://imgur.com/a/uVNTpF2)

## Environment SetUp - 環境建置

1. Node.js
2. Express.js

## Install - 安裝流程

1. 在終端機輸入指令 clone 此專案至本機電腦，並安裝相關套件
```
git clone https://github.com/rubytsaitw/socket-chat-practice
cd socket-chat-practice
npm install
```
2. 啟動專案
```
npm run dev
```
3. 當 terminal 出現以下字樣，表示啟動完成

```
listening on *: 3000
```

請至[http://localhost:3000](http://localhost:3000)開始使用程式

開啟多個視窗，即可模擬多個使用者在線聊天。

## Contributor - 專案開發人員

> [Ruby Tsai](https://github.com/rubytsaitw)