# TodoList
## 專案預覽及網址
https://lunzaizai0223.github.io/TodoList/

<img width="1259" alt="螢幕快照 2021-10-10 13 21 27" src="https://user-images.githubusercontent.com/77038018/136683368-36b46f72-1887-43a8-b33d-716bd680930d.png">
<img width="268" alt="螢幕快照 2021-10-13 15 26 03" src="https://user-images.githubusercontent.com/77038018/137086666-5c8a191d-413e-4fe9-ab5d-a7c8118d6dfa.png">


## 小記
版型參考：https://dribbble.com/shots/2451888-ToDo-List <br>
功能參考：[codepen1](https://codepen.io/jarvis73045/pen/OJWWGjN)、[codepen2](https://codepen.io/saawsan/pen/jayzeq)

原本是想要參照 [codepen1](https://codepen.io/jarvis73045/pen/OJWWGjN) 實作修改的功能，但是研究一個早上還是沒有想法。後來在網路上有找到[教學](https://www.youtube.com/watch?v=MkESyVB4oUw)，這個教學一開始是用 `<input>` 打底 + CSS 鎖定，後來再用事件打開讓使用者編輯，之後應該會朝這個方向實作修改功能。

### 實作功能：
在修改的 `<button>` 上一樣也新增屬性 `data-num`，因為一開始渲染網頁是用 `forEach`，把 `data-num` 的值設為 `indexNum` 就可以確保該 `<button>` 有對應資料的索引。得到索引資料就可以選擇對應的 HTML 元素更改其 `innerHTML`（比方來說按下修改鍵後在對應的 `li` 中改成 `<input>`）。新增出來的 `<input>` 也綁上 `data-num` 這樣子在更新物件值的時候可以選取正確的陣列索引。
另外，可以在一個監聽事件的任務內新增另一個監聽事件的綁定，所以點選修改鈕後就可以出發按下 Enter 儲存修改 / 按下 Esc 取消修改。因為想要實作「修改多個任務」，所以一開始變直接 `document.querySelectorAll` 取得長得像陣列的 `NodeList`，在判別按下 Enter 後就可以 `for of` loop `NodeList` 中的值（也就是修改完的 Todo），最後再用 `render()` 渲染頁面。

目前的缺點：似乎太氾濫地使用 `HTML data attribute`了，但是我目前也想不到其他的解法等之後想到再來優化邏輯。

## 時程
2021/10/09 完成第一版（無修改、無 localStorage、無登入系統）
2021/10/13 完成第二版（新增修改功能、任務結束後的 GIF、RWD 優化）
