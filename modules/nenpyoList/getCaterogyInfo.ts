// Get Category Info
const getCaterogyInfo = (category) => {
  const categoryInfo = {
    path: '',
    name: ''
  };

  if (category === 'seireki') {
    categoryInfo.path = 'seireki';
    categoryInfo.name = '西暦';
  } else if (category === 'wareki') {
    categoryInfo.path = 'wareki';
    categoryInfo.name = '和暦';
  }

  return categoryInfo;
}

export { getCaterogyInfo };