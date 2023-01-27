declare namespace salsesRegionDB.types {
  interface Fields {
    団体ID: kintone.fieldTypes.SingleLineText;
    町丁: kintone.fieldTypes.SingleLineText;
    市区町村: kintone.fieldTypes.SingleLineText;
    団体名: kintone.fieldTypes.SingleLineText;
    営業地域ID: kintone.fieldTypes.SingleLineText;
    稼働状況: kintone.fieldTypes.DropDown;
    都道府県: kintone.fieldTypes.SingleLineText;
    担当組織: kintone.fieldTypes.OrganizationSelect;
    管理組織: kintone.fieldTypes.OrganizationSelect;
    実施中のサービスメニュー: {
      type: "SUBTABLE";
      value: Array<{
        id?: string;
        value: {
          サービスメニュー名: kintone.fieldTypes.SingleLineText;
          サービスメニューID: kintone.fieldTypes.SingleLineText;
          サービスメニュー実施可否: kintone.fieldTypes.CheckBox;
        };
      }>;
    };
    ShowFlag: kintone.fieldTypes.SingleLineText;
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
