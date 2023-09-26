import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStored } from "../../localStorage";
import { useState } from "react";
import Donation from "./Donation";


const Donations = () => {
    const donations=useLoaderData();
    const [donationNumber,setDonationNumber]=useState([]);
    const [showData,setShowData]=useState(4);
    useEffect(()=>{
        const stored=getStored();
        if(donations.length){
          const donationsGiven=[];
          for(const id of stored){
            const donation=donations.find(donation=>donation.id===id);
            if(donation) {
                donationsGiven.push(donation);
            }
          }
          setDonationNumber(donationsGiven);
        }
        
    },[])
    return (
        <div className="text-center font-bold text-3xl my-16 container mx-auto">
           
           <div className="grid grid-cols-2 gap-8 ">
            {
                donationNumber.slice(0,showData).map(donate=><Donation key={donate.id} donate={donate}></Donation>)
            }
           </div>
           <div className={showData===donationNumber.length&& 'hidden'}>
            <Link><button className="btn my-14 bg-red-200 " onClick={()=>setShowData(donationNumber.length)}>Show all</button></Link>
           </div>
        </div>
    );
};

export default Donations;