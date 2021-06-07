import { instanceUM } from "./configureAxios";
import formurlencoded from "form-urlencoded";

export const login = (email, password) => {
  const data = formurlencoded({ username: email, password });
  return instanceUM.post("/login", data);
};

export const logout = () => {
  return instanceUM.get("/logout");
};

export const changePassword = ({ currentPassword, newPassword }) => {
  const data = formurlencoded({ currentPassword, newPassword });
  return instanceUM.post("/user/changePassword", data);
};
