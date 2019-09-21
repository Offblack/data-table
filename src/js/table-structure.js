import { users } from '../data/data';
import { generateTableHead, generateTable } from './table-actions';

let data = Object.keys(users[0]);

generateTableHead(data);
generateTable(users);
