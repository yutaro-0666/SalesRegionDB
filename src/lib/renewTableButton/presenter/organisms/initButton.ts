'use strict';

import { initDesign } from "../../index";

/**
 * renewTableスペース上にボタンを生成する
 */
export async function InitAbleServiceMenuButton(){
    const button = document.createElement('button');
    button.id = 'renewTable';

    // ボタンにデザインを付ける
    initDesign(button);
    // ボタンを非活性化する
    button.disabled = true;

    const spaceElement = kintone.app.record.getSpaceElement('renewTable') as HTMLElement;
    // 既存のdomを取り除いてから適用する
    if(spaceElement.firstChild) spaceElement.removeChild(spaceElement.firstChild);
    spaceElement.appendChild(button);
}