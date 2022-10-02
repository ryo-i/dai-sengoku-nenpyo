// import beatlesData from '../data/beatles.json';
import nenpyoData from '../data/nenpyo.json';


// KeyNumbers
const keyNumbers = {
  title: 0
};


// Set Key Numbers
const setKeyNumber = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'title') {
      keyNumbers.title = i;
    }
  }
}
setKeyNumber(nenpyoData.values[0]);


// Get Page Info
const getPageInfo = () => {
  const pageInfo= {};
  pageInfo['title'] = nenpyoData.values.length -1;
  return pageInfo;
};


// Get Nenpyo Array
const getNenpyoArray = () => {
  const resultArray = [];
  for (var i = 1; i < nenpyoData.values.length; i++) {
    const thisObj = {};
    thisObj['title'] = nenpyoData.values[i][keyNumbers.title];
    resultArray.push(thisObj);
  }
  return resultArray;
};


// Response
export default (req, res) => {
  const pageInfo = getPageInfo();
  const nenpyoArray = getNenpyoArray();

  const nenpyoData = {};
  nenpyoData['pageInfo'] = pageInfo;
  nenpyoData['trackList'] = nenpyoArray;
  // console.log('nenpyoData', nenpyoData);
  res.status(200).json(nenpyoData);
}