import { Select } from "shared/ui/Select/Select";
import { Currency } from "../../model/types/currency";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.KZT, content: Currency.KZT },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation("profile");

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Select
      className={className}
      value={value}
      label={t("Валюта")}
      options={options}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
