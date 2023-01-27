'use strict';

const showFlagTexts = ['true', 'false'] as const;
type ShowFlagText = typeof showFlagTexts[number];

/* ShowEvent中のField変更は、ShowEent完了後にしか参照できない。
 * →domを一時的に変更し、参照する。
 * →domを変更するためのトリガーとして、showflagフィールドの変更(app.record.change.ShowFlag)を利用する
 * 実際の流れ
 * ①showEvent <SetShowEventFlag()>
 * ②dom操作ShowFlag建てる
 * ③フィールド操作ShoFlag建てる
 * -------
 * ここの間のchangeフィールドイベント実行可否は、dom(②)を参照する <DuringShowEvent>
 * -------
 * ④changeShowFlagEvent <UnsetShowEventFlag>
 * ⑤dom操作ShowFlag回収
 * ⑥フィールド操作ShowFlag回収
 */

/**
 * ShowEvent中であることを示し、他のトリガーの暴発を防ぐためのShowFlagを立てる
 */
export function SetShowEventFlag(record: eventRecord){
    const flag = kintone.app.record.getSpaceElement('ShowFlag');
    if(!flag) return;

    const text = document.createTextNode('true');
    flag.appendChild(text);

    // トリガー用のフラグを立てる
    record.ShowFlag.value = 'true';
    return;
}

/**
 * ShowEventFlagの有無を確認する
 * lookupが絡む場合は、setTimeoutで調整(目安2秒くらい)
 */
export function DuringShowEvent(){
    const flag = kintone.app.record.getSpaceElement('ShowFlag');
    if(!flag) return;

    const flagText = flag.textContent as ShowFlagText;
    if(flagText === "true") return true;
    if(flagText === "false") return false;
    return;
}

/**
 * ShowFlagを回収する
 */
export function UnsetShowEventFlag(record: eventRecord){
        const flag = kintone.app.record.getSpaceElement('ShowFlag');
        if(!flag) return;

        const text = flag.firstChild
        if(!text) return
        text.nodeValue = "false";

        // トリガー用のフラグを回収
        record.ShowFlag.value = 'false';
        return;
}