// Get Filter Data
const getNoCategoryData = (data, keyNumbers) => {
  const result = data.filter((item, index) => {
    if (item[keyNumbers['adYear']] !== 'adYear') {
      return item;
    }
  });
  return result;
};

export { getNoCategoryData };