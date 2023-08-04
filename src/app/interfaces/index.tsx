import { Times } from "../enums/times";

export interface IBoxDate {
  title: string;
  data: string;
  clickLeft?: () => void;
  clickRight?: () => void;
}

export interface IInput {
  change: (e: any) => void;
  click: () => void;
  keyup: (e: any) => void;
  value: string;
}

export interface IHeader {
  time: string | any;
  setTime: (str: Times) => void;
}

export interface ICheckBox {
  label: string;
  checked: boolean;
  onChange?: () => void;
}

export interface ITaskBox {
  selected: boolean;
  checkBox?: ICheckBox;
  content: string;
  id: number;
  click: () => void;
  title: string;
}

export interface IBaseTasks {
  title: string;
  id?: number;
  content: string;
  checked: boolean;
  date: Date;
}
