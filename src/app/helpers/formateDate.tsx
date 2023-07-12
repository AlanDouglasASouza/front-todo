export const formateDate = (arg: string, date: Date) => {
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
            return {
                title: week[date.getDay()],
                data: date.getDate().toString(),
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
                title: date.getFullYear(),
                data: "Jan - Dez, " + date.getFullYear(),
            };
        }
    }
};
