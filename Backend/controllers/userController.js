const registerUser = (req,res)=>{
    res.json({message:"Register User"})
}

const loginUser = (req,res)=>{
    res.json({message:"lOGIN User"})
    }

const userDetails = (req,res)=>{
        res.json({message:"User Details"})
        }

module.exports={
    registerUser,
    loginUser,
    userDetails,
}