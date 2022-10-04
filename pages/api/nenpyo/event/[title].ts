import nenpyoData from '../../data/nenpyo.json';
import { keyNumbers } from '../../../../modules/api/keyNumbers';
import { getKeyNumber }from '../../../../modules/api/getKeyNumber';
import { getFilterData }from '../../../../modules/api/getFilterData';

getKeyNumber(nenpyoData.values[0], keyNumbers);


// Get Nenpyo Obj Data
const getNenpyoObjData = (title) => {
  // const keyArray = nenpyoData.values[keyNumbers.title];
  // const valArray = nenpyoData.values[title];
  let thisObj = {};

  /* console.log('keyArray', keyArray);
  console.log('valArray', valArray); */

  const eventData = getFilterData(nenpyoData, 'title', title, 'exact');
  console.log('eventData', eventData);

  thisObj["event"] = eventData;

  /* for (let i = 0; i < keyArray.length; i++) {
    if (nenpyoData[i].keyArray === valArray) {
      thisObj[keyArray[i]] = nenpyoData[i];
    }
  } */

  /* const result = nenpyoData.values.filter((item, index) => {
    if (item[keyNumbers.title] === title) {
      return item;
    }
  }); */

  const test = nenpyoData.values[3];

  // console.log('thisObj', thisObj);

  // return thisObj;

  return test; // test
};


// Response
export default (req, res) => {
  const title = req.query.title;

  const nenpyoObjData = getNenpyoObjData(title);
  console.log('nenpyoObjData', nenpyoObjData);

  // res.status(200).json(nenpyoObjData);
  res.status(200).json({ title: nenpyoObjData });
}