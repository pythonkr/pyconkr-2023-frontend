import { fromUTC, toValidDate } from '@/utils';

export class MyTicketType {
  /** 티켓 이름 */
  name: string;

  /** 티켓 가격 */
  price: number;

  /** 결제 일시 */
  // TODO 서버에서 안 줘서 비활성화
  // paidAt: Date;

  /** 환불을 위한 결제 키 */
  paymentKey: string;

  private constructor(p: MyTicketType) {
    this.name = p.name;
    this.price = p.price;
    // this.paidAt = p.paidAt;
    this.paymentKey = p.paymentKey;
  }

  static fromAPI(d: APIMyTicketType): MyTicketType {
    return new MyTicketType({
      name: d.ticket_type_name,
      price: d.price,
      // paidAt: fromUTC(toValidDate(d.date)),
      paymentKey: d.payment_key,
    });
  }

  static fromAPIs(data: APIMyTicketType[]): MyTicketType[] {
    return data.map((d) => MyTicketType.fromAPI(d));
  }
}

export type APIMyTicketType = {
  ticket_type_name: string;
  date: string;
  price: number;
  payment_key: string;
};
