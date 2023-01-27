// ~~営業地域DB~~
interface kintoneEvent {
    record: eventRecord;
}

type eventRecord = salsesRegionDB.types.SavedFields;

/**
 * 実施中のサービスメニューテーブル
 */
type ableServiceMenuTable = ableServiceMenuTableRow[];

interface ableServiceMenuTableRow {
    id?: string;
    value: {
        サービスメニューID: kintone.fieldTypes.SingleLineText;
        サービスメニュー名: kintone.fieldTypes.SingleLineText;
        サービスメニュー実施可否: kintone.fieldTypes.CheckBox;
    };
}

// フィールド(event.record.フィールドコード)の型
type fieldType = kintone.fieldTypes.SingleLineText | kintone.fieldTypes.Number | kintone.fieldTypes.MultiLineText |
                 kintone.fieldTypes.DropDown | kintone.fieldTypes.Date | kintone.fieldTypes.CheckBox | 
                 kintone.fieldTypes.Time | kintone.fieldTypes.OrganizationSelect | kintone.fieldTypes.RadioButton |
                 kintone.fieldTypes.UserSelect;



// ~~サービスメニューDB~~

interface respServiceMenuDB {
    records: respServiceMenuDBRecord[];
}

type respServiceMenuDBRecord = serviceMenuDB.types.SavedFields;