export * from './helperArray';
export * from './helperFormValidate';
export * from './date';

export const isEnvProd: () => boolean = () => {
  return process.env.NEXT_PUBLIC_ENV === 'prod';
};
