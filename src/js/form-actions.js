let stateRowNumber = '';

export const generateForm = (form, keyData, valueData) => {
   for (let user in valueData) {
      if (keyData[user] != 'id') {
         let input = document.createElement('input');
         let label = document.createElement('label');
         let p = document.createElement('p');

         input.id = keyData[user];
         input.name = keyData[user];
         input.placeholder = `Enter ${keyData[user]}`;
         label.for = keyData[user];

         label.innerHTML = keyData[user];
         let valueType = typeof valueData[user];
         if (valueType === 'string') input.type = 'text';
         if (valueType === 'number') input.type = 'number';

         if (valueType === 'boolean') {
            input.type = 'checkbox';
            p.appendChild(input);
            p.appendChild(label);
         } else {
            p.appendChild(label);
            p.appendChild(input);
         }

         form.appendChild(p);
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
};

export const editTable = (e, users) => {
   e.preventDefault();
   let rowNumber = stateRowNumber;
   let oneUser = users[rowNumber];
   for (let key in oneUser) {
      let valueType = typeof oneUser[key];
      if (key != 'id') oneUser[key] = document.getElementById(key).value;
      if (valueType === 'boolean') oneUser[key] = document.getElementById(key).checked;
   }
};
