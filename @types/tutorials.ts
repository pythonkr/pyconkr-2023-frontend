import { fromUTC, toValidDate } from '@/utils';

export class Program {
  id: string;

  host: string;

  profile_img: string;

  title: string;

  shortDesc: string;

  desc: string;

  startAt: Date | null;

  endAt: Date | null;

  private constructor(p: Program) {
    this.id = p.id;
    this.host = p.host;
    this.profile_img = p.profile_img;
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
      profile_img: d.profile_img,
      title: d.title,
      shortDesc: d.short_desc,
      desc: d.desc,
      startAt: fromUTC(toValidDate(d.start_at)),
      endAt: fromUTC(toValidDate(d.end_at)),
    });
  }

  static fromAPIs(data: APIProgram[]): Program[] {
    return data.map((d) => Program.fromAPI(d));
  }
}

export type APIProgram = {
  id: string;
  host: string;
  profile_img: string;
  title: string;
  short_desc: string;
  desc: string;
  start_at: string | null;
  end_at: string | null;
};
