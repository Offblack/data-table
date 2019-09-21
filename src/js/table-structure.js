import { users } from '../data/data';
import { generateTableHead, generateTable } from './table-actions';

const tableInit = () => {
   let data = Object.keys(users[0]);
   let table = document.createElement('table');
   generateTableHead(table, data);
   generateTable(table, users);
   document.body.appendChild(table);
};

tableInit();
