export interface Sponsor {
  account: string;
  name: string;
  phone: string;
  email: string;
  organization: string;
  files: {
    passbook: null;
    certificate: null;
  };
}
export type SponsorInputInfo = Pick<
  Sponsor,
  'email' | 'name' | 'organization' | 'phone'
>;
