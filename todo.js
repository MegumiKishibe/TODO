//①要素の取得
const form = document.getElementById('text-form');
const textInput = document.getElementById('todo-input');
const todolist = document.getElementById('todo-list');
const addButton = document.getElementById('add-button');
//②イベント
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

addButton.addEventListener('click', handleClick);

 //③関数（動詞で命名）
function handleClick() {
    const todoinput = textInput.value.trim();
    if (todoinput === "") return; //空入力を無視

    const li = document.createElement('li');
    li.classList.add('todo-item');   // CSSを当てるだけ追加
    todolist.appendChild(li);

    const span = document.createElement('span');
    span.textContent = todoinput;

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-button';
    delBtn.textContent = '削除';
    delBtn.addEventListener('click', () => {
    li.remove();
    });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        span.style.textDecoration = checkbox.checked ? 'line-through' : 'none'
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);


    //フォームの中を消す
    form.reset();
    textInput.focus();
}
