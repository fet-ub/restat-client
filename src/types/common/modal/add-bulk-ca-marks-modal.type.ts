import { MarksType } from "../../atoms/enums.atoms";

export interface AddBulkMarksModalPropType {
  fileName?: any;
  setFileName?: any;
  selectedFile?: any;
  setSelectedFile?: any;
  caMarksTableData?: any;
  setCaMarksTableData?: any;
  examMarksTableData?: any;
  setExamsTableData?: any;
  closeModal?: () => void;
  setShowSuccessModal?: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: MarksType;
}
