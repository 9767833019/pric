"use client";
import React, { ChangeEvent, useState,useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { db } from "@/firebaseConfig";
import { getDocs,collection } from "firebase/firestore";

async function fetchfire() {
  const querysnapshot= await getDocs(collection(db,"user"))

  const data: { id: string; }[]=[];
  querysnapshot.forEach((doc)=>{
    data.push({id:doc.id,...doc.data()});
  })
  return data;
}




const Signup: React.FC = () => {
  const [userData,setUserData]=useState<any[]>([]);
  
  useEffect (() => {
    async function fetchData() {
    const data = await fetchfire();
    setUserData(data);
    }
    fetchData();
    }, []);

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    
  };
  const router = useRouter()
  
 
  const redirectToAfter = () => {
    router.push('/After');
};

const redirectToNewUser = () => {
  router.push('/NewUser');
};

  return (
    <div className="bg-gray-200 font-medium text-violet-600 w-80 h-96 flex-col border p-4 rounded-md shadow-md items-center justify-center" >
        <div className="flex justify-center items-center">
      <div className="h-28 w-28  border-2 border-violet-600 rounded-full items-center justify-center">
        <span className="text-white font-bold text-lg items-center">
            <Image
              src="/robot.png"
              alt="Robot Logo"
              className="dark:invert rounded-full"
              width={200}
              height={35}
              priority></Image>
        </span>
      </div>
      </div>
      <div className=" flex-col space-y-6 p-2">
        <div className="flex space-y-2">
          <h3 className="p-3">Username:</h3>
          <input
            className=" w-36 h-10 rounded-md"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            name="username"
            placeholder="Enter Username"
          />
        </div>
        <div className="flex space-y-2">
          <h3 className="p-3">Password:</h3>
          <input
            className=" w-36 h-10 rounded-md"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            name="password"
            placeholder="Enter Password"
          />
        </div>
      </div>
      <div className="flex-col justify-center space-y-10 p-2">
        <button
          className="bg-slate-10 w-28 border-2 text-black bg-violet-600 p-2 align-middle rounded-md"
          onClick={redirectToAfter}>
          <h3>Login </h3>
        </button>

        {/* <button
          className="bg-slate-10 w-28 border-2 text-black bg-violet-600 p-2 align-middle rounded-md  space-y-10"
          onClick={redirectToNewUser}>
          <h3>New User </h3>
        </button> */}

      </div>
    </div>
  );
};

export default Signup;
