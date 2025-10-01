const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const currencyConverter = (price: number) => intl.format(price);
