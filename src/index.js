import "./styles.css";

const onClickAdd = function () {
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = ""; //追加ボタン押下後空にする

  createIncomp(inputText);
};

const deleFromIncomp = (tag) => {
  const deleteTarget = tag.parentNode;
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

const createIncomp = (text) => {
  const li = document.createElement("li"); //divタグ生成

  const div = document.createElement("div"); //divタグ生成
  div.className = "list-row"; //できたdivタグにクラス名をつける
  const p = document.createElement("p");
  p.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleFromIncomp(div);

    const text = div.firstElementChild.innerText;
    div.textContent = null;
    const p = document.createElement("p");
    const li = document.createElement("li");
    p.innerText = text;
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      const deleteTarget = div.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      createIncomp(text);
    });

    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(li);
    console.log(div);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleFromIncomp(div);
  });

  console.log(completeButton);

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
