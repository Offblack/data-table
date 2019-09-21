import { users } from '../data/data';
import { generateTableHead, generateDataRows } from './table-actions';
import { generateForm, editTable } from './form-actions';

const appInit = () => {
   let keyData = Object.keys(users[0]);
   let valueData = Object.values(users[0]);
   let table = document.createElement('table');
   let form = document.createElement('form');
   tableInit(table, keyData);
   formInit(table, form, keyData, valueData);
};

const tableInit = (table, keyData) => {
   generateTableHead(table, keyData);
   generateDataRows(table, users);
   document.body.appendChild(table);
};

const formInit = (table, form, keyData, valueData) => {
   generateForm(form, keyData, valueData);
   form.addEventListener('submit', e => {
      editTable(e, table, users);
   });
   document.body.appendChild(form);
};

appInit();
