import { apiError } from "../Utils/apiError.js";
import { apiResponse } from "../Utils/apiResponse.js";
import { User } from "../Models/user.model.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if ([name, email, password].some((item) => item?.trim() == "")) {
      console.log("All fields are necessary!");
      throw new apiError(404, "All fields are necessary!");
    }

    const existingUser = await User.findOne({
      $or: [{ name }, { email }],
    });

    if (existingUser) {
      res
        .status(400)
        .json(new apiResponse(400, "User already exist!", "Failed!"));
      throw new apiError(400, "Email/name already exist!", "Failed!");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    console.log("User Created!");

    if (!user) {
      throw new apiError(500, "User couldn't be created!");
    }

    console.log("User Registered Succefully!");
    return res
      .status(200)
      .json(new apiResponse(200, "User Created Successfully!"));
  } catch (error) {
    console.log("Error while registering the user", error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log("Error while fetching User from the Database", error);
  }
};
