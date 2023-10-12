const User = require("../models/User");

const login = (app) => {
    app.post("/api/login", async (req, res) => {
        const { email, pass } = req.body;
        console.log(req.body);
        if (!email || !pass) {
            return res.status(401).json({ msg: "All Fields Required..." });
        }

        try {
            const user = await User.findOne({ email });
            console.log(user);

            if (!user) {
                return res.status(401).json({ msg: "Please check username and password.." });
            }
            console.log(user)
            // const isPasswordValid = await bcrypt.compare(pass, user.pass);            
            console.log(pass + "===" + user.pass)
            const isPasswordValid = pass === user.pass

            console.log(isPasswordValid)
            if (!isPasswordValid) {
                return res.status(401).json({ msg: "User not authorized. Login Failed." });
            }

            return res.status(200).json({ msg: "Login Successfully.", user })
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error" });
        }
    });

}

module.exports = login;