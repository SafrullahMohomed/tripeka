import React from "react";
import PersonIcon from '@mui/icons-material/Person';

const UserListUser = (props) => {
  return (
    <div className="m-10 border-0 text-center">
      <div style={{backgroundColor: props.bgcolor}} class="flex max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-36">
        <div className="flex items-center mx-4">
          <PersonIcon />
        </div>
        <div className="">
          <h5 class="mb-2 text-L font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {props.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserListUser;
