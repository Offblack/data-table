import { showForm } from './form-actions';

//Generate Data
const generateData = (row, element) => {
   for (let key in element) {
      if (key === 'id') row.dataset.key = element[key];
      else {
         let cell = row.insertCell();
         let valueType = typeof element[key];
         if (valueType === 'string') cell.classList.add('long-data');
         if (valueType === 'number' || valueType === 'boolean') cell.classList.add('short-data');
         let text = '';
         if (element[key] === true) text = document.createTextNode('Yes');
         else if (element[key] === false) text = document.createTextNode('No');
         else text = document.createTextNode(element[key]);
         cell.appendChild(text);
      }
   }
};

//Generate Table Head
export const generateTableHead = (table, data, valueData) => {
   let thead = table.createTHead();
   let row = thead.insertRow();
   for (let key in data) {
      if (data[key] != 'id') {
         let th = document.createElement('th');
         let valueType = typeof valueData[key];
         if (valueType === 'string') th.classList.add('long-data');
         if (valueType === 'number' || valueType === 'boolean') th.classList.add('short-data');
         let text = document.createTextNode(data[key]);
         th.appendChild(text);
         th.textContent = th.textContent.charAt(0).toUpperCase() + th.textContent.substring(1);
         row.appendChild(th);
      }
   }
};

//Generate Data Rows
export const generateDataRows = (table, users) => {
   for (let element of users) {
      let row = table.insertRow();
      generateData(row, element);
      row.addEventListener('click', () => showForm(users));
   }
};
