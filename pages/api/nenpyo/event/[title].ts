import nenpyoData from '../../data/nenpyo.json';
import { keyNumbers } from '../../../../modules/api/keyNumbers';
import { getKeyNumber }from '../../../../modules/api/getKeyNumber';

const data = nenpyoData.values;
getKeyNumber(data[0], keyNumbers);


// Get Data Obj
const getDataObj = (data) => {
  const keyArray = data[0];
  const resultObj = {};

  for (var i = 0; i < keyArray.length; i++) {
    resultObj[keyArray[i]] = data[i];
  }

  return resultObj;
};


// Response
export default (req, res) => {
  const title = req.query.title;
  const keyArray = data[0];

  const eventData = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i][keyNumbers.title] === title) {
      eventData['title'] = data[i][keyNumbers.title];
      eventData['data'] = getDataObj(data[i]);
    }
  }

  res.status(200).json({ eventData });
}