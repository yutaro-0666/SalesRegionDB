'use strict';

export function AlertDesign(button: HTMLButtonElement){

    button.className = 'button-simple-cybozu geo-search-btn';
    button.innerHTML = 'ボタンを押してテーブルを更新してください'
    button.style.marginTop = '40px'; 
    button.style.marginLeft = '15px';
    button.style.backgroundColor = '#ff7f50';
    button.style.color = 'white';
    button.style.fontWeight = 'bold';
}