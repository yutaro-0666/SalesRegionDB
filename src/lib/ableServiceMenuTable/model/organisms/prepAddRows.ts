'use strict';

import { NewServiceMenuDB } from "../atoms/newServiceMenuDB";

/**
 * 実施可能なサービス内容テーブルに入力するテーブルの中身を作成する
 */
export async function PrepAddTbaleServiceMenuDB(record: eventRecord){
    const newServiceMenuDB = await NewServiceMenuDB(record);
    let inputTable: ableServiceMenuTableRow[] = [];

    // サービスメニューDBから取得したデータからテーブルの中身を作成
    for(let i = 0; i < newServiceMenuDB.length; i++){
        let respRecord = newServiceMenuDB[i];
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