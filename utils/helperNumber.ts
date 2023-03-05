export function formatted(value: number | string): string {
  if (value || value === 0) {
    const formattedValue: string = String(value).replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      '$1,'
    );
    return formattedValue;
  }
  return '';
}
