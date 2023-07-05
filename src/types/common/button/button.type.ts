export interface  ButtonTypes{
    buttonType?:'PRIMARY'|'SECONDARY'|'TERTIARY'|'ERROR';
    fullWidth?:boolean;
    width?:string;
    onClick?:()=>void;
    text?:string | any;
    disable?:boolean;
    icon?:JSX.Element;
}