export interface InputTypes {
  id?: string;
  placeholder: string;
  value: string;
  name: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  icon?: JSX.Element;
  hidden?: boolean;
}
