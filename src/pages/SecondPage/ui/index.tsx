import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const SecondPage = () => {
  const { t } = useTranslation("second");

  return <Page data-testid={"SecondPage"}>{t("Второстепенная страница")}</Page>;
};

export default SecondPage;
