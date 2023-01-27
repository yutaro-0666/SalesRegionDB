'use strict';

import { AlertDesign, OnClickRenewTableButton, InitAbleServiceMenuButton } from "../../index";

/**
 * renewTableスペース上にボタンを生成する
 */
export function AlertableServiceMenuButton(){
    const button = document.createElement('button');
    button.id = 'renewTable';

    // ボタンにデザインを付ける
    AlertDesign(button);
    // ボタンにクリック機能をつける
    button.addEventListener('click', async () => {
        // テーブルを更新する
        await OnClickRenewTableButton();
        // ボタンを初期化する
        await InitAbleServiceMenuButton();
    });

    const spaceElement = kintone.app.record.getSpaceElement('renewTable') as HTMLElement;
    // 既存のdomを取り除いてから適用する
    if(spaceElement.firstChild) spaceElement.removeChild(spaceElement.firstChild);
    spaceElement.appendChild(button);
}