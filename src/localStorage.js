const getStored=()=>{
    const stored=localStorage.getItem('donation');
    if(stored){
        return JSON.parse(stored);
    }
    else{
        return [];
    }
   
}
const storedDonation=id=>{
    const saveDonation= getStored();
const exist =saveDonation.find(donationId=>donationId===id);
if(!exist){
 saveDonation.push(id);
 localStorage.setItem('donation',JSON.stringify(saveDonation));
}
}
export {getStored,storedDonation}