import nenpyoData from '../data/nenpyo.json';
import { keyNumbers } from '../../../modules/api/keyNumbers';
import { getKeyNumber }from '../../../modules/api/getKeyNumber';
import { getFilterData }from '../../../modules/api/getFilterData';
import { getNoCategoryData }from '../../../modules/api/getNoCategoryData';
import { getPageSegmentation }from '../../../modules/api/getPageSegmentation';
import { getDataLength }from '../../../modules/api/getDataLength';
import { getYearsArray }from '../../../modules/api/getYearsArray';
import { getFormatsArray }from '../../../modules/api/getFormatsArray';
import { getNenpyoArray }from '../../../modules/api/getNenpyoArray';
import { getCaterogyInfo } from '../../../modules/nenpyoList/getCaterogyInfo';


getKeyNumber(nenpyoData.values[0], keyNumbers);


// Response
export default (req, res) => {
  let resultData = nenpyoData.values;
  const query = req.query;

  // category
  if (query.category) {
    const categoryInfo = getCaterogyInfo(query.category);
    resultData = getFilterData(resultData, 'category', categoryInfo.name, 'exact');
  } else {
    resultData = getNoCategoryData(resultData, keyNumbers);
  }

  // yars & formats array
  const yearsArray = getYearsArray(resultData, keyNumbers);
  const formatsArray = getFormatsArray(resultData, keyNumbers);

  // Get Filter Data
  if (query.waYear) {
    resultData = getFilterData(resultData, 'waYear', query.waYear, 'exact');
  }
  if (query.waYearUnit) {
    resultData = getFilterData(resultData, 'waYearUnit', query.waYearUnit, 'exact');
  }
  if (query.waMonth) {
    resultData = getFilterData(resultData, 'waMonth', query.waMonth, 'exact');
  }
  if (query.waMonthUnit) {
    resultData = getFilterData(resultData, 'waMonthUnit', query.waMonthUnit, 'exact');
  }
  if (query.waDay) {
    resultData = getFilterData(resultData, 'waDay', query.waDay, 'exact');
  }
  if (query.waDayUnit) {
    resultData = getFilterData(resultData, 'waDayUnit', query.waDayUnit, 'exact');
  }
  if (query.adYear) {
    resultData = getFilterData(resultData, 'adYear', query.adYear, 'exact');
  }
  if (query.adYearUnit) {
    resultData = getFilterData(resultData, 'adYearUnit', query.adYearUnit, 'exact');
  }
  if (query.adMonth) {
    resultData = getFilterData(resultData, 'adMonth', query.adMonth, 'exact');
  }
  if (query.adMonthUnit) {
    resultData = getFilterData(resultData, 'adMonthUnit', query.adMonthUnit, 'exact');
  }
  if (query.adDay) {
    resultData = getFilterData(resultData, 'adDay', query.adDay, 'exact');
  }
  if (query.adDayUnit) {
    resultData = getFilterData(resultData, 'adDayUnit', query.adDayUnit, 'exact');
  }
  if (query.time) {
    resultData = getFilterData(resultData, 'time', query.time, 'exact');
  }

  /* if (query.original) {
    resultData = getFilterData(resultData, 'original', query.original, 'partial');
  } */
  if (query.search) {
    resultData = getFilterData(resultData, 'search', query.search, 'search');
  }

  const pageParam = req.query.page;
  const dataLength = getDataLength(pageParam);
  const pageInfo = getPageSegmentation(pageParam, resultData);
  const nenpyoArray = getNenpyoArray(dataLength, pageInfo, resultData, keyNumbers);

  const resNenpyoData = {};
  resNenpyoData['pageInfo'] = pageInfo;
  resNenpyoData['yearList'] = yearsArray;
  resNenpyoData['formatList'] = formatsArray;
  resNenpyoData['nenpyoList'] = nenpyoArray;
  res.status(200).json(resNenpyoData);
}