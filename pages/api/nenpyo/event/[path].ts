import nenpyoData from '../../data/nenpyo.json';
import { keyNumbers } from '../../../../modules/api/keyNumbers';
import { getKeyNumber }from '../../../../modules/api/getKeyNumber';

const data = nenpyoData.values;
getKeyNumber(data[0], keyNumbers);


// Get Data Obj
const getDataObj = (currentData) => {
  const keyArray = data[0];
  const resultObj = {};

  for (var i = 0; i < keyArray.length; i++) {
    resultObj[keyArray[i]] = currentData[i];
  }

  return resultObj;
};


// Response
export default (req, res) => {
  const path = req.query.path;
  const keyArray = data[0];

  let eventData = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i][keyNumbers.path] === path) {
      eventData = getDataObj(data[i]);
    }
  }

  res.status(200).json({ eventData });
}