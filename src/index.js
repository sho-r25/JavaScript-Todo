import "./styles.css";

// テキストボックスの値を取得し、初期化した
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";
  // listタグの生成
  const li = document.createElement("li");
  li.innerText = text;
  // ボタン作成（完了）
  const completeButtun = document.createElement("button");
  completeButtun.innerText = "完了";
  completeButtun.addEventListener("click", () => {
    // 未完了リストから削除(完了ボタン)
    delateFromINcompleteList(deleteButtun.parentNode);
    const addTarget = completeButtun.parentNode;

    // テキスト取得
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButtun = document.createElement("button");
    backButtun.innerText = "戻す";
    backButtun.addEventListener("click", () => {
      const deleteTarget = backButtun.parentNode;
      document.getElementById("completed-list").removeChild(deleteTarget);

      const text = backButtun.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButtun);

    document.getElementById("completed-list").appendChild(addTarget);
  });

  const deleteButtun = document.createElement("button");
  deleteButtun.innerText = "削除";
  deleteButtun.addEventListener("click", () => {
    // 未完了リストから削除
    delateFromINcompleteList(deleteButtun.parentNode);
  });

  // divタグの中にliタグをいれる
  div.appendChild(li);
  div.appendChild(completeButtun);
  div.appendChild(deleteButtun);

  document.getElementById("incompleted-list").appendChild(div);
};

const delateFromINcompleteList = (target) => {
  document.getElementById("incompleted-list").removeChild(target);
};

document
  .getElementById("add-buttun")
  .addEventListener("click", () => onClickAdd());
