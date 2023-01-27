'use strict';

import { AppId } from "./appId";

/**
 * ログインユーザーが所属する団体名を取得する
 */
export async function UserGroupName(): Promise<string>{
    try{
        const userGroupId = await UserGroupId();
        const getBody = {
            app: AppId().groupDBAppId,
            query: `団体ID = "${userGroupId}"`,
            fields: ['団体名']
        }

        const resp = await kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', getBody);
        return resp.records[0].団体名.value;
    }catch(error){
        let ersag = JSON.stringify(error);
        if(ersag === '{}') ersag += error;
        console.log(`UserGroupName()中のエラー: ${ersag}`);
        return 'null';
    }
}

/**
 * ログインユーザーが所属する団体IDを取得する
 */
export async function UserGroupId(): Promise<string>{
    try{
        const user = kintone.getLoginUser();
        const getBody = {
            app: AppId().userDBAppId,
            query: `ログインID = "${user.id}"`,
            fields: ['団体ID']
        }

        const resp = await kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', getBody);
        return resp.records[0].団体ID.value;
    }catch(error){
        let ersag = JSON.stringify(error);
        if(ersag === '{}') ersag += error;
        console.log(`UserGroupId()中のエラー: ${ersag}`);
        return 'null';
    }
}