'use strict';

import { InputToAbleServiceMenuTable } from "../../../ableServiceMenuTable/index";
import { DisableOnlyAbleServiceMenuTable } from "../../../disableFields/index";
import { SetCurrentRecord, GetCurrentRecord} from "../../../api/index";

/**
 * テーブル更新ボタンで関数を実行する
 */
export async function OnClickRenewTableButton(){
    const record: eventRecord = await GetCurrentRecord();

    // 実行中のサービスメニューテーブルを取得済みの団体に併せて変更する
    await InputToAbleServiceMenuTable(record);
    // 更新されたサービスメニューテーブルの入力制御を更新する
    DisableOnlyAbleServiceMenuTable(record);

    await SetCurrentRecord(record);
    return;
}