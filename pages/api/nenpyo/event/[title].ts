import nenpyoData from '../../data/nenpyo.json';


// Get Track Obj Data
const getTrackObjData = (event) => {
  const keyArray = nenpyoData.values[0];
  const valArray = nenpyoData.values[event];
  const thisObj = {};

  console.log('keyArray', keyArray);

  if (keyArray.length === valArray.length) {
    for (var i = 0; i < keyArray.length; i++) {
      thisObj[keyArray[i]] = valArray[i];
    }
  }
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