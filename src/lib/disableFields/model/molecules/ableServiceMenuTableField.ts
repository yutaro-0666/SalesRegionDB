'use strict';

/**
 * 入力制御する実施中のサービステーブルのフィールドリスト
 */
export function AbleServiceMenuFieldToDisable(record: eventRecord){
    const trgTable = record.実施中のサービスメニュー.value;

    // 一般ユーザー向け
    let disableList: fieldType[] = [];
    for(let i = 0; i < trgTable.length; i++){
        let row = trgTable[i].value;
        disableList.push(row.サービスメニューID, row.サービスメニュー名);
    }

    return disableList;
}