// Get Key Numbers
const getKeyNumber = (data, keyNumbers) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'adAge') {
      keyNumbers.adAge = i;
    } else if (data[i] === 'adYear') {
      keyNumbers.adYear = i;
    } else if (data[i] === 'adYearUnit') {
      keyNumbers.adYearUnit = i;
    } else if (data[i] === 'adMonth') {
      keyNumbers.adMonth = i;
    } else if (data[i] === 'adMonthUnit') {
      keyNumbers.adMonthUnit = i;
    } else if (data[i] === 'adDay') {
      keyNumbers.adDay = i;
    } else if (data[i] === 'adDayUnit') {
      keyNumbers.adDayUnit = i;
    } else if (data[i] === 'waGengo') {
      keyNumbers.waGengo = i;
    } else if (data[i] === 'waYear') {
      keyNumbers.waYear = i;
    } else if (data[i] === 'waYearUnit') {
      keyNumbers.waYearUnit = i;
    } else if (data[i] === 'waMonth') {
      keyNumbers.waMonth = i;
    } else if (data[i] === 'waMonthUnit') {
      keyNumbers.waMonthUnit = i;
    } else if (data[i] === 'waDay') {
      keyNumbers.waDay = i;
    } else if (data[i] === 'waDayUnit') {
      keyNumbers.waDayUnit = i;
    } else if (data[i] === 'time') {
      keyNumbers.time = i;
    } else if (data[i] === 'commonDate') {
      keyNumbers.commonDate = i;
    } else if (data[i] === 'category') {
      keyNumbers.category = i;
    } else if (data[i] === 'title') {
      keyNumbers.title = i;
    } else if (data[i] === 'path') {
      keyNumbers.path = i;
    } else if (data[i] === 'region') {
      keyNumbers.region = i;
    } else if (data[i] === 'country') {
      keyNumbers.country = i;
    } else if (data[i] === 'area') {
      keyNumbers.area = i;
    } else if (data[i] === 'influence') {
      keyNumbers.influence = i;
    } else if (data[i] === 'person') {
      keyNumbers.person = i;
    } else if (data[i] === 'reference') {
      keyNumbers.reference = i;
    } else if (data[i] === 'url') {
      keyNumbers.url = i;
    } else if (data[i] === 'tenNou') {
      keyNumbers.tenNou = i;
    } else if (data[i] === 'kanpaku') {
      keyNumbers.kanpaku = i;
    } else if (data[i] === 'syogun') {
      keyNumbers.syogun = i;
    } else if (data[i] === 'kanrei') {
      keyNumbers.kanrei = i;
    } else if (data[i] === 'kantoKubo') {
      keyNumbers.kantoKubo = i;
    } else if (data[i] === 'kantoKanrei') {
      keyNumbers.kantoKanrei = i;
    }
  }
}

export { getKeyNumber };