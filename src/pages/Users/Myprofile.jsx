

import React, { useContext } from "react";
import { Authcontext } from "../auth/Authprovider";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Myprofile = () => {
  const {user} = useContext(Authcontext)
  const userProfile = {
    name: user?.name || "User Name",
    email: user?.email || "user@example.com",
    displayName: user?.displayName || "https://via.placeholder.com/150",
    isSubscribed: user?.isSubscribed || false,
    subscriptionAmount: "$19.99/month"}
    console.log(userProfile)

  return (
    <div className="container mx-auto p-6">
      {/* Profile Header */}
      <div className="mb-6 shadow-lg">
        <div className="flex items-center space-x-6">
          <div>
            <img src={user.photoURL} alt={user.displayName} />
            <h2>{user.displayName.charAt(0)}</h2>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user.displayName}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
            {user.isSubscribed ? (
              <p className="text-green-600 font-semibold mt-2">Status: Verified</p>
            ) : (
              <button variant="primary" className="mt-2">
                Subscribe - {user.subscriptionAmount}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tabs for Posts */}
      {/* <Tabs defaultValue="posts">
        <TabsList>
          <TabsTrigger value="posts">My Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="posts">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Votes</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user.posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.productName}</TableCell>
                  <TableCell>{post.votes}</TableCell>
                  <TableCell>{post.status}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="secondary" size="sm">
                        Update
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs> */}
    </div>
  );
};

export default Myprofile;
