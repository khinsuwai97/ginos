export default async function getPastOrders(page: any) {
  const response = await fetch(`/api/past-orders?page=${page}`);
  const data = await response.json();
  return data;
}
