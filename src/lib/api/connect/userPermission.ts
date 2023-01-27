'use strict';

import { AppId } from "./appId";

/**
 * ユーザーDBの登録情報をもとに得たユーザーのkintone利用権限
 */
export async function UserPremission(): Promise<string[]>{
    try{
        const user = kintone.getLoginUser();
        const getBody = {
            app: AppId().userDBAppId,
            query: `ログインID = "${user.id}"`,
            fields: ['権限ステータス']
        }

        const resp = await kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', getBody);
        return resp.records[0].権限ステータス.value;
    }catch(error){
        let ersag = JSON.stringify(error);
        if(ersag === '{}') ersag += error;
        console.log(`UserPremission()中のエラー: ${ersag}`);
        return [];
    }
}