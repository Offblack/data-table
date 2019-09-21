import { users } from '../data/data';
import { generateTableHead, generateDataRows } from './table-actions';
import { generateForm, editForm } from './form-actions';

const appInit = () => {
   let keyData = Object.keys(users[0]);
   let valueData = Object.values(users[0]);
   tableInit(keyData);
   formInit(keyData, valueData);
};

const tableInit = keyData => {
   let table = document.createElement('table');
   generateTableHead(table, keyData);
   generateDataRows(table, users);
   document.body.appendChild(table);
};

const formInit = (keyData, valueData) => {
   let form = document.createElement('form');
   generateForm(form, keyData, valueData);
   form.addEventListener('submit', e => {
      editTable(e, users);
      appInit();
   });
   document.body.appendChild(form);
};

appInit();
