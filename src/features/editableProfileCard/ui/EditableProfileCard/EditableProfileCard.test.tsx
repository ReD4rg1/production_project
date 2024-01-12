import { screen } from "@testing-library/react";
import {
  componentRender,
  componentRenderOptions,
} from "@/shared/lib/tests/componentRender/componentRender";
import { EditableProfileCard } from "./EditableProfileCard";
import { Profile } from "@/entities/Profile";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import { userEvent } from "@testing-library/user-event";
import { $api } from "@/shared/api/api";

const profile: Profile = {
  id: "1",
  first: "Kira",
  lastname: "admin",
  age: 22,
  currency: Currency.KZT,
  country: Country.Kazakhstan,
  city: "Oskemen",
  username: "d4rg1",
  avatar:
    "https://i.kym-cdn.com/entries/icons/original/000/042/690/Screen_Shot_2022-11-16_at_2.24.03_PM.jpg",
};

const options: componentRenderOptions = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: "1",
      },
    },
  },
  asyncReducers: { profile: profileReducer },
};

describe("features/EditableProfileCard", () => {
  test("Enable edit mode", async () => {
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    ).toBeInTheDocument();
  });

  test("Change inputs' values and disable edit mode", async () => {
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));
    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");
    await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user");
    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user");
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    );
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("admin");
  });

  test("Expect error", async () => {
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );
    expect(
      screen.getByTestId("EditableProfileCard.Error.Paragraph")
    ).toBeInTheDocument();
  });

  test("No error expect and save changes", async () => {
    const mockPutReq = jest.spyOn($api, "put");
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );
    expect(mockPutReq).toHaveBeenCalled();
  });
});
