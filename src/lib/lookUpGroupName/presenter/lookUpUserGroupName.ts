'use strict';

import { UserGroupName } from "../../api/index";

/**
 * ログインユーザーの所属グループ名を団体名フィールドに出力し自動的にルックアップする
 */
export async function LookUpUserGroupName(record: eventRecord){
    record.団体名.value = await UserGroupName();
    record.団体名.lookup = true;
    return;
}