export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const see = (req, res) => {
    console.log(req.params);
    res.send("See profile");
};
export const edit = (req, res) => res.send("Edit User");
export const deleteUser = (req, res) => res.send("Remove User");
