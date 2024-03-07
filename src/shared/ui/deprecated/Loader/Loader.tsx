import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}
/**
 * @deprecated
 * */
export const Loader = (props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ldsDefault, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};