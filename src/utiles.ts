export function currencyFormatter(currency: string, amount: number) {
  const currentFormat = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currency,
  });
  return currentFormat.format(amount / 100);
}
