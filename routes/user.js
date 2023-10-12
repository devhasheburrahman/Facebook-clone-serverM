const User = require('../models/User')
const userRoute = (app) => {
    app.post("/api/register", async (req, res) => {
        const { userName, email, photo, pass } = req.body;

        try {
            if (!userName || !email || !photo || !pass) {
                return res.status(400).json({ msg: "All fields are required" });
            }

            const newUser = new User({ userName, email, photo, pass });

            const createdUser = await newUser.save();
            return res.status(200).json(createdUser)
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ msg: "Server Error" });
        }
    });

    // find user 
    app.get("/api/user/email/:userEmail", async (req, res) => {
        const userEmail = req.params.userEmail;
        try {
            // Find the user by email in the database
            const user = await User.findOne({ email: userEmail });

            if (!user) {
                return res.status(404).json({ msg: "User not found" });
            }

            // Return the user data
            return res.status(200).json(user);
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ msg: "Server Error" });
        }
    });

    // user update 
    // app.put('/api/user/email/:userEmail', async (req, res) => {
    //     const userEmail = req.params.userEmail;
    //     // console.log(userEmail == 'mango@gmail.com');
    //     const updatedUserData = req.body;
    //     console.log(updatedUserData);
    //     // Updated user data in the request body
    //     try {
    //         const updatedUser = await User.findOneAndUpdate({ email: userEmail }, updatedUserData, {
    //             new: true,
    //         });
    //         // console.log(updatedUser);
    //         if (!updatedUser) {
    //             return res.status(404).json({ msg: 'User not found' });
    //         }
    //         return res.status(200).json(updatedUser);
    //     } catch (error) {
    //         console.error('Error updating user profile by email:', error);
    //         return res.status(500).json({ msg: 'Server Error' });
    //     }
    // });
};



module.exports = userRoute;