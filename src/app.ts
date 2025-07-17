let ulEl = document.getElementById('ul') as HTMLUListElement;
let inputEl = document.getElementById('input') as HTMLInputElement;


const renderingTodo = () =>{
    if(inputEl.value === ''){
        return
    }
    ulEl.innerHTML += `<li class="mt-2 mb-2 overflow-x-auto border-b border-gray-200 flex items-center justify-between pl-3">${inputEl.value}
     <div class='flex gap-4'>
     <button onclick='deleteTodo(this)'  class="bg-red-200 ml-20 px-4 py-2 rounded text-red-600 text-xs border border-red-300 hover:border-red-600 cursor-pointer">Delete</button>
     <button onclick='edit(this)' class="bg-green-200  px-4 py-2 rounded text-green-600 text-xs border border-green-300 hover:border-green-600 cursor-pointer">Edit</button>
      </div>
     </li>`
     inputEl.value = '';
}
const add = () =>{
    renderingTodo()
}

const deleteAll = () =>{
    ulEl.innerHTML = ``
}

const deleteTodo = (element : HTMLButtonElement) => {
   const parent = element.parentNode?.parentNode;
   if(parent instanceof HTMLElement){
       parent?.remove();
   }
   
}

const edit = (element : HTMLButtonElement) =>{
 
  const parent = element.parentNode?.parentElement;
   
  if (!parent) return;

  const prom = prompt('Edit todo');
  if (prom) {
    parent.firstChild && (parent.firstChild.textContent = prom);
  }
   
}