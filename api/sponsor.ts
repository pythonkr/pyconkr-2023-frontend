import axios from '@/lib/axios';
import { getHeaders } from '.';
import { ISponsorApiListItem, ISponsorListItem } from '@/@types/sponsor';
import { SponsorLevel } from '@/data/enums/SponsorLevel';
import { groupBy } from '@/helpers/array.helpers';
import { SponsorLevelStatus } from '@/constants/sponsor/sponsorLevel';

export function addSponsor(formData: FormData): Promise<void> {
  return new Promise((resolve, reject) => {
    axios
      .post(`/sponsors`, formData, {
        headers: getHeaders({
          'Content-Type': 'multipart/form-data',
        }),
      })
      .then((response) => {
        resolve();
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      });
  });
}

export async function getSponsorList(): Promise<
  {
    level: string;
    list: {
      id: number;
      name: string;
      url: string;
      logoImage: string;
      level: string;
    }[];
  }[]
> {
  const response = await axios.get<ISponsorApiListItem[]>(`/sponsors/list/`);
  const list = response.data.map((item) => ({
    id: item.id ?? 0,
    name: item.name ?? '',
    url: item.url ?? '',
    logoImage: item.logo_image?.replace(/\?.+$/, '') ?? '',
    level: item.level ? SponsorLevel[item.level] : '',
  }));
  const groupedList = groupBy(list, (item) => item.level);
  const sponsorList = Object.entries(groupedList).map(([level, data]) => ({
    level,
    list: data,
  }));
  return sponsorList;
}
