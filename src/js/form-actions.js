let stateRowNumber = '';
let editAcitve = false;

export const generateForm = (form, keyData, valueData) => {
   for (let user in valueData) {
      if (keyData[user] != 'id') {
         let input = document.createElement('input');
         let label = document.createElement('label');
         let div = document.createElement('div');
         let itemBar = document.createElement('div');

         input.id = keyData[user];
         input.name = keyData[user];
         input.placeholder = ' ';
         label.htmlFor = keyData[user];
         itemBar.classList.add('item-bar');

         label.innerHTML = keyData[user].charAt(0).toUpperCase() + keyData[user].substring(1);
         let valueType = typeof valueData[user];
         if (valueType === 'string') input.type = 'text';
         if (valueType === 'number') input.type = 'number';

         if (valueType === 'boolean') {
            div.classList.add('checkbox-group');
            input.type = 'checkbox';
            div.appendChild(input);
            div.appendChild(label);
         } else {
            div.classList.add('form-group');
            div.appendChild(input);
            div.appendChild(label);
            div.appendChild(itemBar);
         }

         form.appendChild(div);
      }
   }
   let button = document.createElement('button');
   button.innerHTML = 'Save';
   form.appendChild(button);
};

export const showForm = function(users) {
   let rowNumber = event.currentTarget.dataset.key - 1;
   stateRowNumber = rowNumber;
   let oneUser = users[rowNumber];
   for (let key in oneUser) {
      let valueType = typeof oneUser[key];
      if (key != 'id') document.getElementById(key).value = oneUser[key];
      if (valueType === 'boolean') document.getElementById(key).checked = oneUser[key];
   }
   editAcitve = true;
};

export const editTable = (e, table, users) => {
   e.preventDefault();
   if (editAcitve) {
      let rowNumber = stateRowNumber;
      let oneUser = users[rowNumber];
      let row = table.rows[rowNumber + 1];
      row.innerHTML = '';
      for (let key in oneUser) {
         let valueType = typeof oneUser[key];
         if (key != 'id') oneUser[key] = document.getElementById(key).value;
         if (valueType === 'boolean') oneUser[key] = document.getElementById(key).checked;
         if (key === 'id') row.dataset.key = oneUser[key];
         else {
            let cell = row.insertCell();
            let text = '';
            if (oneUser[key] === true) text = document.createTextNode('Yes');
            else if (oneUser[key] === false) text = document.createTextNode('No');
            else text = document.createTextNode(oneUser[key]);
            let inputType = document.getElementById(key).type;
            if (inputType === 'text') cell.classList.add('long-data');
            if (inputType === 'number' || inputType === 'checkbox')
               cell.classList.add('short-data');
            cell.appendChild(text);
         }
         if (key != 'id') document.getElementById(key).value = '';
         if (valueType === 'boolean') document.getElementById(key).checked = false;
      }

      editAcitve = false;
   }
};
