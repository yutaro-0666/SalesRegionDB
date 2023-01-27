'use strict';

import { CheckMode } from "../../../../MyFactoryUsedKintone/src/index";

/**
 * 関数実行時点のrecordオブジェクトを取得,
 * kintoneEvent内では使用不可(kintoneの使用),
 * →必然的に、domで生成したボタン操作をトリガーとする関数でのみ使用する
 * ※domで生成したボタン操作では、kintoneEventを使用できない。
 * @returns record
 */
export async function GetCurrentRecord(){
    const device = new CheckMode().Device().select;
    let currentEvent: kintoneEvent | null = null;

    switch(device){
        case 'pc':
            currentEvent = await kintone.app.record.get();
            break;
        
        case 'mobile':
            currentEvent = await kintone.mobile.app.record.get();
            break;
    }

    if(!currentEvent) return {} as eventRecord;
    return currentEvent.record;
}

/**
 * 関数実行完了時点のrecordオブジェクトをkintoneのレコードにセットする,
 * kintoneEvent内では使用不可(kintoneの使用),
 * →必然的に、domで生成したボタン操作をトリガーとする関数でのみ使用する
 * ※domで生成したボタン操作では、kintoneEventを使用できない。
 * @returns record
 */
export async function SetCurrentRecord(record: eventRecord){

    // recordオブジェクトをオブジェクト内に格納して渡す必要がある
    const wrappedRecord = {record}
    const device = new CheckMode().Device().select;

    switch(device){
        case 'pc':
            kintone.app.record.set(wrappedRecord);
            break;
        
        case 'mobile':
            kintone.mobile.app.record.set(wrappedRecord);
            break;
    }
}