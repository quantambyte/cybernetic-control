import React, { Fragment, useState } from "react";
import { User } from "../../types";
import { useUser } from "../../hooks/useUser";
import Modal from "../ui/Modal";
import UserDetail from "../UserDetail";

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const { handleSelectUser } = useUser();
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <Fragment>
      <div
        className="bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group"
        onClick={() => handleSelectUser(user)}
      >
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Company:</strong> {user.company.name}
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-b-lg">
          <button
            onClick={openModal}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
      {open && (
        <Modal onClose={closeModal}>
          <UserDetail {...user} />
        </Modal>
      )}
    </Fragment>
  );
};

export default UserItem;
