export class MyTicketType {
  id: string;

  /** 티켓 이름 */
  name: string;

  /** 티켓 가격 */
  price: number;

  /** 결제일 */
  paymentDate: string;

  /** 환불 가능 여부 */
  isRefundable: boolean;

  private constructor(p: MyTicketType) {
    this.id = p.id;
    this.name = p.name;
    this.price = p.price;
    this.paymentDate = p.paymentDate;
    this.isRefundable = p.isRefundable;
  }

  static fromAPI(d: APIMyTicketType): MyTicketType {
    return new MyTicketType({
      id: d.id,
      name: d.name,
      price: d.price,
      paymentDate: d.payment_date,
      isRefundable: d.is_refundable,
    });
  }

  static fromAPIs(data: APIMyTicketType[]): MyTicketType[] {
    return data.map((d) => MyTicketType.fromAPI(d));
  }
}

export type APIMyTicketType = {
  id: string;
  name: string;
  price: number;
  payment_date: string;
  is_refundable: boolean;
};
