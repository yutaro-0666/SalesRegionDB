'use strict';

/**
 * 実施中のサービスメニューテーブルに存在するサービスメニューIDをリストに格納する
 */
export function ExistServiceMenuIds(record: eventRecord){
    const table = record.実施中のサービスメニュー.value;
    let ids: string[] = []

    for(let i = 0; i < table.length; i++){
        let row = table[i].value;
        let id = row.サービスメニューID.value;
        ids.push(id);
    }

    return ids;
}