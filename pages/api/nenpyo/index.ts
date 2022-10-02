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
  if (query.year) {
    resultData = getFilterData(resultData, 'year', query.year, 'exact');
  } else if (query.format) {
    resultData = getFilterData(resultData, 'format', query.format, 'exact');
  } else if (query.order) {
    resultData = getFilterData(resultData, 'order', query.order, 'exact');
  } else if (query.artist) {
    resultData = getFilterData(resultData, 'artist', query.artist, 'exact');
  } else if (query.original) {
    resultData = getFilterData(resultData, 'original', query.original, 'partial');
  } else if (query.songwriter) {
    resultData = getFilterData(resultData, 'songwriter', query.songwriter, 'partial');
  } else if (query.vocal) {
    resultData = getFilterData(resultData, 'vocal', query.vocal, 'partial');
  } else if (query.playing) {
    resultData = getFilterData(resultData, 'playing', query.playing, 'partial');
  } else if (query.musician) {
    resultData = getFilterData(resultData, 'musician', query.musician, 'partial');
  } else if (query.producer) {
    resultData = getFilterData(resultData, 'producer', query.producer, 'partial');
  } else if (query.engineer) {
    resultData = getFilterData(resultData, 'engineer', query.engineer, 'partial');
  } else if (query.artwork) {
    resultData = getFilterData(resultData, 'artwork', query.artwork, 'partial');
  } else if (query.film) {
    resultData = getFilterData(resultData, 'film', query.film, 'partial');
  } else if (query.mv) {
    resultData = getFilterData(resultData, 'mv', query.mv, 'partial');
  } else if (query.date) {
    resultData = getFilterData(resultData, 'date', query.date, 'exact');
  } else if (query.label) {
    resultData = getFilterData(resultData, 'label', query.label, 'exact');
  } else if (query.country) {
    resultData = getFilterData(resultData, 'country', query.country, 'exact');
  } else if (query.search) {
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