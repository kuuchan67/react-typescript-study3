import { memo, VFC } from "react";

import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody as="nav" p={0} bg="gray.100">
            <Button w="100%">Home</Button>
            <Button w="100%">ユーザ一覧</Button>
            <Button w="100%">設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
