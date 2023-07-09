import { UserType } from "../../user.type";

export interface selectOptionType {
  label: string;
  value: string | UserType;
}

export interface SelectInputPropType {
  selectOptions?: selectOptionType[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | UserType | undefined;
  label?: string | any;
}
