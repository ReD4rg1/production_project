import { Page } from "widgets/Page/Page";
import { EditableProfileCard } from "features/editableProfileCard";
import { useParams } from "react-router-dom";
import { VStack } from "shared/ui/Stack";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <VStack gap={"16"} max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
