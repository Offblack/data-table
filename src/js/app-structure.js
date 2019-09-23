import { users } from '../data/data';
import { generateTableHead, generateDataRows } from './table-actions';
import { generateForm, editTable } from './form-actions';

// App init
const appInit = () => {
   let keyData = Object.keys(users[0]);
   let valueData = Object.values(users[0]);
   let wrapper = document.createElement('div');
   let header = document.createElement('h1');
   let table = document.createElement('table');
   let form = document.createElement('form');
   wrapper.id = 'main-wrapper';
   header.id = 'main-header';
   header.innerHTML = 'Data table';
   table.id = 'data-table';
   form.id = 'main-form';
   document.body.appendChild(wrapper);
   wrapper.appendChild(header);
   tableInit(table, keyData, valueData, wrapper);
   formInit(table, form, keyData, valueData, wrapper);
};

// Table init
const tableInit = (table, keyData, valueData, wrapper) => {
   generateDataRows(table, users);
   generateTableHead(table, keyData, valueData);
   wrapper.appendChild(table);
};

// Form init
const formInit = (table, form, keyData, valueData, wrapper) => {
   generateForm(form, keyData, valueData);
   form.addEventListener('submit', e => {
      editTable(e, table, users);
   });
   wrapper.appendChild(form);
};

appInit();
