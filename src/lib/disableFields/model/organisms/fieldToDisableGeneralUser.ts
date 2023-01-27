'use stirict';

import { AbleServiceMenuFieldToDisable } from "../../index";

/**
 * 一般ユーザーを対象に入力制御するフィールドリスト
 */
export function FieldToDisableGeneralUser(record: eventRecord){

    let disablList: fieldType[] = [record.団体名, record.団体ID, record.営業地域ID, record.ShowFlag];

    // 料金プランテーブルの入力制御ストを追加
    disablList = disablList.concat(AbleServiceMenuFieldToDisable(record))
    
    return disablList;
}