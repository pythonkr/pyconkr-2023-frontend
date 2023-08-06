import axios from '@/lib/axios';
import { SessionDetail, SessionList } from '@/@types/session';

export async function getSessionList(): Promise<SessionList[]> {
  const response = await axios.get(`/sessions/`);
  return response.data;
}

export async function getSessionDetail(
  sessionId: string
): Promise<SessionDetail> {
  const response = await axios.get<SessionDetail>(`/sessions/${sessionId}/`);
  return response.data;
}
