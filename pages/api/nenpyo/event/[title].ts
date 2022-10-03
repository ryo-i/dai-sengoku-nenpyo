import nenpyoData from '../../data/nenpyo.json';
import { keyNumbers } from '../../../../modules/api/keyNumbers';
import { getKeyNumber }from '../../../../modules/api/getKeyNumber';
import { getFilterData }from '../../../../modules/api/getFilterData';

getKeyNumber(nenpyoData.values[0], keyNumbers);


// Get Nenpyo Obj Data
const getNenpyoObjData = (title) => {
  const keyArray = nenpyoData.values[keyNumbers.title];
  const valArray = nenpyoData.values[title];
  let thisObj = {};

  console.log('keyArray', keyArray);
  console.log('valArray', valArray);

  /* const eventData = getFilterData(nenpyoData, 'title', title, 'exact');
  console.log('eventData', eventData);

  thisObj["event"] = eventData; */

  for (let i = 0; i < keyArray.length; i++) {
    if (nenpyoData[i].keyArray === valArray) {
      thisObj[keyArray[i]] = nenpyoData[i];
    }
  }

  console.log('thisObj', thisObj);

  return thisObj;
};


// Response
export default (req, res) => {
  /* const {
      query: { event }
  } = req; */
  // const { title } = req.query;
  // console.log('req.query', req.query);

  // const nenpyoObjData = getNenpyoObjData(title);
  // console.log('nenpyoObjData', nenpyoObjData);

  // res.status(200).json(nenpyoObjData);
  // res.status(200).json(`{"title": ${title}}`);
  res.status(200).json({ title: req.query.title  });
}