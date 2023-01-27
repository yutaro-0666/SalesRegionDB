'use strict';

import { PrepAddTbaleServiceMenuDB } from "../../index";

/**
 * 最新のサービスメニューリストを取得して、IDがすでに存在していないメニューのみを新規に追加する
 * @param record
 */
export async function AddAbleServiceMenuTable(record: eventRecord){

    // 既存のテーブル行
    const exsistingList = record.実施中のサービスメニュー.value
    // 追加するテーブル行
    const addList = await PrepAddTbaleServiceMenuDB(record);

    record.実施中のサービスメニュー.value = exsistingList.concat(addList);
    return;
}