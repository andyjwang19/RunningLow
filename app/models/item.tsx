export interface Item {
  name: string;
  claimed: boolean;
  claimer: Person | null;
  deadline?: Date;
  category?: string;
}

//in group
export interface Person {
  name: string;
  picture?: Blob;
}
