import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
             <img src="data:image/png;base64,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" />
        
          </div>
        </div>
        <div>
          <h1 className=" font-bold">{user.name}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
