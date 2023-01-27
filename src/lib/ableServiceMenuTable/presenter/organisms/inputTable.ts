'use strict';

import { PrepInputTbaleServiceMenuDB } from "../../index";

/**
 * 最新のサービスメニューリストを取得して、実施中のサービステーブルに出力する
 * @param record
 */
export async function InputToAbleServiceMenuTable(record: eventRecord){
    const inputData = await PrepInputTbaleServiceMenuDB(record);
    record.実施中のサービスメニュー.value = inputData;
    return;
}