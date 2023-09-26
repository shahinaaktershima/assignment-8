import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStored } from "../../localStorage";
import { useState } from "react";
import Donation from "./Donation";


const Donations = () => {
    const donations=useLoaderData();
    const [donationNumber,setDonationNumber]=useState([]);
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
        <div className="text-center font-bold text-3xl container mx-auto">
           <h2>donation:{ donationNumber.length}</h2> 
           <div className="grid grid-cols-2 gap-8 ">
            {
                donationNumber.map(donate=><Donation key={donate.id} donate={donate}></Donation>)
            }
           </div>

        </div>
    );
};

export default Donations;