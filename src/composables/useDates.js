export const getDaysDiff = (dateOne, dateTwo) => {
  if (!dateOne || !dateTwo) {
    return 0;
  }

  const first = new Date(dateOne);
  const second = new Date(dateTwo);
  const diff = first.getTime() - second.getTime();
  const totalDiff = Math.abs(diff / (1000 * 60 * 60 * 24))

  return totalDiff;
};
