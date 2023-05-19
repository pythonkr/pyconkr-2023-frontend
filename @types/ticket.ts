export class TicketType {
  /** 티켓 이름 */
  name: string;

  /** 티켓 가격 */
  price: number;

  /** 최소 가격 */
  minPrice: number | null;

  /** 티켓 설명 */
  desc: string;

  /** 티켓으로 참가하는 요일 */
  day: string;

  /** 프로그램 ID (임시) */
  program: string;

  /** 환불 가능 여부 */
  isRefundable: boolean;

  private constructor(p: TicketType) {
    this.name = p.name;
    this.price = p.price;
    this.minPrice = p.minPrice;
    this.desc = p.desc;
    this.day = p.day;
    this.program = p.program;
    this.isRefundable = p.isRefundable;
  }

  static fromAPI(d: APITicketType): TicketType {
    return new TicketType({
      name: d.name,
      price: d.price,
      minPrice: d.min_price,
      desc: d.desc,
      day: d.day,
      program: d.program,
      isRefundable: d.is_refundable,
    });
  }

  static fromAPIs(data: APITicketType[]): TicketType[] {
    return data.map((d) => TicketType.fromAPI(d));
  }
}

export type APITicketType = {
  name: string;
  price: number;
  min_price: number | null;
  desc: string;
  day: string;
  program: string;
  is_refundable: boolean;
};
