import { Times } from "../enums/times";

export const increaseTime = (
  date: Date,
  time: Times,
  isIncrease: boolean
): Date => {
  switch (time) {
    case Times.DAY:
      return upDay(date, isIncrease);

    case Times.WEEK:
      return upWeek(date, isIncrease);

    case Times.MONTH:
      return upMonth(date, isIncrease);

    case Times.YEAR:
      return upYear(date, isIncrease);

    default:
      return new Date();
  }
};

const upDay = (date: Date, isIncrease: boolean): Date => {
  const alterTime = isIncrease ? 1 : -1;
  const day = date.getDate() + alterTime;
  return new Date(date.setDate(day));
};

const upWeek = (date: Date, isIncrease: boolean): Date => {
  const alterTime = isIncrease ? 7 : -7;
  date.setDate(date.getDate() + alterTime);

  return date;
};

const upMonth = (date: Date, isIncrease: boolean): Date => {
  const alterTime = isIncrease ? 1 : -1;
  const monthNow = date.getMonth();
  const month = monthNow + alterTime;

  return new Date(date.setMonth(month));
};

const upYear = (date: Date, isIncrease: boolean): Date => {
  const alterTime = isIncrease ? 1 : -1;
  const year = date.getFullYear() + alterTime;

  return new Date(date.setFullYear(year));
};
