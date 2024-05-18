import { MONTHS, DAYS } from './DateConstants';

const date = new Date();

export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );
  return days;
}

export function getDayMonthFromDate() {
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getUTCDate();

  return day + ' ' + month;
}

export function transformDateFormat() {
  const month = date.toLocaleString('en-US', { month: '2-digit' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  const newFormatDate = year.toString().concat('-', month, '-', day, ' ', time);
  return newFormatDate;
}

// export function getUTCDatetime() {
//   const utcTime = date.toLocaleString('en-US', {
//     hour: '2-digit',
//     minute: '2-digit',
//     hourCycle: 'h23',
//     timeZone: 'GMT',
//   });

//   const isoDateString = new Date().toISOString();
//   const utcDate = isoDateString.split('T')[0].concat(' ', utcTime);
//   return utcDate;
// }

export function getUTCDatetime() {
  const date = new Date(); // Get the current date and time in the local time zone
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit', // Include seconds
    hour12: true
  };
  const localTime = date.toLocaleString('en-GB', options); // Convert the date to a local string format with British English locale
  return localTime;
}


export function getUTCTime() {
  const utcTime = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'UTC',
  });

  return utcTime;
}
