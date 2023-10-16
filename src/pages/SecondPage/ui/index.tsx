import React from "react";
import { useTranslation } from "react-i18next";

const SecondPage = () => {
  const { t } = useTranslation("second");

  return <div>{t("Второстепенная страница")}</div>;
};

export default SecondPage;
