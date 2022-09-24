// Get Tracks Array
const getNenpyoArray = (dataLength, pageInfo, data, keyNumbers) => {
  let startNum = dataLength -1;
  let addLength = 50;
  if ((startNum + addLength) > pageInfo.trackLength) {
    addLength = pageInfo.trackRemainder;
  }

  const nenpyoArray = [];
  for (var i = startNum; i < startNum + addLength; i++) {
    const thisObj = {};
    thisObj['ad-year'] = data[i][keyNumbers.adYear];
    thisObj['ad-month'] = data[i][keyNumbers.adMonth];
    thisObj['ad-day'] = data[i][keyNumbers.adDay];
    thisObj['wa-year'] = data[i][keyNumbers.waYear];
    thisObj['wa-month'] = data[i][keyNumbers.waMonth];
    thisObj['wa-day'] = data[i][keyNumbers.waDay];
    thisObj['category'] = data[i][keyNumbers.category];
    thisObj['title'] = data[i][keyNumbers.title];
    nenpyoArray.push(thisObj);
  }
  return nenpyoArray;
};

export { getNenpyoArray };