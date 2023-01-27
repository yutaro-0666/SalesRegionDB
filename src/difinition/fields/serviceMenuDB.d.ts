declare namespace serviceMenuDB.types {
  interface Fields {
    備考: kintone.fieldTypes.MultiLineText;
    出張料: kintone.fieldTypes.Number;
    単価: kintone.fieldTypes.Number;
    団体ID: kintone.fieldTypes.SingleLineText;
    作業時間制限: kintone.fieldTypes.Number;
    時間: kintone.fieldTypes.Number;
    定額_定率: kintone.fieldTypes.RadioButton;
    サービスメニューID: kintone.fieldTypes.SingleLineText;
    _1時間あたりの担い手報酬: kintone.fieldTypes.Number;
    提供開始日: kintone.fieldTypes.Date;
    団体名: kintone.fieldTypes.SingleLineText;
    提供終了日: kintone.fieldTypes.Date;
    サービスメニュー名: kintone.fieldTypes.SingleLineText;
    担当_組織: kintone.fieldTypes.OrganizationSelect;
    管理_組織: kintone.fieldTypes.OrganizationSelect;
    実施可能なサービス内容: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          サービス内容ID: kintone.fieldTypes.SingleLineText;
          サービス内容名: kintone.fieldTypes.SingleLineText;
          サービス内容実施可否: kintone.fieldTypes.CheckBox;
        };
      }>;
    };
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
