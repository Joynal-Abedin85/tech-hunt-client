import { useQuery } from "@tanstack/react-query";
import React from "react";
import useaxios from "../../hook/useaxios";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const Alluser = () => {
  const axiossecure = useaxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiossecure.get("/users");
      return res.data;
    },
  });

  const handledelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        axiossecure.delete(`/users/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const makeadmin = (user) => {
    axiossecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }


    const makemoderator = (user) => {
      axiossecure.patch(`/users/moderator/${user._id}`).then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is moderator now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="min-h-screen">
      <div className="flex justify-evenly  my-5 text-text">
  <div className="text-3xl">All users</div>
  <div className="text-3xl">Total users {users.length}</div>
</div>

<div className="overflow-x-auto">
  <table className="table bg-card text-text border border-border rounded-lg">
    {/* head */}
    <thead className="bg-bg text-text">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={index} className="hover:bg-hover/10 transition-colors">
          <th className="border-b border-border">{index + 1}</th>
          <td className="border-b border-border">{user.name}</td>
          <td className="border-b border-border">{user.email}</td>
          <td className="border-b border-border">
            {user.role === "admin" ? (
              <span className="text-success font-bold">Admin</span>
            ) : user.role === "moderator" ? (
              <span className="text-info font-bold">Moderator</span>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={() => makeadmin(user)}
                  className="btn btn-ghost btn-sm text-warning"
                >
                  <FaUsers />
                  Make Admin
                </button>
                <button
                  onClick={() => makemoderator(user)}
                  className="btn btn-ghost btn-sm text-info"
                >
                  <FaUsers />
                  Make Moderator
                </button>
              </div>
            )}
          </td>
          <td className="border-b border-border">
            <button
              onClick={() => handledelete(user)}
              className="btn btn-ghost btn-sm text-danger"
            >
              <FaTrash />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Alluser;
