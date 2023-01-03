export class AddDto {
  _id?: string;
  type: string;
  title: string;
  description: string;
  price: string;
}

export interface AddDeleteDto {
  acknowledged: boolean;
  deletedCount: number;
}

export interface AddUpdateDto {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedId: any;
  upsertedCount: number;
  matchedCount: number;
}
