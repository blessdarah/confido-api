import { Address } from "./Address";

export type PackageRequest = {
  destination: Address;
  status: string;
  author: string | number;
  traveller: string | number;
  cost: number;
  expiryDate: Date;
  productRef: string;
};
