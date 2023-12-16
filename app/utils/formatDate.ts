export function formatDate(date: Date): string {
  return date.toLocaleDateString("no", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function formatYear(date: Date): string {
  return date.toLocaleDateString("no", {
    year: "numeric",
  });
}
