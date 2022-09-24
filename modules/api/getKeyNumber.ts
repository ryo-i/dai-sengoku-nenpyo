// Get Key Numbers
const getKeyNumber = (data, keyNumbers) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'adAge') {
      keyNumbers.adAge = i;
    } else if (data[i] === 'adYear') {
      keyNumbers.adYear = i;
    } else if (data[i] === 'adMonth') {
      keyNumbers.adMonth = i;
    } else if (data[i] === 'adDay') {
      keyNumbers.adDay = i;
    } else if (data[i] === 'waGengo') {
      keyNumbers.waGengo = i;
    } else if (data[i] === 'waYear') {
      keyNumbers.waYear = i;
    } else if (data[i] === 'waMonth') {
      keyNumbers.waMonth = i;
    } else if (data[i] === 'waDay') {
      keyNumbers.waDay = i;
    } else if (data[i] === 'category') {
      keyNumbers.category = i;
    } else if (data[i] === 'title') {
      keyNumbers.title = i;
    }
  }
}

export { getKeyNumber };