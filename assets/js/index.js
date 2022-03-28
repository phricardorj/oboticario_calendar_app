import {
  getWeeksBetweenTwoDates,
  getWeeksFromDateToToday,
  getElement,
} from './functions.js';

const weekNow = getWeeksFromDateToToday('2022-01-17');
const totalWeeks = getWeeksBetweenTwoDates('2022-01-17', '2022-10-17');
const remainingWeeks = totalWeeks - weekNow;

getElement('#weekNow').innerText = weekNow;
getElement('#totalWeeks').innerText = totalWeeks;
getElement('#remainingWeeks').innerText = remainingWeeks;
