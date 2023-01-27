'use strict';

import { FieldsToGeneralUser, HideAct, HideSpace} from "../../index";
import { UserPremission } from "../../../api/index";

export async function HideFields(){

    // ログインユーザーのkintone利用権限
    const userPermission = await UserPremission();
    
    // 開発者は全て表示
    if(userPermission.includes('開発')) return;

    // 一般ユーザーは非表示にするフィールド
    let hideList = FieldsToGeneralUser();
    HideAct(hideList);
    HideSpace('renewTable');
    HideSpace('ShowFlag');
    return;
}