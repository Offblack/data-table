//Generate Table Head
export const generateTableHead = data => {
   let table = document.createElement('table');
   let thead = table.createTHead();
   let row = thead.insertRow();
   for (let key of data) {
      let th = document.createElement('th');
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
   }
   document.body.appendChild(table);
};

//Generate Table
export const generateTable = data => {
   let table = document.createElement('table');
   for (let element of data) {
      let row = table.insertRow();
      for (let key in element) {
         let cell = row.insertCell();
         let text = document.createTextNode(element[key]);
         cell.appendChild(text);
      }
   }
   document.body.appendChild(table);
};
