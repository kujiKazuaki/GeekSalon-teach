const inputTxt = document.getElementById("inputTxt");
const addMemoBtn = document.getElementById("addMemoBtn");
const memo = document.getElementById("memo");
const selectBtn = document.getElementById("selectBtn");

addMemoBtn.onclick = function () {
  if (inputTxt.value !== "") {
    const card = memoFormat(inputTxt.value);
    memo.append(card);
    inputTxt.value = "";
  } else {
    alert("文章を書いて");
  }
};

const memoFormat = function (text) {
  const memoContainer = document.createElement("div");
  memoContainer.className = "memoContainer";
  memoContainer.id = "memoContainer";

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "checkboxInput";
  memoContainer.append(checkBox);

  const memoText = document.createElement("div");
  memoText.textContent = text;
  memoText.className = "memoText";
  memoContainer.append(memoText);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btnFormat deleteBtn";
  deleteBtn.innerHTML = "削除";

  deleteBtn.onclick = function () {
    memoContainer.remove();
  };
  memoContainer.append(deleteBtn);

  return memoContainer;
};
