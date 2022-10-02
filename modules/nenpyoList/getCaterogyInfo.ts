// Get Category Info
const getCaterogyInfo = (category) => {
  const categoryInfo = {
    path: '',
    name: ''
  };

  if (category === 'seireki' || category === '西暦') {
    categoryInfo.path = 'seireki';
    categoryInfo.name = '西暦';
  } else if (category === 'wareki' || category === "和暦") {
    categoryInfo.path = 'wareki';
    categoryInfo.name = '和暦';
  }

  return categoryInfo;
}

export { getCaterogyInfo };