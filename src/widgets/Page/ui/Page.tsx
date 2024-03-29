import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Page.module.scss";
import { MutableRefObject, ReactNode, useRef, UIEvent } from "react";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getScrollSaveByPath, scrollSaveActions } from "@/features/scrollSave";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { StateSchema } from "@/app/providers/StoreProvider";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";
import { TestProps } from "@/shared/types/tests";

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollSaveByPath(state, pathname)
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      })
    );
  }, 100);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.wrapper, {}, [className])}
      onScroll={onScroll}
      data-testid={props["data-testid"]}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
