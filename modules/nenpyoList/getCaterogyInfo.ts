// Get Category Info
const getCaterogyInfo = (category) => {
  const categoryInfo = {
    path: '',
    name: ''
  };


  if (category === 'senso' || category === "戦争") {
    categoryInfo.path = 'senso';
    categoryInfo.name = '戦争';
  } else if (category === 'gaiko' || category === "外交") {
    categoryInfo.path = 'gaiko';
    categoryInfo.name = '外交';
  } else if (category === 'seiji' || category === "政治") {
    categoryInfo.path = 'seiji';
    categoryInfo.name = '政治';
  } else if (category === 'bunka' || category === "文化") {
    categoryInfo.path = 'bunka';
    categoryInfo.name = '文化';
  } else if (category === 'seireki' || category === '西暦') {
    categoryInfo.path = 'seireki';
    categoryInfo.name = '西暦';
  } else if (category === 'wareki' || category === "和暦") {
    categoryInfo.path = 'wareki';
    categoryInfo.name = '和暦';
  }

  return categoryInfo;
}

export { getCaterogyInfo };