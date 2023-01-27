'use strict';

/**
 * ユニークIDを生成する
 * getUniqueStr:https://qiita.com/coa00/items/679b0b5c7c468698d53f
 */
export function CreateNewId(){
    return {
        営業地域ID: `SR${getUniqueStr()}`,
    }
}

// ユニークな文字列を生成
function getUniqueStr(myStrong?: number): string {
    let strong = 1000;
    if (myStrong) strong = myStrong;
    return (
      new Date().getTime().toString(16) +
      Math.floor(strong * Math.random()).toString(16)
    );
}