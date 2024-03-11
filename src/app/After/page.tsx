"use client";
import React from "react";
import Image from "next/image";
import { useState,useEffect } from "react";
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

const After: React.FC = () => {
  const [userData,setUserData]=useState<any[]>([]);
  
  useEffect (() => {
    async function fetchData() {
    const data = await fetchfire();
    setUserData(data);
    }
    fetchData();
    }, []);

  return (
    <div className="  bg-violet-600  w-auto p-8 flex justify-center items-center h-auto">
    {userData.map((user)=>(
    <div className="bg-gray-200 h-auto w-3/4 flex rounded-lg">
      
        <div  className=" bg-violet-400 w-full h-auto rounded-xl m-5 flex-col shadow hover:shadow-2xl">
        <div className=" flex justify-center">
          <div className="h-38 w-38 border-4 rounded-full items-center justify-center">
            <span className="text-white font-bold text-lg items-center">
              <Image
                src="/robot.png"
                alt="Robot Logo"
                className="dark:invert rounded-full"
                width={200}
                height={35}
                priority
              ></Image>
            </span>
          </div>
        </div>
        
        <div key={user.id} className="flex-row justify-center items-center text-xl font-mono text-white m-6">
            <div className="flex">
                <div className="p-4"><h2>Name:</h2></div>
                <div className="p-4"><h2>{user.name}</h2></div>
            </div>
            <div className="flex">
                <div className="p-4"><h2>Mobile No. :</h2></div>
                <div className="p-4"><h2>{user.Mob}</h2></div>
            </div>
            <div className="flex">
                <div className="p-4">Address:</div>
                <div className="p-4"><h2>{user.Address}</h2></div>
            </div>
            <div className="flex">
                <div className="p-4">Email:</div>
                <div className="p-4"><h2>{user.email}</h2></div>
            </div>
            <div className="flex">
                <div className="p-4">DOB:</div>
                <div className="p-4"><h2>{user.dob}</h2></div>
            </div>
            
            
            
        </div>
        
      </div>

      
       
    </div>
    ))}
    </div>
  );
};

export default After;
