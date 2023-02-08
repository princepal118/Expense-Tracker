const getFormattedDate = (date: any) => {
  date.setDate(date.getDate() + 10);

  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export default getFormattedDate;
