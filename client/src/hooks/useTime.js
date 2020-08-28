// NPM PACKAGES
import moment from 'moment';

export const getAge = date => {
  const currentDate = moment(new Date());
  let age;

  if (currentDate.diff(date, 'weeks') < 1) {
    age = currentDate.diff(date, 'days') + ' day(s) old';
  } else if (currentDate.diff(date, 'months') < 1) {
    age = currentDate.diff(date, 'weeks') + ' week(s) old';
  } else if (currentDate.diff(date, 'years') < 1) {
    age = currentDate.diff(date, 'months') + ' month(s) old';
  } else if (currentDate.diff(date, 'years') > 1) {
    age = currentDate.diff(date, 'years') + ' year(s) old';
  };

  return age;
};
