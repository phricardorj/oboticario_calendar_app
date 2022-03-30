import {
  getWeeksBetweenTwoDates,
  getWeeksFromDateToToday,
  getElement,
  zeroFill,
} from './functions.js';

const weekNow = getWeeksFromDateToToday('2022-01-17');
const totalWeeks = getWeeksBetweenTwoDates('2022-01-17', '2022-10-17');
const remainingWeeks = totalWeeks - (weekNow + 1);

getElement('#weekNow').innerText = weekNow + 1;
getElement('#totalWeeks').innerText = totalWeeks;
getElement('#remainingWeeks').innerText = remainingWeeks;

setInterval(() => {
  const now = new Date();

  const dataHora =
    zeroFill(now.getUTCDate()) +
    '/' +
    zeroFill(now.getMonth() + 1) +
    '/' +
    now.getFullYear() +
    ' ' +
    zeroFill(now.getHours()) +
    ':' +
    zeroFill(now.getMinutes()) +
    ':' +
    zeroFill(now.getSeconds());

  getElement('#data-hora').innerText = dataHora;
}, 1000);
