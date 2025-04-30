import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

export const getOrCreateUniqueUserId = () => {
  let userId = Cookies.get("user_unique_id");

  if (!userId) {
    userId = localStorage.getItem("unique_user_id");

    if (!userId) {
      userId = uuidv4();
      localStorage.setItem("unique_user_id", userId);
    }

    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 10);

    Cookies.set("user_unique_id", userId, { expires: expiryDate });
  }

  return userId;
};
