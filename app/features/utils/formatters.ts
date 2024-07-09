export const formatDateTime = (
  date: string,
  length?: 'short' | 'normal' | 'long'
) => {
  switch (length) {
    case 'short':
      return new Date(date).toLocaleString('nb-NO', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    case 'normal':
      return new Date(date).toLocaleString('nb-NO', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });
    case 'long':
      return new Date(date).toLocaleString('nb-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
    default:
      return new Date(date).toLocaleString('nb-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
  }
};
