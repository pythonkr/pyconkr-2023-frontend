import axios from '@/lib/axios';
import { SessionList } from '@/@types/session';

export async function getSessionList(): Promise<SessionList[]> {
  const response = await axios.get('https://api-dev.pycon.kr/sessions/');
  return response.data;
}
