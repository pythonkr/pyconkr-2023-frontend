export type LoginUser = {
  /** 이게 null인지로만 로그인 여부를 판단한다. */
  userid: string | null;
  authToken: string | null;
};
