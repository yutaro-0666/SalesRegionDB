'use strict';

export function initDesign(button: HTMLButtonElement){

    button.className = 'button-simple-cybozu geo-search-btn';
    button.innerHTML = 'テーブル更新ボタン (開発者のみ表示)'
    button.style.marginTop = '40px'; 
    button.style.marginLeft = '15px';
    button.style.backgroundColor = '#a9a9a9';
    button.style.color = 'white';
    button.style.fontWeight = 'bold';
}