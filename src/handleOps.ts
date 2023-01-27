'use strict';

import { SetShowEventFlag, DuringShowEvent, UnsetShowEventFlag} from "./lib/showEventFlag/flagOps";
import { InputSalesRegionId } from "./lib/uniquId/index";
import { InputToAbleServiceMenuTable, AddAbleServiceMenuTable } from "./lib/ableServiceMenuTable/index";
import { LookUpUserGroupName } from "./lib/lookUpGroupName/index";
import { InitAbleServiceMenuButton, AlertableServiceMenuButton } from "./lib/renewTableButton/index";
import { DisableField } from "./lib/disableFields/index";
import { HideFields } from "./lib/hideFields/index";

export async function CreateShow(eventHandle: eventHandleCreateShow){
    kintone.events.on(eventHandle, async (event: kintoneEvent)=> {

        // showEvent中であることを示すflagを立てる
        SetShowEventFlag(event.record);
        // サービスメニューIDを新規に生成してフィールドに反映する
        InputSalesRegionId(event.record);
        // グループ名を取得する
        await LookUpUserGroupName(event.record);
        // 最新のサービス内容リストを取得して、実施可能なサービス内容テーブルに出力する 
        await InputToAbleServiceMenuTable(event.record);
        // 開発者向けのボタンを生成する
        await InitAbleServiceMenuButton();
        // // 指定したフィールドに入力制御をする
        await DisableField(event.record);
        // // 指定したフィールドを非表示にする
        HideFields();
        return event;
    });
}

export function EndCreateShowEvent(eventHandle: EventHandleChangeShowFlag){
    kintone.events.on(eventHandle, (event: kintoneEvent)=> {

        setTimeout(()=> {
            // showFlagの回収
            UnsetShowEventFlag(event.record);
        },2000)
        
        return event;
    });
}

export async function EditShow(eventHandle: eventHandleEditShow){
    kintone.events.on(eventHandle, async (event: kintoneEvent)=> {

        // 実施中のサービステーブルに新規のサービスメニューを追加する
        await AddAbleServiceMenuTable(event.record);
        // // 指定したフィールドに入力制御をする
        await DisableField(event.record);
        // // 指定したフィールドを非表示にする
        HideFields();
        return event;
    });
}

export function DetailShow(eventHandle: eventHandleDetailShow){
    kintone.events.on(eventHandle, (event: kintoneEvent)=> {

        // // 指定したフィールドを非表示にする
        HideFields();
        return event;
    });
}



export function CreateChangeGroup(eventHandle: eventHandleCreateChangeGroupId){
    kintone.events.on(eventHandle, (event: kintoneEvent)=> {

        // showEvent中はスキップ
        if(DuringShowEvent()) return;

        // 開発者向けのボタンをアラートモードにする
        AlertableServiceMenuButton();
        return event;
    });
}