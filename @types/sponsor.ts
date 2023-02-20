export interface Sponsor {
  url: string;
  name: string;
  level: string;
  managerName: string;
  managerTel: string;
  managerEmail: string;
  businessRegistrationNumber: string;
  logoImage: FileList | null;
  bankBookFile: FileList | null;
  businessRegistrationFile: FileList | null;
}

export type SponsorInputInfo = Pick<
  Sponsor,
  'name' | 'businessRegistrationNumber' | 'url'
>;

export type ManagerInputInfo = Pick<
  Sponsor,
  'managerName' | 'managerEmail' | 'managerTel'
>;
