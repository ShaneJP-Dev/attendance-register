import React from 'react';
import { Button } from "@/components/ui/button";

const AdminPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">User Management</h2>
          <Button>Add User</Button>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
              <td className="py-2 px-4 border-b">Admin</td>
              <td className="py-2 px-4 border-b">
                <Button variant="secondary" className="mr-2">Edit</Button>
                <Button variant="destructive">Delete</Button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;