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

export const postUpload = (req, res) => {
    // 비디오 배열에서의 비디오 추가
    const { title } = req.body;

    videos.push(newVideo);
    return res.redirect("/");
};
