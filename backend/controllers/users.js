import User from "../models/user.js";

export default class UsersController {
    /*static async register(req, res, next) {
        try {
            const { email, username, password } = req.body;
            const user = new User({ email, username });
            const registeredUser = await User.register(user, password);
            req.login(registeredUser, err => {
                if (err) return next(err);
                res.status(201);
                res.json({redirect: "/"});
            });
        } catch (e) {
            console.log(e);
            res.json({redirect: "/register"});
        }
    }
    static async login(req, res) {
        const redirectUrl = req.session.returnTo || "/";
        delete req.session.returnTo;
        res.json({redirect: redirectUrl});
    }
    static async logout() {
        req.logout();
        req.session.destroy;
        res.json({redirect: "/"});;
    }*/
}