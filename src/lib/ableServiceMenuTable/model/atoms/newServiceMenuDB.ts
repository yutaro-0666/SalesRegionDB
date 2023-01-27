'use strict';

import { GetRecordsFromServiceMenuDB } from "../../../api/serviceMenuDB/getRecords";
import { ExistServiceMenuIds } from "./existServiceMenuIds";

/**
 * サービスメニューデータから、実施中のサービステーブルに既に存在しているサービスメニューを除きリストに格納する
 */
export async function NewServiceMenuDB(record: eventRecord){
    // 団体情報に紐づくサービスメニューデータを取得
    const serviceMenuDB = await GetRecordsFromServiceMenuDB(record);
    // 実施中のサービスメニューテーブルに含むサービスメニューIDリスト
    const existServiceMenuIds = ExistServiceMenuIds(record);
    let resalt: respServiceMenuDBRecord[] = [];

    for(let i = 0; i < serviceMenuDB.length; i++){
        let trg = serviceMenuDB[i];
        let trgId = trg.サービスメニューID.value;

        // 既存のテーブルにIDを含んでいない場合は、リターンするリストに追加
        if(!existServiceMenuIds.includes(trgId)) resalt.push(trg);
    }

    return resalt;
}