import { getQueryName } from './getQueryName';


const waPropertyArray = ['年(和暦)', '年単位(和暦)', '月(和暦)', '月単位(和暦)', '日(和暦)', '日単位(和暦)'];
const adPropertyArray = ['年(西暦)', '年単位(西暦)', '月(西暦)', '月単位(西暦)', '日(西暦)', '日単位(西暦)'];


// Get Param Date
const getParamDate = (queryParamObject, propertyArray) => {
    let resultArray = [];
    let resultText = '';

    for (let i = 0; i < propertyArray.length; i++) {
        if (queryParamObject[propertyArray[i]]) {
            resultArray.push(queryParamObject[propertyArray[i]]);
        }
    }

    resultText = resultArray.join('');
    console.log('resultText', resultText);
    return resultText;
};


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

        const isWaDate = (
            queryParamObject['年(和暦)'] ||
            queryParamObject['年単位(和暦)'] ||
            queryParamObject['月(和暦)'] ||
            queryParamObject['月単位(和暦)'] ||
            queryParamObject['日(和暦)'] ||
            queryParamObject['日単位(和暦)']
        );
        const isAdDate = (
            queryParamObject['年(西暦)'] ||
            queryParamObject['年単位(西暦)'] ||
            queryParamObject['月(西暦)'] ||
            queryParamObject['月単位(西暦)'] ||
            queryParamObject['日(西暦)'] ||
            queryParamObject['日単位(西暦)']
        );
        const isCategory = queryParamObject['カテゴリー'];
        const isPage = queryParamObject['ページ'];

        if (isWaDate) {
            const waParamDate = getParamDate(queryParamObject, waPropertyArray);
            queryParamObject['年月日(和暦)'] = waParamDate;
            delete queryParamObject['年(和暦)'];
            delete queryParamObject['年単位(和暦)'];
            delete queryParamObject['月(和暦)'];
            delete queryParamObject['月単位(和暦)'];
            delete queryParamObject['日(和暦)'];
            delete queryParamObject['日単位(和暦)'];
        }
        if (isAdDate) {
            const adParamDate = getParamDate(queryParamObject, adPropertyArray);
            queryParamObject['年月日(西暦)'] = adParamDate;
            delete queryParamObject['年(西暦)'];
            delete queryParamObject['年単位(西暦)'];
            delete queryParamObject['月(西暦)'];
            delete queryParamObject['月単位(西暦)'];
            delete queryParamObject['日(西暦)'];
            delete queryParamObject['日単位(西暦)'];
        }
        if (isCategory) {
            delete queryParamObject['カテゴリー'];
        }
        if (isPage) {
            delete queryParamObject['ページ'];
        }

        queryInfoText = Object.entries(queryParamObject).map( x => x.join(": ")).join(", ");
        return queryInfoText;
    }
};

export { getQueryInfo };