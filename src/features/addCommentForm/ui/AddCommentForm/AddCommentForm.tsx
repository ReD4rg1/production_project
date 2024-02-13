import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AddCommentForm.module.scss";
import React, { memo, useCallback } from "react";
import { Input } from "@/shared/ui/Input";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useSelector } from "react-redux";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slice/addCommentFormSlice";
import {
  DynamicModuleLoader,
  ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);
  const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
  };

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onCommentTextChange("");
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div
        data-testid="AddCommentForm"
        className={classNames(cls.wrapper, {}, [className])}
      >
        <Input
          data-testid="AddCommentForm.Input"
          placeholder={t("Введите текст комментария")}
          value={text}
          onChange={onCommentTextChange}
          className={cls.input}
        />
        <Button
          data-testid="AddCommentForm.Button"
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t("Отправить")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
