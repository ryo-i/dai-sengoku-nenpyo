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
  } else if (category === 'naisei' || category === "内政") {
    categoryInfo.path = 'naisei';
    categoryInfo.name = '内政';
  } else if (category === 'nairan' || category === "内乱") {
    categoryInfo.path = 'nairan';
    categoryInfo.name = '内乱';
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