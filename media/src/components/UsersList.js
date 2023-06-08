import React, {useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "../components/Button";
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/useThunk";
import UsersListItem from "./UsersListItem";


 
const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError ] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError ] = useThunk(addUser);
  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  let content;
  if (isLoadingUsers) {
    content =  <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content =  <div>Something went wrong...</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
        {creatingUserError && 'Error creating User'}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
