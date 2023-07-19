import { AnyAction } from '@reduxjs/toolkit';
import { UserType } from '../../user.type';

export interface selectOptionType {
  label: string;
  value: string | UserType | any;
}

export interface SelectInputPropType {
  selectOptions?: selectOptionType[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | UserType | undefined | any;
  label?: string | any;
  placeholder?: string | any;
}
