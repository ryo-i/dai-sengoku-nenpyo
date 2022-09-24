// Get Nenpyo Array
const getNenpyoArray = (dataLength, pageInfo, data, keyNumbers) => {
  let startNum = dataLength -1;
  let addLength = 50;
  if ((startNum + addLength) > pageInfo.trackLength) {
    addLength = pageInfo.trackRemainder;
  }

  const nenpyoArray = [];
  for (var i = startNum; i < startNum + addLength; i++) {
    const thisObj = {};
    thisObj['adAge'] = data[i][keyNumbers.adAge];
    thisObj['adYear'] = data[i][keyNumbers.adYear];
    thisObj['adMonth'] = data[i][keyNumbers.adMonth];
    thisObj['adDay'] = data[i][keyNumbers.adDay];
    thisObj['waGengo'] = data[i][keyNumbers.waGengo];
    thisObj['waYear'] = data[i][keyNumbers.waYear];
    thisObj['waMonth'] = data[i][keyNumbers.waMonth];
    thisObj['waDay'] = data[i][keyNumbers.waDay];
    thisObj['category'] = data[i][keyNumbers.category];
    thisObj['title'] = data[i][keyNumbers.title];
    nenpyoArray.push(thisObj);
  }
  return nenpyoArray;
};

export { getNenpyoArray };