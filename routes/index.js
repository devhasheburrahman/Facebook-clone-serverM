const postRoutes = require("./post")
const upload = require("./upload")
const login = require("./login")
const userRoute = require("./User")


const routes = (app) => {
    postRoutes(app)
    upload(app)
    userRoute(app)
    login(app)

}

module.exports = routes