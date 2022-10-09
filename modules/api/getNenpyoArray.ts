// Get Nenpyo Array
const getNenpyoArray = (dataLength, pageInfo, data, keyNumbers) => {
  let startNum = dataLength -1;
  let addLength = 50;
  if ((startNum + addLength) > pageInfo.nenpyoLength) {
    addLength = pageInfo.nenpyoRemainder;
  }

  const nenpyoArray = [];
  for (var i = startNum; i < startNum + addLength; i++) {
    const thisObj = {};
    thisObj['adAge'] = data[i][keyNumbers.adAge];
    thisObj['adYear'] = data[i][keyNumbers.adYear];
    thisObj['adYearUnit'] = data[i][keyNumbers.adYearUnit];
    thisObj['adMonth'] = data[i][keyNumbers.adMonth];
    thisObj['adMonthUnit'] = data[i][keyNumbers.adMonthUnit];
    thisObj['adDay'] = data[i][keyNumbers.adDay];
    thisObj['adDayUnit'] = data[i][keyNumbers.adDayUnit];
    thisObj['adTime'] = data[i][keyNumbers.adTime];
    thisObj['waGengo'] = data[i][keyNumbers.waGengo];
    thisObj['waYear'] = data[i][keyNumbers.waYear];
    thisObj['waYearUnit'] = data[i][keyNumbers.waYearUnit];
    thisObj['waMonth'] = data[i][keyNumbers.waMonth];
    thisObj['waMonthUnit'] = data[i][keyNumbers.waMonthUnit];
    thisObj['waDay'] = data[i][keyNumbers.waDay];
    thisObj['waDayUnit'] = data[i][keyNumbers.waDayUnit];
    thisObj['waTime'] = data[i][keyNumbers.waTime];
    thisObj['commonDate'] = data[i][keyNumbers.commonDate];
    thisObj['category'] = data[i][keyNumbers.category];
    thisObj['title'] = data[i][keyNumbers.title];
    thisObj['path'] = data[i][keyNumbers.path];
    thisObj['region'] = data[i][keyNumbers.region];
    thisObj['country'] = data[i][keyNumbers.country];
    thisObj['influence'] = data[i][keyNumbers.influence];
    nenpyoArray.push(thisObj);
  }
  return nenpyoArray;
};

export { getNenpyoArray };