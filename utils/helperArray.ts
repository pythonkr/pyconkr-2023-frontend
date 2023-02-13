export const isNotEmptyValue = <T extends string>(array: T[]): boolean => {
  return array.every((content) => content !== '');
};
