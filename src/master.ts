'use strict';

import * as ops from './handleOps';

( async ()=> {
    // Pc
    // 作成モードで実行
    await ops.CreateShow('app.record.create.show');
    ops.CreateChangeGroup('app.record.create.change.団体ID');
    // showEventの終了
    ops.EndCreateShowEvent('app.record.create.change.ShowFlag');

    // 編集モードで実行
    await ops.EditShow('app.record.edit.show');

    // 詳細閲覧モードで実行
    ops.DetailShow('app.record.detail.show');

})();