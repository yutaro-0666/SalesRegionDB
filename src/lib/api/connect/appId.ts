'use strict';

/**
 * 環境に応じてAppIdを指定する
 */
export function AppId(){

    let salesRegionId = kintone.app.getId();
    if(!salesRegionId) salesRegionId = kintone.mobile.app.getId()

    // サービス分類2アプリ
    let serviceMenuAppId = null;
    // ユーザーDB
    let userDBAppId = null;
    // 団体DB
    let groupDBAppId = null


    if(salesRegionId === 0){
        // prod
        serviceMenuAppId = 0;
        userDBAppId = 0;
        groupDBAppId = 0;

    }else{
        // demo
        serviceMenuAppId = 183;
        userDBAppId = 192;
        groupDBAppId = 193;
    } 

    return {
        salesRegionId,
        serviceMenuAppId,
        userDBAppId,
        groupDBAppId
    }
}