const memoInput = document.getElementById("memo-input");
const addButton = document.getElementById("add-button");
const memoContainer = document.getElementById("memo-container");
const changeSlect = document.getElementById("change");

let memos = [{ text: "りんご" }, { text: "ごりら" }, { text: "らっぱ" }];

addButton.onclick = function () {
  // inputに入力した内容を取得する
  const textValue = memoInput.value;
  memos.unshift({ text: textValue });

  // 取得した内容をDOMに反映する
  // const div = document.createElement("div");
  // div.textContent = text;
  // memoContainer.append(div);
  createMemoContainerFunc();
  memoInput.value = "";
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

  for (let i = 0; i < memos.length; i++) {
    const div = document.createElement("div");
    div.textContent = memos[i].text;
    memoContainer.append(div);
  }
};
createMemoContainerFunc();
