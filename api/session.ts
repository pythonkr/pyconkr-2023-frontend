import axios from '@/lib/axios';
import { SessionList } from '@/@types/session';

export async function getSessionList(): Promise<SessionList[]> {
  const response = await axios.get(`/sessions/`);
  return response.data;
}
