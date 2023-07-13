import { Times } from "../enums/times";
import { Week } from "../enums/week";
import { IBoxDate } from "../interfaces";

export const formateDate = (arg: Times, date: Date): IBoxDate => {
    switch (arg) {
        case Times.DAY: {
            const dateSplit = date.toDateString().split(" ");
            const week = Object.values(Week);

            return {
                title: week[date.getDay()],
                data: `${dateSplit[1]} ${dateSplit[2]}, ${dateSplit[3]}`,
            };
        }
        case Times.WEEK: {
            const { sunday, saturday } = getDaysWeek(date);
            const sundaySplit = sunday.toDateString().split(" ");
            const saturdaySplit = saturday.toDateString().split(" ");

            return {
                title: `Week`,
                data: `${sundaySplit[1]} ${sundaySplit[2]} - ${saturdaySplit[1]} ${saturdaySplit[2]}, ${saturdaySplit[3]}`,
            };
        }
        case Times.MONTH: {
            const month = date.toLocaleString("en-US", { month: "long" });

            return {
                title: month,
                data: month + ", " + date.getFullYear(),
            };
        }
        case Times.YEAR: {
            return {
                title: date.getFullYear().toString(),
                data: "Jan - Dec, " + date.getFullYear(),
            };
        }
        default: {
            return {
                title: "",
                data: "",
            };
        }
    }
};

const getDaysWeek = (date: Date) => {
    const dayOfWeek = date.getDay();
    const diff = date.getDate() - dayOfWeek;

    const diffSaturday = date.getDate() + 6 - dayOfWeek;

    const sunday = new Date(date.setDate(diff));
    const saturday = new Date(date.setDate(diffSaturday));
    return { sunday, saturday };
};
