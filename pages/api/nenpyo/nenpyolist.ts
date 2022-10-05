import nenpyoData from '../data/nenpyo.json';


const dataValues = nenpyoData.values;


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
setKeyNumber(dataValues[0]);


// Get Page Info
const getPageInfo = () => {
  const pageInfo= {};

  pageInfo['titleLength'] = dataValues.length -1;

  return pageInfo;
};


// Get Nenpyo Array
const getNenpyoArray = () => {
  const resultArray = [];
  const startCount = 1;

  for (var i = startCount; i < dataValues.length; i++) {
    const thisObj = {};
    thisObj['title'] = dataValues[i][keyNumbers.title];
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
  nenpyoData['nenpyoList'] = nenpyoArray;
  // console.log('nenpyoData', nenpyoData);
  res.status(200).json(nenpyoData);
}