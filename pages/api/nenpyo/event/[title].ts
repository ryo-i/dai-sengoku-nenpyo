import nenpyoData from '../../data/nenpyo.json';
import { keyNumbers } from '../../../../modules/api/keyNumbers';
import { getKeyNumber }from '../../../../modules/api/getKeyNumber';
import { getFilterData }from '../../../../modules/api/getFilterData';

getKeyNumber(nenpyoData.values[0], keyNumbers);



// Get Track Obj Data
const getTrackObjData = (event) => {
  const keyArray = nenpyoData.values[keyNumbers.title];
  const valArray = nenpyoData.values[event];
  let thisObj = {};

  console.log('keyArray', keyArray);

  const test = getFilterData(nenpyoData, 'title', event, 'exact');
  console.log('test', test);

  /* for (let i = 0; i < keyArray.length; i++) {
    if (nenpyoData[i].keyArray === valArray) {
      thisObj[keyArray[i]] = nenpyoData[i];
    }
  } */

  return thisObj;
};


// Response
export default (req, res) => {
  const {
      query: { event }
  } = req;

  console.log('req.query', req.query);
  const trackObjData = getTrackObjData(event);
  console.log('trackObjData', trackObjData);
  res.status(200).json(trackObjData);
}