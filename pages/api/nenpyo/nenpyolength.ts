import nenpyoData from '../data/nenpyo.json';


// Get Nenpyo Length
const getNenpyoLength = () => {
  const nenpyoLength = {};
  nenpyoLength['allNenpyoLength'] = nenpyoData.values.length -1;
  return nenpyoLength;
};

// Response
export default (req, res) => {
  const nenpyoLength = getNenpyoLength();

  const nenpyosData = {};
  nenpyosData['nenpyoLength'] = nenpyoLength;
  // console.log('nenpyosData', nenpyosData);
  res.status(200).json(nenpyosData);
}