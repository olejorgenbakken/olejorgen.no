export const formatDateTime = (
  date: string | Date,
  length?: 'short' | 'normal' | 'long' | 'hour' | 'relative'
) => {
  const today = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };
  const chosenDay = {
    day: new Date(date).getDate(),
    month: new Date(date).getMonth(),
    year: new Date(date).getFullYear(),
  };
  const diff = new Date(date).getTime() - new Date().getTime();
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));

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
    case 'hour':
      if (
        today.day === chosenDay.day &&
        today.month === chosenDay.month &&
        today.year === chosenDay.year
      ) {
        return new Date(date).toLocaleString('nb-NO', {
          hour: 'numeric',
          minute: 'numeric',
        });
      } else {
        return new Date(date).toLocaleString('nb-NO', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
        });
      }
    case 'relative':
      if (minutes <= 0) {
        if (minutes === 0) {
          return 'Nå';
        } else if (months < -1) {
          return `${-months} måneder siden`;
        } else if (weeks < -1) {
          return `${-weeks} uker siden`;
        } else if (days < -1) {
          return `${-days} dager siden`;
        } else if (hours < -1) {
          return `${-hours} timer siden`;
        } else if (minutes < -1) {
          return `${-minutes} minutter siden`;
        } else {
          return new Date(date).toLocaleString('nb-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        }
      } else {
        if (months > 1) {
          return `Om ${months} måneder`;
        } else if (weeks > 1) {
          return `Om ${weeks} uker`;
        } else if (days > 1) {
          return `Om ${days} dager`;
        } else if (hours > 1) {
          return `Om ${hours} timer`;
        } else if (minutes > 1) {
          return `Om ${minutes} minutter`;
        } else {
          return new Date(date).toLocaleString('nb-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        }
      }

    default:
      return new Date(date).toLocaleString('nb-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
  }
};

export const fromUnixEpochTime = (epoch: number) => {
  return formatDateTime(new Date(epoch * 1000).toISOString(), 'long');
};
