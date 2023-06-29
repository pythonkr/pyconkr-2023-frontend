import axios from '@/lib/axios';
import { ProgramList } from '@/@types/program';

export async function getProgramList(): Promise<ProgramList[]> {
  const response = await axios.get(`/programs/sessions/`);
  return response.data;
}
