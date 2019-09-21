const generateData = (row, element) => {
   for (let key in element) {
      if (key === 'id') row.dataset.key = element[key];
      else {
         let cell = row.insertCell();
         let text = '';
         if (element[key] === true) text = document.createTextNode('Yes');
         else if (element[key] === false) text = document.createTextNode('No');
         else text = document.createTextNode(element[key]);
         cell.appendChild(text);
      }
   }
};

//Generate Table Head
export const generateTableHead = (table, data) => {
   let thead = table.createTHead();
   let row = thead.insertRow();
   for (let key of data) {
      if (key != 'id') {
         let th = document.createElement('th');
         let text = document.createTextNode(key);
         th.appendChild(text);
         row.appendChild(th);
      }
   }
};

//Generate Table
export const generateTable = (table, data) => {
   for (let element of data) {
      let row = table.insertRow();
      generateData(row, element);
   }
};
