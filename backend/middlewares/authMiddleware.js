import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        req.user = userInfo;
<<<<<<< HEAD

=======
>>>>>>> 8073ffd (add ui)
        next();
    });
};

export const verifyAdmin = (req, res, next) => {
<<<<<<< HEAD
    if (req.user.role !== 'admin') {
=======
    if (!req.user || req.user.role !== 'admin') {
>>>>>>> 8073ffd (add ui)
        return res.status(403).json("Permission denied!");
    }
    next();
};

export const verifyStaff = (req, res, next) => {
<<<<<<< HEAD
    if (req.user.role === 'staff' || req.user.role === 'admin') next();
    return res.status(403).json("Permission denied!");
}
=======
    if (req.user && (req.user.role === 'staff' || req.user.role === 'admin')) {
        return next();
    }
    return res.status(403).json("Permission denied!");
};
>>>>>>> 8073ffd (add ui)
