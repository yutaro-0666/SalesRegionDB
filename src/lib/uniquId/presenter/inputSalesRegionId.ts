'use strict';

import { CreateNewId } from "../index";

/**
 * サービスメニューIDを新規に生成してフィールドに反映する
 */
export function InputSalesRegionId(record: eventRecord){
    record.営業地域ID.value = CreateNewId().営業地域ID;
    return;
}