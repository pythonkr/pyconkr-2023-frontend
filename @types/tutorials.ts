import { toValidDate } from '@/utils';

export class Program {
  id: string;

  host: string;

  title: string;

  shortDesc: string;

  desc: string;

  startAt: Date | null;

  endAt: Date | null;

  private constructor(p: Program) {
    this.id = p.id;
    this.host = p.host;
    this.title = p.title;
    this.shortDesc = p.shortDesc;
    this.desc = p.desc;
    this.startAt = p.startAt;
    this.endAt = p.endAt;
  }

  static fromAPI(d: APIProgram): Program {
    return new Program({
      id: d.id,
      host: d.host,
      title: d.title,
      shortDesc: d.short_desc,
      desc: d.desc,
      startAt: toValidDate(d.start_at),
      endAt: toValidDate(d.end_at),
    });
  }

  static fromAPIs(data: APIProgram[]): Program[] {
    return data.map((d) => Program.fromAPI(d));
  }
}

export type APIProgram = {
  id: string;
  host: string;
  title: string;
  short_desc: string;
  desc: string;
  start_at: string | null;
  end_at: string | null;
};
