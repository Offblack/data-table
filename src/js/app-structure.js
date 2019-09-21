import { users } from '../data/data';
import { generateTableHead, generateDataRows } from './table-actions';
import { generateForm } from './form-actions';

const appInit = () => {
   let keyData = Object.keys(users[0]);
   let valueData = Object.values(users[0]);
   tableInit(keyData);
   formInit(keyData, valueData);
};

const tableInit = data => {
   let table = document.createElement('table');
   generateTableHead(table, data);
   generateDataRows(table, users);
   document.body.appendChild(table);
};

const formInit = (keyData, valueData) => {
   let form = document.createElement('form');
   generateForm(form, keyData, valueData);
   document.body.appendChild(form);
};

appInit();
