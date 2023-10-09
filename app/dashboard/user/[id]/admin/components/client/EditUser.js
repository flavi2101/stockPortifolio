"use client";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import ModalHandler from "./ModalEditAsset";
import { useDisclosure } from "@nextui-org/react";

export default function EditUser() {
  let [editModal, setEditModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function editHandler() {
    setEditModal(true);
    onOpen();
  }

  return (
    <ul>
      <li key={1}>
        <button onClick={() => editHandler()}>
          <EditIcon color="success" />
        </button>
      </li>
      <li key={2}>
        <DeleteIcon color="error" />
      </li>
      {editModal && <ModalHandler isOpen={isOpen} onClose={onClose} />}
    </ul>
  );
}
