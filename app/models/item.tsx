export interface Item {
  id?: string;
  name: string;
  claimed: boolean;
  claimer: Person | null;
  deadline?: Date;
  category?: string;
  _deleted: boolean;
}

//in group
export interface Person {
  name: string;
  picture?: Blob;
}
