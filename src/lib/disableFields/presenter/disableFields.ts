'use strict';

import { FieldToDisableDeveropper, FieldToDisableGeneralUser } from "../index";
import { UserPremission } from "../../api/index";

export async function DisableField(record: eventRecord){

    // ログインユーザーのkintone利用権限
    const userPermission = await UserPremission();

    let disableList: fieldType[] = FieldToDisableGeneralUser(record);

    // 開発者への規制
    if(userPermission.includes('開発')) disableList = FieldToDisableDeveropper(record);

    for(let i = 0; i < disableList.length; i++){
        disableList[i].disabled = true;
    }

    return;
}