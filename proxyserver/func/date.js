const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();
const year = date.getFullYear();
const month =
  date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
module.exports = { year, month, day, hour, minutes };
