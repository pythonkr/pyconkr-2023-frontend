export interface Sponsor {
  url: string;
  name: string;
  level: string;
  managerName: string;
  managerTel: string;
  managerEmail: string;
  businessRegistrationNumber: string;
  logoImage: File | null;
  bankBookFile: File | null;
  businessRegistrationFile: File | null;
}

export type SponsorInputInfo = Pick<
  Sponsor,
  'name' | 'businessRegistrationNumber' | 'url'
>;

export type ManagerInputInfo = Pick<
  Sponsor,
  'managerName' | 'managerEmail' | 'managerTel'
>;
