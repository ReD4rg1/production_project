import { Country } from "../../model/types/country";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ListBox } from "@/shared/ui/deprecated/Popups";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation("profile");

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <ListBox
      className={className}
      value={value}
      items={options}
      onChange={onChangeHandler}
      defaultValue={t("Укажите страну")}
      label={t("Страна")}
      readonly={readonly}
      direction={"top right"}
    />
  );
});
