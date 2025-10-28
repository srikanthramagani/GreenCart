import Address from "../models/Address.js"


//Add Address:/api/address/add
export const addAddress=async(req, res)=>{
    try {
        const{address,userId}=req.body
        await Address.create({...address,userId})
        res.json({success:true,message:"Address added Successfully"})
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
        
    }
}
//Get Address:/api/address/get
export const getAddress = async (req, res) => {
    try {
        // Get userId from auth middleware (req.body.userId is set by authUser middleware)
        const { userId } = req.body;
        console.log("Fetching addresses for userId:", userId);
        
        const addresses = await Address.find({ userId });
        console.log("Found addresses:", addresses.length);
        
        res.json({ success: true, addresses });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}