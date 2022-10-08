import nenpyoData from '../data/nenpyo.json';


const dataValues = nenpyoData.values;


// KeyNumbers
const keyNumbers = {
  path: 0
};


// Set Key Numbers
const setKeyNumber = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'path') {
      keyNumbers.path = i;
    }
  }
}
setKeyNumber(dataValues[0]);


// Get Page Info
const getPageInfo = () => {
  const pageInfo= {};

  pageInfo['pathLength'] = dataValues.length -1;

  return pageInfo;
};


// Get Nenpyo Array
const getNenpyoArray = () => {
  const resultArray = [];
  const startCount = 1;

  for (var i = startCount; i < dataValues.length; i++) {
    const thisObj = {};
    thisObj['path'] = dataValues[i][keyNumbers.path];
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