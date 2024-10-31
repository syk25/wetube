const videos = [
    {
        title: "Video1",
    },
    {
        title: "Video2",
    },
    {
        title: "Video3",
    },
];
export const trending = (req, res) =>
    res.render("home", { pageTitle: "Home", videos });
export const search = (req, res) => res.send("Search videos");
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const deleteVideo = (req, res) => res.send("Delete video");
export const upload = (req, res) => res.send("Upload video");
