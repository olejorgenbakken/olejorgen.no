export default function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("nb-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
