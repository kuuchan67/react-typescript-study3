import { useCallback, useState } from "react";
import { useMessage } from "./useMessage";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

export const useSelectUser = () => {
  const { showMessage } = useMessage();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    if (targetUser) {
      setSelectedUser(targetUser);
      onOpen();
    } else {
      showMessage({ title: "ユーザーが見つかりません", status: "error" });
      return;
    }
  }, []);

  return { onSelectUser, selectedUser };
};
