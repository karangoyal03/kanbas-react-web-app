import React ,{useState} from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BsPlus } from 'react-icons/bs';
import GreenCheckmark from './GreenCheckmark';
import { FaTrash } from "react-icons/fa";
import DeleteModal from "./DeleteModal"

export default function ModuleControlChecks({ assignmentId, deleteAssignment}: { assignmentId: string; deleteAssignment: (assignmentId: string) => void }) {
  
  const handleTrashClick = () => {
    console.log("Trash clicked");
  };
  return (
    <div className="float-end">
<FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#deleteConfirmationModal" />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      {
        <DeleteModal
          assignmentId = {assignmentId}
         deleteAssignment ={deleteAssignment}
        />
      }
    </div>
  );
}