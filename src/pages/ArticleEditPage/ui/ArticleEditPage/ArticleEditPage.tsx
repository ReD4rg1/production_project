import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleEditPage.module.scss";
import { memo } from "react";
import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.wrapper, {}, [className])}>
      {`ArticleEditPage id: ${id}`}
    </Page>
  );
});

export default ArticleEditPage;
