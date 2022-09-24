// Get Key Numbers
const getKeyNumber = (data, keyNumbers) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'ad-year') {
      keyNumbers.adYear = i;
    } else if (data[i] === 'ad-month') {
      keyNumbers.adMonth = i;
    } else if (data[i] === 'ad-day') {
      keyNumbers.adDay = i;
    } else if (data[i] === 'wa-year') {
      keyNumbers.waYear = i;
    } else if (data[i] === 'wa-month') {
      keyNumbers.waMonth = i;
    } else if (data[i] === 'wa-day') {
      keyNumbers.waDay = i;
    } else if (data[i] === 'category') {
      keyNumbers.category = i;
    } else if (data[i] === 'title') {
      keyNumbers.title = i;
    }
  }
}

export { getKeyNumber };