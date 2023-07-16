export interface LecturerResponseTypes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: null;
  status: string;
  created_at: Date;
  updated_at: Date;
  pivot: Pivot;
}

export interface Pivot {
  role_id: number;
  model_id: number;
  model_type: string;
}
