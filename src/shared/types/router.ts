import { RouteProps } from "react-router-dom";
// eslint-disable-next-line d4rg1-fsd-plugin/layer-imports
import { UserRole } from "@/entities/User";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
