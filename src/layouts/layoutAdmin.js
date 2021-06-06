import React from "react";
import Header from '../components/Admin/Header/index'
import SideBar from '../components/Admin/Sidebar/index'
const LayoutAdmin = (props) => {
  return (
    <div className='flex h-screen bg-gray-200'>
      <SideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="flex flex-col mt-8">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              {props.children}
            </div>
          </div>
        </main>
      </div>

    </div>
  );
};

export default LayoutAdmin;
