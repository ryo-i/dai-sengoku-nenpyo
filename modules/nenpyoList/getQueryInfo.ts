import { getQueryName } from './getQueryName';


// Get Query Info
const getQueryInfo = (queryParam) => {
    let queryInfoText: string = '';
    let queryParamObject = {};

    if (!Object.keys(queryParam).length) {
        return queryInfoText;
    } else {
        for (const property in queryParam) {
            const queryName = getQueryName(property);
            queryParamObject[queryName] = queryParam[property];
        }

        delete queryParamObject["カテゴリー"];
        delete queryParamObject["ページ"];
        // console.log('queryParamObject', queryParamObject);

        queryInfoText = Object.entries(queryParamObject).map( x => x.join(": ")).join(", ");
        return queryInfoText;
    }
};

export { getQueryInfo };