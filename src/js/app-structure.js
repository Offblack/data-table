import { users } from '../data/data';
import { generateTableHead, generateDataRows } from './table-actions';
import { generateForm, editTable } from './form-actions';

const appInit = () => {
   let keyData = Object.keys(users[0]);
   let valueData = Object.values(users[0]);
   let wrapper = document.createElement('div');
   let table = document.createElement('table');
   let form = document.createElement('form');
   wrapper.id = 'main-wrapper';
   table.id = 'data-table';
   document.body.appendChild(wrapper);
   tableInit(table, keyData, valueData, wrapper);
   formInit(table, form, keyData, valueData, wrapper);
};

const tableInit = (table, keyData, valueData, wrapper) => {
   generateTableHead(table, keyData, valueData);
   generateDataRows(table, users);
   wrapper.appendChild(table);
};

const formInit = (table, form, keyData, valueData, wrapper) => {
   generateForm(form, keyData, valueData);
   form.addEventListener('submit', e => {
      editTable(e, table, users);
   });
   wrapper.appendChild(form);
};

appInit();
