import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./PageLoader.module.scss";
import { Loader } from "@/shared/ui/deprecated/Loader";
import { Page } from "../../Page";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <Page className={classNames(cls.pageLoader, {}, [className])}>
      <Loader />
    </Page>
  );
};
