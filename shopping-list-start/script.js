const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');


function addItem(e) {
   e.preventDefault();

   const newItem = itemInput.value;
   //validate input
   if (newItem === '') {
      alert('Please add an item');
      return;
   }

   //create list item
   const li = document.createElement('li');
   li.appendChild(document.createTextNode(newItem));

   const btn = document.createElement('button');
   btn.className = 'remove-item btn-link text-red';

   const icon = document.createElement('i');
   icon.className = 'fa-solid fa-xmark';
   btn.appendChild(icon);
   li.appendChild(btn);

   itemList.appendChild(li);
   itemInput.value = '';
}


//Event Listener
itemForm.addEventListener('submit', addItem);