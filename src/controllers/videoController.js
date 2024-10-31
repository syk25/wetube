const Video = (myTitle, myRating, myComments, myCreatedAt, myViews, myId) => {
    return {
        title: myTitle,
        rating: myRating,
        comments: myComments,
        createdAt: myCreatedAt,
        views: myViews,
        id: myId,
    };
};

const videos = [
    Video("First Video", 5, 296, "2 minutes ago", 590, 1),
    Video("Second Video", 2, 10, "2 minutes ago", 691, 2),
    Video("Third Video", 4, 200, "2 minutes ago", 400, 3),
    Video("Fourth Video", 3, 21, "2 minutes ago", 629, 4),
];
export const trending = (req, res) =>
    res.render("home", { pageTitle: "Home", videos });
export const search = (req, res) => res.send("Search videos");
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const deleteVideo = (req, res) => res.send("Delete video");
export const upload = (req, res) => res.send("Upload video");
