import nenpyoData from '../../data/nenpyo.json';
import { keyNumbers } from '../../../../modules/api/keyNumbers';
import { getKeyNumber }from '../../../../modules/api/getKeyNumber';

const data = nenpyoData.values;
getKeyNumber(data[0], keyNumbers);

// Response
export default (req, res) => {
  const title = req.query.title;
  const event = {
    title: '',
    data: []
  };

  for (let i = 0; i < data.length; i++) {
    if (data[i][keyNumbers.title] === title) {
      event.title = data[i][keyNumbers.title];
      event.data = data[i];
    }
  }

  res.status(200).json({ event });
}