"use client";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import ModalHandler from "./ModalHandler";
import { useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import EditRole from "./modalChildRole";
import DeleteUser from "./ModalChildDelete";

export default function EditUser({ user }) {
  let [openEditModal, setOpenEditModal] = useState(false);
  let [opeonDeleteModal, setopeonDeleteModal] = useState(false);

  let [role, setRole] = useState("");
  let [triggerEditOrDelete, setTriggerEditOrDelete] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  let router = useRouter();

  function editHandler() {
    setOpenEditModal(true);
    onOpen();
    setTriggerEditOrDelete(true);
  }

  function deleteHandler() {
    setopeonDeleteModal(true);
    onOpen();
    setTriggerEditOrDelete(false);
  }

  return (
    <ul>
      <li key={1}>
        <button onClick={() => editHandler()}>
          <EditIcon color="success" />
        </button>
      </li>

      {openEditModal && (
        <ModalHandler
          isOpen={isOpen}
          onClose={onClose}
          user={user}
          route={router}
          role={role}
          trigger={triggerEditOrDelete}
        >
          <EditRole role={role} setRole={setRole} />
        </ModalHandler>
      )}

      <li key={2}>
        <button onClick={() => deleteHandler()}>
          <DeleteIcon color="error" />
        </button>
      </li>

      {opeonDeleteModal && (
        <ModalHandler
          isOpen={isOpen}
          onClose={onClose}
          user={user}
          route={router}
          trigger={triggerEditOrDelete}
        >
          <DeleteUser />
        </ModalHandler>
      )}
    </ul>
  );
}
