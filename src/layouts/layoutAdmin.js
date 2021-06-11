import React from "react";
import { Redirect } from "react-router";
import { isAuthenticated } from "../auth";
import Header from '../components/Admin/Header/index'
import SideBar from '../components/Admin/Sidebar/index'
import Swal from 'sweetalert2'
const LayoutAdmin = ({ children }) => {

  const { user } = isAuthenticated();

  return (
    <div className='flex h-screen bg-gray-200'>
      <SideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="flex flex-col mt-8">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">

              {
                user && user.role === 1 ? children :
                  <Redirect to={{ pathname: '/' }} >
                    {
                      setTimeout(() => {
                        Swal.fire({
                          position: 'top-end',
                          icon: 'warning',
                          title: 'You are not the admin',
                          showConfirmButton: false,
                          timer: 1500
                        })
                      }, 1300)
                    }
                  </Redirect>
              }
            </div>
          </div>
        </main>
      </div>

    </div>
  );
};

export default LayoutAdmin;
