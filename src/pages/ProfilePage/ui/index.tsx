import { Page } from "widgets/Page/Page";
import { EditableProfileCard } from "features/editableProfileCard";
import { useParams } from "react-router-dom";
import { VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  if (!id) {
    return (
      <VStack max justify={"center"} align={"center"}>
        <Text text={t("Произошла непредвиденная ошибка")} />
      </VStack>
    );
  }

  return (
    <Page>
      <VStack gap={"16"} max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
