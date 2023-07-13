import { Times } from "../enums/times";

export const increaseTime = (date: Date, time: Times): Date => {
    switch (time) {
        case Times.DAY:
            return upDay(date);

        case Times.WEEK:
            return upWeek(date);

        case Times.MONTH:
            return upMonth(date);

        case Times.YEAR:
            return upYear(date);

        default:
            return new Date();
    }
};

const upDay = (date: Date): Date => {
    const day = date.getDate() + 1;
    return new Date(date.setDate(day));
};

const upWeek = (date: Date): Date => {
    date.setDate(date.getDate() + 7);

    return date;
};

const upMonth = (date: Date): Date => {
    const monthNow = date.getMonth();
    const month = monthNow + 1;

    return new Date(date.setMonth(month));
};

const upYear = (date: Date): Date => {
    const year = date.getFullYear() + 1;

    return new Date(date.setFullYear(year));
};
