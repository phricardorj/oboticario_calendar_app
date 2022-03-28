export const getWeeksBetweenTwoDates = (start, end) => {
  const past = new Date(start);
  const now = new Date(end);
  const diff = Math.abs(now.getTime() - past.getTime());
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return Math.floor(days / 7);
};

export const getWeeksFromDateToToday = (date) => {
  const now = new Date();
  const past = new Date(date);
  const diff = Math.abs(now.getTime() - past.getTime());
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return Math.floor(days / 7);
};

export const getElement = (selector) => {
  return document.querySelector(selector);
};
