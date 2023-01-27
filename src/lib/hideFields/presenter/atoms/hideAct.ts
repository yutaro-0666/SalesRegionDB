'use strict';

import { CheckMode } from "../../../../../MyFactoryUsedKintone/src/index";

export function HideAct(list: string[]){

    const checkMode = new CheckMode();
    const device = checkMode.Device()

    if(device.pc){
        for(let i = 0; i < list.length; i++){
            kintone.app.record.setFieldShown(list[i], false);
        }
    }else if(device.mobile){
        for(let i = 0; i < list.length; i++){
            kintone.mobile.app.record.setFieldShown(list[i], false);
        }
    }

    return;
}