import { SponsorLevelLabel } from '@/data/enums/SponsorLevelLabel';

export interface Sponsor {
  url: string;
  name: string;
  level: string;
  managerName: string;
  managerTel: string;
  managerEmail: string;
  businessRegistrationNumber: string;
  cocAgreement: boolean;
  termAgreement: boolean;
  logoImage: FileList | null;
  bankBookFile: FileList | null;
  businessRegistrationFile: FileList | null;
}

export interface SposnorApiParams {
  name: string;
  manager_name: string;
  manager_email: string;
  manager_tel: string;
  business_registration_number: string;
  business_registration_file: File;
  bank_book_file: File;
  url: string;
  logo_image: string;
  level: number;
}

export type SponsorInputInfo = Pick<
  Sponsor,
  'name' | 'businessRegistrationNumber' | 'url'
>;

export type ManagerInputInfo = Pick<
  Sponsor,
  'managerName' | 'managerEmail' | 'managerTel'
>;

export interface SposnorLevelType {
  name: string;
  price: number;
  limit: number;
  id: number;
  available: boolean;
}

// TODO: api interface 파일 분리
export interface SponsorLevelTypeApiResponse {
  name: string;
  price: number;
  desc: string;
  limit: number;
  id: number;
}

export interface ISponsorListItem {
  level: string;
  list: ISponsorData[];
}
export interface ISponsorData {
  name: string;
  url: string | null;
  logoImage: string;
  level: SponsorLevelLabel;
  id: number;
}

export interface ISponsorApiListItem {
  name: string;
  url: string | null;
  logo_image: string;
  level: number;
  id: number;
}

export interface ISponsorDetail extends ISponsorApiListItem {
  desc: string;
  creatorUserid: string | null;
}

export interface Patron {
  name: string;
  contribution_message: string;
}
