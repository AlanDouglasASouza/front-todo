import { Times } from "../enums/times";

export interface IBoxDate {
    title: string;
    data: string;
    clickLeft?: () => void;
    clickRight?: () => void;
}

export interface IHeader {
    time: string | any;
    setTime: (str: Times) => void;
}
