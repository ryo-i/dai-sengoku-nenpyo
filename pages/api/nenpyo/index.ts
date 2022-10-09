import nenpyoData from '../data/nenpyo.json';
import { keyNumbers } from '../../../modules/api/keyNumbers';
import { getKeyNumber }from '../../../modules/api/getKeyNumber';
import { getFilterData }from '../../../modules/api/getFilterData';
import { getNoCategoryData }from '../../../modules/api/getNoCategoryData';
import { getPageSegmentation }from '../../../modules/api/getPageSegmentation';
import { getDataLength }from '../../../modules/api/getDataLength';
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
  if (query.waTtime) {
    resultData = getFilterData(resultData, 'waTtime', query.waTtime, 'exact');
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
  if (query.adTtime) {
    resultData = getFilterData(resultData, 'adTtime', query.adTtime, 'exact');
  }
  if (query.waGengo) {
    resultData = getFilterData(resultData, 'waGengo', query.waGengo, 'partial');
  }
  if (query.adAge) {
    resultData = getFilterData(resultData, 'adAge', query.adAge, 'partial');
  }
  if (query.region) {
    resultData = getFilterData(resultData, 'region', query.region, 'partial');
  }
  if (query.country) {
    resultData = getFilterData(resultData, 'country', query.country, 'partial');
  }
  if (query.area) {
    resultData = getFilterData(resultData, 'area', query.area, 'partial');
  }
  if (query.influence) {
    resultData = getFilterData(resultData, 'influence', query.influence, 'partial');
  }
  if (query.person) {
    resultData = getFilterData(resultData, 'person', query.person, 'partial');
  }
  if (query.tenNou) {
    resultData = getFilterData(resultData, 'tenNou', query.tenNou, 'partial');
  }
  if (query.kanpaku) {
    resultData = getFilterData(resultData, 'kanpaku', query.kanpaku, 'partial');
  }
  if (query.syogun) {
    resultData = getFilterData(resultData, 'syogun', query.syogun, 'partial');
  }
  if (query.kanrei) {
    resultData = getFilterData(resultData, 'kanrei', query.kanrei, 'partial');
  }
  if (query.kantoKubo) {
    resultData = getFilterData(resultData, 'kantoKubo', query.kantoKubo, 'partial');
  }
  if (query.kantoKanrei) {
    resultData = getFilterData(resultData, 'kantoKanrei', query.kantoKanrei, 'partial');
  }
  if (query.reference) {
    resultData = getFilterData(resultData, 'reference', query.reference, 'partial');
  }
  if (query.url) {
    resultData = getFilterData(resultData, 'url', query.url, 'partial');
  }
  if (query.search) {
    resultData = getFilterData(resultData, 'search', query.search, 'search');
  }

  const pageParam = req.query.page;
  const dataLength = getDataLength(pageParam);
  const pageInfo = getPageSegmentation(pageParam, resultData);
  const nenpyoArray = getNenpyoArray(dataLength, pageInfo, resultData, keyNumbers);

  const resNenpyoData = {};
  resNenpyoData['pageInfo'] = pageInfo;
  resNenpyoData['nenpyoList'] = nenpyoArray;
  res.status(200).json(resNenpyoData);
}