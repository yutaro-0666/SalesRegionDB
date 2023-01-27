'use strict';

/**
 * 開発者以外は非表示にするフィールドリスト
 */
export function FieldsToGeneralUser(){
    let hideList: string[] = ['団体ID','営業地域ID', 'レコード情報'];
    return hideList;
}