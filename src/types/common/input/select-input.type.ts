export interface selectOptionType {
  label: string;
  value: string;
}

export interface SelectInputPropType {
  selectOptions?: selectOptionType[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  label?: string;
}
