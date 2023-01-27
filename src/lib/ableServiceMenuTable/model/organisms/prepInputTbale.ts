'use strict';

import { GetRecordsFromServiceMenuDB } from "../../../api/serviceMenuDB/getRecords"; 

/**
 * 実施可能なサービス内容テーブルに入力するテーブルの中身を作成する
 */
export async function PrepInputTbaleServiceMenuDB(record: eventRecord){
    const respRecords = await GetRecordsFromServiceMenuDB(record);
    let inputTable: ableServiceMenuTableRow[] = [];

    // サービスメニューDBから取得したデータからテーブルの中身を作成
    for(let i = 0; i < respRecords.length; i++){
        let respRecord = respRecords[i];
        let inputRow: ableServiceMenuTableRow = {
            value: {
                サービスメニューID: {
                    type: 'SINGLE_LINE_TEXT',
                    value: respRecord.サービスメニューID.value
                },
                サービスメニュー名: {
                    type: 'SINGLE_LINE_TEXT',
                    value: respRecord.サービスメニュー名.value
                },
                サービスメニュー実施可否: {
                    type: 'CHECK_BOX',
                    value: []
                }
            }
        }

        inputTable.push(inputRow);
    }

    return inputTable;
}