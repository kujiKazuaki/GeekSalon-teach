const memoInput = document.getElementById("memo-input");
const addButton = document.getElementById("add-button");
const deleteBtn = document.getElementById("delete-button");
const memoContainer = document.getElementById("memo-container");
const changeSlect = document.getElementById("change");

let memos = JSON.parse(localStorage["memoitems"] || "[]");

memos.push([{ text: "りんご" }, { text: "ごりら" }, { text: "らっぱ" }]);

addButton.onclick = function () {
  // inputに入力した内容を取得する
  const textValue = memoInput.value;
  if (textValue !== "") {
    memos.push({ text: textValue });
    localStorage.memos = JSON.stringify(memos);

    // 取得した内容をDOMに反映する
    // const div = document.createElement("div");
    // div.textContent = text;
    // memoContainer.append(div);
    createMemoContainerFunc();
    memoInput.value = "";
  }
};

changeSlect.onchange = () => {
  const result = changeSlect.value;
  if (result === "new") {
    memos.sort((a, b) => {
      const nameA = a.text.toUpperCase(); // 大文字と小文字を無視する
      const nameB = b.text.toUpperCase(); // 大文字と小文字を無視する
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // 名前が等しい
      return 0;
    });
  } else {
    memos.sort((a, b) => {
      const nameA = a.text.toUpperCase(); // 大文字と小文字を無視する
      const nameB = b.text.toUpperCase(); // 大文字と小文字を無視する
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      // 名前が等しい
      return 0;
    });
  }

  createMemoContainerFunc();
};

const createMemoContainerFunc = () => {
  memoContainer.textContent = "";
  if (localStorage.memos) {
    // ローカルストレージのmemosキーからJSONを読み込む。
    const memosJson = localStorage.memos;
    // JSON.parseで配列にして、memosを更新する。
    memos = JSON.parse(memosJson);
    console.log(memos);

    // ページ読み込み時に、配列の内容をブラウザに反映する。
    for (let i = 0; i < memos.length; i++) {
      const div = document.createElement("div");
      div.textContent = memos[i].text;
      memoContainer.append(div);
    }
  }
};
createMemoContainerFunc();

deleteBtn.onclick = () => {
  if (confirm("ローカルストレージ含め全てのメモを削除しますか？")) {
    localStorage.clear();
    memos = [];
    memoContainer.textContent = "";

    console.clear();
    const style = `font-size: 20px; color: red; border: 2px solid black;`;
    console.log("%c全て削除しました！", style);
  }
};
