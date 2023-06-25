import axios from '@/lib/axios';
import { ProgramDetail, ProgramList } from '@/@types/program';

export async function getProgramList(): Promise<ProgramList> {
  const list = await axios.get<ProgramList>(`/programs/`);
  return list.data;
}

export async function getProgramDetail(
  programId: string
): Promise<ProgramDetail> {
  const detail = await axios.get<ProgramDetail>(`/programs/${programId}/`);
  const { brief, desc, comment, ...data } = detail.data;
  return data;
}
