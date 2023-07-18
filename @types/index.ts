export * from './sponsor';
export * from './login';
export * from './ticket';
export * from './tutorials';

declare global {
  interface Window {
    IMP: {
      init: (identId: string) => void;
      request_pay: (
        params: {
          pg: `${string}.${string}`;
          pay_method: 'card';
          merchant_uid: string;
          name: string;
          amount: number;
          buyer_email: string;
          buyer_name: string;
          buyer_tel: string;
          buyer_addr: string;
          buyer_postcode: string;
        },
        callback: (
          // https://developers.portone.io/docs/ko/sdk/javascript-sdk/payrt
          rsp:
            | {
                success: true;
                imp_uid: string;
                marchant_uid: string;
              }
            | {
                success: false;
                error_msg: string;
              }
        ) => void
      ) => void;
    };
  }
}
