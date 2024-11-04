import Video from "../models/Video";

// promise: 코드가 작성순서대로 실행이 완료되게끔 처리하는 기법: async: 포장하는 함수, await 실행이 보장되어야 하는 함수
export const home = async (req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
    const { id } = req.params;

    return res.render("watch", {
        pageTitle: `Watching`,
    });
};
export const getEdit = (req, res) => {
    const { id } = req.params;

    return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title,
            description,
            createdAt: Date.now(),
            hashtags: hashtags.split(",").map((word) => `#${word}`),
            meta: {
                views: 0,
                rating: 0,
            },
        });
        return res.redirect("/");
    } catch (error) {
        console.log(error);
        return res.render("upload", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
        });
    }
};
