'use stirict';

import { AbleServiceMenuFieldToDisable } from "../../index";

/**
 * 開発者を対象に入力制御するフィールドリスト
 */
export function FieldToDisableDeveropper(record: eventRecord){

    let disablList: fieldType[] = [record.団体ID, record.営業地域ID, record.ShowFlag];

    // 実施中のサービスメニューテーブルの入力制御ストを追加
    disablList = disablList.concat(AbleServiceMenuFieldToDisable(record))
    
    return disablList;
}