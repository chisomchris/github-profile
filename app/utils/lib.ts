export const debounce = (fn: Function, delay = 500) => {
  let timer: any = null;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const _ = (date1: Date, date2: Date) => {
  const diff = date2.getTime() - date1.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  // const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if (hours < 1 && days < 1) {
    return `${minutes} minutes ago`;
  }
  if (days < 1) {
    return `${hours} hours ago`;
  }
  if (days >= 365) {
    const yr = Math.floor(days / 365);
    return yr > 1 ? `${yr} years ago` : "1 year ago";
  }
  if (days >= 30) {
    const mn = Math.floor(days / 30);
    return mn > 1 ? `${mn} months ago` : "1 month ago";
  }
};
