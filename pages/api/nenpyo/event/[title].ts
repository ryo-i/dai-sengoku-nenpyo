import nenpyoData from '../../data/nenpyo.json';
import { keyNumbers } from '../../../../modules/api/keyNumbers';
import { getKeyNumber }from '../../../../modules/api/getKeyNumber';

const data = nenpyoData.values;
getKeyNumber(data[0], keyNumbers);

// Response
export default (req, res) => {
  const title = req.query.title;

  const eventData = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i][keyNumbers.title] === title) {
      eventData['title'] = data[i][keyNumbers.title];
      eventData['data'] = data[i];
    }
  }

  res.status(200).json({ eventData });
}