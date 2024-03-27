export interface Item {
  name: string;
  claimed: boolean;
  claimer: Person | null;
  category?: string;
}

//in group
export interface Person {
  name: string;
  picture?: Blob;
}
