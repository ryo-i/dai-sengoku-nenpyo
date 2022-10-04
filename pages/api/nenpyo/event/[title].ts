import nenpyoData from '../../data/nenpyo.json';
import { keyNumbers } from '../../../../modules/api/keyNumbers';
import { getKeyNumber }from '../../../../modules/api/getKeyNumber';
import { getFilterData }from '../../../../modules/api/getFilterData';

const data = nenpyoData.values;
getKeyNumber(data[0], keyNumbers);


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

  // const test = JSON.stringify(nenpyoData.values[3]);
  const test = JSON.stringify(["a", "b", "c"]);

  // console.log('thisObj', thisObj);

  // return thisObj;

  return test; // test
};


// Response
export default (req, res) => {
  const title = req.query.title;
  let thisObj = {};

  // const nenpyoObjData = getNenpyoObjData(title);
  // console.log('nenpyoObjData', nenpyoObjData);

  // res.status(200).json(nenpyoObjData);
  // res.status(200).json({ title: nenpyoObjData });

  for (let i = 0; i < data.length; i++) {
    if (data[i][keyNumbers.title] === title) {
      thisObj[title] = data[i];
    }
  }

  res.status(200).json({ thisObj });
}