import { IBoxDate } from "../interfaces";

export const formateDate = (arg: string, date: Date): IBoxDate => {
    const week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    switch (arg) {
        case "Day": {
            const dateSplit = date.toDateString().split(" ");

            return {
                title: week[date.getDay()],
                data: `${dateSplit[1]} ${dateSplit[2]}, ${dateSplit[3]}`,
            };
        }
        case "Week": {
            const { sunday, monday } = getDaysWeek(date);
            const sundaySplit = sunday.toDateString().split(" ");
            const mondaySplit = monday.toDateString().split(" ");

            return {
                title: `Week`,
                data: `${sundaySplit[1]} ${sundaySplit[2]} - ${mondaySplit[1]} ${mondaySplit[2]}, ${mondaySplit[3]}`,
            };
        }
        case "Month": {
            const month = date.toLocaleString("en-US", { month: "long" });

            return {
                title: month,
                data: month + ", " + date.getFullYear(),
            };
        }
        case "Year": {
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

    const diffMonday = date.getDate() + 6 - dayOfWeek;

    const sunday = new Date(date.setDate(diff));
    const monday = new Date(date.setDate(diffMonday));

    return { sunday, monday };
};
