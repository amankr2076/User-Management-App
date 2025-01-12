require("dotenv").config()
const User=require("../models/People")



//function to get all users
exports.listUsers = async (req,res) =>{

    try{
        const data = await User.find();

        return res.status(200).json(
        data,
        );

    }catch(error){
        console.log(error)
        return res.status(500).json({
        success: false,
        message: "Something went wrong.",
    })
}
}


//function to get a single user by id
exports.getUSerById = async (req,res) =>{

    try{
        const userId = req.params.userId;
        const _id=userId;

        const data = await User.findOne({_id});

        return res.status(200).json(
        data,
        );

    }catch(error){
        console.log(error)
        return res.status(500).json({
        success: false,
        message: "Something went wrong.",
    })
}
}


//function to add a new user
exports.addUser= async (req,res)=>{
    try{
        const {
            firstName,
            lastName,
            gender,
            age,
            mob_num,
          } = req.body

          if (
            !firstName ||
            !lastName ||
            !gender ||
            !age ||
            !mob_num
          ) {
            return res.status(403).send({
              success: false,
              message: "All Fields are required",
            })
          }


          const user = await User.create({
            firstName,
            lastName,
            gender,
            age,
            mob_num
          })


          return res.status(200).json({
            success: true,
            user,
            message: "User registered successfully",
          }) 
        
    } catch(error){
        console.log(error)
        return res.status(500).json({
        success: false,
        message: "User cannot be registered. Please try again.",
        })
    }
}


//function to delete a user
exports.deleteUser = async (req,res) =>{

    try{

        const userId = req.params.userId;

        if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
        }
        const _id=userId;

        const deletedUser = await User.findByIdAndDelete(_id);

        if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User deleted successfully",
            success : true,
            user: deletedUser,
          });

    } catch(error){
        console.log(error);
        return res.status(500).json({
        success: false,
        message: "User Deletion failed.",
        });
    }
}



//function to update a user
exports.updateUser = async (req,res) =>{
    try{
        const userId = req.params.userId;
        const {firstName,lastName,gender,age,mob_num,}=req.body;

        const user={
            firstName,
            lastName,
            gender,
            age,
            mob_num,
        }

        console.log("printing the userid",userId);
        console.log("printing the user data",user.mob_num);

        if (!userId || !user) {
        return res.status(400).json({ message: "User ID and user details are required" });
        }

        const filter = { _id: userId };
        const updatedUser = await User.findOneAndUpdate(filter, user, { new: true });

        res.status(200).json({
        success : true,
        user: updatedUser,
        message: "User updated successfully",
      });
    } catch(error){
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}