/* eslint-disable react/prop-types */

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setFirstName, setLastName } from "../../features/userReducer";
import { putProfile } from "../../utils/services/callApi";

import Transaction from "../../components/transaction/transaction";

export default function Profile() {
  const { firstName, lastName, token } = useSelector((state) => state.user);
  const dispatch = useDispatch(); 

  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  if (!firstName || !lastName) {
    return <div>Loading...</div>;
  }

  const handleEditName = () => {
    setIsEditing(true);
  };

  const handleSaveName = async () => {
    try {
      const data = { firstName: newFirstName, lastName: newLastName };

      await putProfile(data, token);

      dispatch(setFirstName(newFirstName));
      dispatch(setLastName(newLastName));

      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update profile", error);
    }
  };

  const handleCancelEdit = () => {
    setFirstName(firstName);
    setLastName(lastName);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center bg-dark-bg grow">
      <header className="flex flex-col items-center mb-8">
        <h1 className="my-5 font-bold text-center text-white text-3xlgit a ">
          Welcome back <br />
          {isEditing ? (
            <>
              <input
                type="text"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                className="text-black"
              />
              <input
                type="text"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                className="text-black"
              />
            </>
          ) : (
            <>
              {firstName} {lastName}!
            </>
          )}
        </h1>
        {isEditing ? (
          <div>
            <button onClick={handleSaveName} className="w-24 text-white bg-border-icon p-2.5">
              Save
            </button>
            <button onClick={handleCancelEdit} className="w-24 text-white bg-red-500 p-2.5 ml-2">
              Cancel
            </button>
          </div>
        ) : (
          <button onClick={handleEditName} className="w-24 text-white bg-border-icon p-2.5">
            Edit name
          </button>
        )}
      </header>
      <Transaction title="Titre" amount="292929" description="C'est pour qui" />
      <Transaction title="Titre" amount="292929" description="C'est pour qui" />
      <Transaction title="Titre" amount="292929" description="C'est pour qui" />
    </div>
  );
}
