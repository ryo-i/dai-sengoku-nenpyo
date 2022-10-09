// Get Tag Info
const getQueryName = (queryKey) => {
  let queryName = '';

  if (queryKey === 'adAge') {
    queryName = '年代(西暦)';
  } else if (queryKey === 'adYear') {
    queryName = '年(西暦)';
  } else if (queryKey === 'adYearUnit') {
    queryName = '年単位(西暦)';
  } else if (queryKey === 'adMonth') {
    queryName = '月(西暦)';
  } else if (queryKey === 'adMonthUnit') {
    queryName = '月単位(西暦)';
  } else if (queryKey === 'adDay') {
    queryName = '日(西暦)';
  } else if (queryKey === 'adDayUnit') {
    queryName = '日単位(西暦)';
  } else if (queryKey === 'waGengo') {
    queryName = '年間(和暦)';
  } else if (queryKey === 'waYear') {
    queryName = '年(和暦)';
  } else if (queryKey === 'waYearUnit') {
    queryName = '年単位(和暦)';
  } else if (queryKey === 'waMonth') {
    queryName = '月(和暦)';
  } else if (queryKey === 'waMonthUnit') {
    queryName = '月単位(和暦)';
  } else if (queryKey === 'waDay') {
    queryName = '日(和暦)';
  } else if (queryKey === 'waDayUnit') {
    queryName = '日単位(和暦)';
  } else if (queryKey === 'time') {
    queryName = '時間';
  } else if (queryKey === 'commonDate') {
    queryName = '年月日';
  } else if (queryKey === 'category') {
    queryName = 'カテゴリー';
  } else if (queryKey === 'title') {
    queryName = '出来事';
  } else if (queryKey === 'remarks') {
    queryName = '概要';
  } else if (queryKey === 'path') {
    queryName = 'パス';
  } else if (queryKey === 'region') {
    queryName = '地方';
  } else if (queryKey === 'country') {
    queryName = '国(令制国)';
  } else if (queryKey === 'area') {
    queryName = '地域';
  } else if (queryKey === 'influence') {
    queryName = '勢力';
  } else if (queryKey === 'person') {
    queryName = '人物';
  } else if (queryKey === 'reference') {
    queryName = '出典';
  } else if (queryKey === 'url') {
    queryName = 'url';
  } else if (queryKey === 'tenNou') {
    queryName = '天皇';
  } else if (queryKey === 'kanpaku') {
    queryName = '関白';
  } else if (queryKey === 'syogun') {
    queryName = '将軍';
  } else if (queryKey === 'kanrei') {
    queryName = '管領';
  } else if (queryKey === 'kantoKubo') {
    queryName = '関東公方';
  } else if (queryKey === 'kantoKanrei') {
    queryName = '関東管領';
  } else if (queryKey === 'page') {
    queryName = 'ページ';
  } else {
    queryName = queryKey;
  }

  return queryName;
}

export { getQueryName };