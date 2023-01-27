'use strict';

import { AbleServiceMenuFieldToDisable } from "../index";

/**
 * 実施中のサービスメニューテーブルのみ全ユーザーに入力制限を適用する
 */
export function DisableOnlyAbleServiceMenuTable(record: eventRecord){

    // 実施中のサービスメニューテーブルのみ全ユーザーに入力制限を適用
    const disableList = AbleServiceMenuFieldToDisable(record);

    for(let i = 0; i < disableList.length; i++){
        disableList[i].disabled = true;
    }

    return;
}