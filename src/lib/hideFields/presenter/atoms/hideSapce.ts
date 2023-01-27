'use strict';

/**
 * 任意のスペースフィールドを非表示にする
 */
export function HideSpace(spaceId: string){
    const spaceField: any = kintone.app.record.getSpaceElement(spaceId);
    spaceField.parentNode.parentNode.style.display = 'none';
}