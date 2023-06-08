import axios from '@/lib/axios';
import { getHeaders } from '.';
import { ISponsorApiListItem, ISponsorListItem } from '@/@types/sponsor';
import { SponsorLevel } from '@/data/enums/SponsorLevel';
import { groupBy } from '@/helpers/array.helpers';

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

export async function getSponsorList(): Promise<ISponsorListItem[]> {
  const response = await axios.get(`/sponsors/list/`);
  const list = response.data.map((item: ISponsorApiListItem) => ({
    id: item.id || 0,
    name: item.name || '',
    url: item.url?.replace(/\?.+$/, ''),
    logoImage: item.logo_image || '',
    level: item.level ? SponsorLevel[item.level] : '',
  }));
  const groupedList = groupBy(list, (item) => item.level);
  const sponsorList = Object.entries(groupedList).map(([level, data]) => ({
    level,
    list: data,
  }));
  return sponsorList;
}
