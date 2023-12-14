import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "shared/ui/Page/Page";

const SecondPage = () => {
  const { t } = useTranslation("second");

  return <Page>{t("Второстепенная страница")}</Page>;
};

export default SecondPage;
