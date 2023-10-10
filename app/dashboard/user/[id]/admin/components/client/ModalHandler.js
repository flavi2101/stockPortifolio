"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export default function ModalHandler({
  isOpen,
  onClose,
  user,
  route,
  children,
  role,
  trigger,
}) {
  async function ChangeRole() {
    try {
      await fetch(`/api/users?id=${user.id}&role=${role}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      onClose();
      route.refresh();
    } catch (error) {
      console.log(error.message);
    }
  }

  async function deleteuser() {
    try {
      await fetch(`/api/users?id=${user.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      onClose();
      route.refresh();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Informaçoes do usuario
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() =>
                    trigger === true ? ChangeRole() : deleteuser()
                  }
                >
                  Salvar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
