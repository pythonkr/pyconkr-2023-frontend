import axios from '@/lib/axios';
import { getHeaders } from '.';
import { ISponsorApiListItem, ISponsorDetail } from '@/@types/sponsor';
import { SponsorLevel } from '@/data/enums/SponsorLevel';
import { groupBy } from '@/helpers/array.helpers';
import { AxiosResponse } from 'axios';

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

export async function getSponsorDetail(id: string): Promise<ISponsorDetail> {
  const { data } = await axios.get(`/sponsors/list/${id}/`);
  return {
    id: data.id ?? 0,
    name: data.name ?? '',
    url: data.url ?? '',
    logo_image: data.logo_image?.replace(/\?.+$/, '') ?? '',
    level: data.level ?? 0,
    desc: data.desc ?? '',
  };
}

export function updateSponsorDesc(
  sponsorId: number,
  desc: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    axios
      .put<
        void,
        AxiosResponse<void>,
        {
          desc: string;
        }
      >(
        `/sponsors/${sponsorId}/`,
        { desc },
        {
          headers: getHeaders(),
        }
      )
      .then((response) => {
        resolve();
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      });
  });
}
