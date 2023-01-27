'use strict';

import { GetKintoneRecords, GetParams } from "../../../../MyFactoryUsedKintone/src/index";
import { AppId, UserGroupId } from "../index";

/**
 * サービス内容DBAppからレコードを取得する
 */
export async function GetRecordsFromServiceMenuDB(record: eventRecord){
    try{
        const appid = AppId().serviceMenuAppId;

        const parmas: GetParams = {
            appId: appid,
            filterQuery: await QueryForServiceMenu(record),
            sortQuery: ['レコード番号 desc'],
            fields: ['サービスメニューID', 'サービスメニュー名']
        }

        const getOps = new GetKintoneRecords(appid, parmas);
        const respRecords:respServiceMenuDBRecord[] | undefined =  await getOps.Action();

        if(!respRecords) return [];
        return respRecords;
    }catch(error){
        let ersag = JSON.stringify(error);
        if(ersag === '{}') ersag += error;
        console.log(`GetRecordsFromServiceMenuDB()中のエラー: ${ersag}`);
        return[];
    }
}

const QueryForServiceMenu = async (record: eventRecord) => {
    let query: string;

    // 団体IDフィールドにIDが入っていない場合(=showCreateEvent時)はログインユーザーの団体IDを参照
    query = `団体ID = "${await UserGroupId()}"`;
    // 団体IDフィールドにIDが出力済みの場合、それを参照
    const exsisting = record.団体ID.value
    if(exsisting) query = `団体ID = "${exsisting}"`;

    return query;
}