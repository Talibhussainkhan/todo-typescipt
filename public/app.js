"use strict";
let ulEl = document.getElementById('ul');
let inputEl = document.getElementById('input');
const renderingTodo = () => {
    if (inputEl.value === '') {
        return;
    }
    ulEl.innerHTML += `<li class="mt-2 mb-2 overflow-x-auto border-b border-gray-200 flex items-center justify-between pl-3">${inputEl.value}
     <div class='flex gap-4'>
     <button onclick='deleteTodo(this)'  class="bg-red-200 ml-20 px-4 py-2 rounded text-red-600 text-xs border border-red-300 hover:border-red-600 cursor-pointer">Delete</button>
     <button onclick='edit(this)' class="bg-green-200  px-4 py-2 rounded text-green-600 text-xs border border-green-300 hover:border-green-600 cursor-pointer">Edit</button>
      </div>
     </li>`;
    inputEl.value = '';
};
const add = () => {
    renderingTodo();
};
const deleteAll = () => {
    ulEl.innerHTML = ``;
};
const deleteTodo = (element) => {
    var _a;
    const parent = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode;
    if (parent instanceof HTMLElement) {
        parent === null || parent === void 0 ? void 0 : parent.remove();
    }
};
const edit = (element) => {
    var _a;
    const parent = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.parentElement;
    if (!parent)
        return;
    const prom = prompt('Edit todo');
    if (prom) {
        parent.firstChild && (parent.firstChild.textContent = prom);
    }
};
