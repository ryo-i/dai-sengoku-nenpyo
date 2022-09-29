// Get Key Numbers
const getKeyNumber = (data, keyNumbers) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'adAge') {
      keyNumbers.adAge = i;
    } else if (data[i] === 'adYear') {
      keyNumbers.adYearUnit = i;
    } else if (data[i] === 'adYearUnit') {
      keyNumbers.adYear = i;
    } else if (data[i] === 'adMonth') {
      keyNumbers.adMonthUnit = i;
    } else if (data[i] === 'adMonthUnit') {
      keyNumbers.adMonth = i;
    } else if (data[i] === 'adDay') {
      keyNumbers.adDayUnit = i;
    } else if (data[i] === 'adDayUnit') {
      keyNumbers.adDay = i;
    } else if (data[i] === 'waGengo') {
      keyNumbers.waGengo = i;
    } else if (data[i] === 'waYear') {
      keyNumbers.waYearUnit = i;
    } else if (data[i] === 'waYearUnit') {
      keyNumbers.waYear = i;
    } else if (data[i] === 'waMonth') {
      keyNumbers.waMonthUnit = i;
    } else if (data[i] === 'waMonthUnit') {
      keyNumbers.waMonth = i;
    } else if (data[i] === 'waDay') {
      keyNumbers.waDayUnit = i;
    } else if (data[i] === 'waDayUnit') {
      keyNumbers.waDay = i;
    } else if (data[i] === 'category') {
      keyNumbers.category = i;
    } else if (data[i] === 'title') {
      keyNumbers.title = i;
    } else if (data[i] === 'region') {
      keyNumbers.region = i;
    } else if (data[i] === 'country') {
      keyNumbers.country = i;
    } else if (data[i] === 'influence') {
      keyNumbers.influence = i;
    }
  }
}

export { getKeyNumber };