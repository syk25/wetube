import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
const actionBtn = document.getElementById("actionBtn");
const video = document.getElementById("preview");

let stream;
let recorder;
let videoFile;

const files = {
    input: "recording.webm",
    output: "output.mp4",
    thumb: "thumbnail.jpg",
};

const downloadFile = (fileUrl, fileName) => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
};

const handleDownload = async () => {
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
    const ffmpeg = new FFmpeg();
    ffmpeg.on("log", ({ message }) => {
        console.log(message);
    });
    await ffmpeg.load({
        coreURL: await toBlobURL(
            `${baseURL}/ffmpeg-core.js`,
            "text/javascript"
        ),
        wasmURL: await toBlobURL(
            `${baseURL}/ffmpeg-core.wasm`,
            "application/wasm"
        ),
    });

    await ffmpeg.writeFile("recording.webm", await fetchFile(videoFile));
    await ffmpeg.exec(["-i", "recording.webm", "-r", "60", "output.mp4"]);
    const mp4File = await ffmpeg.readFile("output.mp4");
    const mp4Blob = new Blob([mp4File.buffer], { type: "video/mp4" });
    const mp4Url = URL.createObjectURL(mp4Blob);

    const a = document.createElement("a");
    a.href = mp4Url;
    a.download = "MyRecording.mp4";
    document.body.appendChild(a);
    a.click();
};

const handleStart = () => {
    actionBtn.innerText = "Recording";
    actionBtn.disabled = true;
    actionBtn.removeEventListener("click", handleStart);
    recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
    recorder.ondataavailable = (event) => {
        videoFile = URL.createObjectURL(event.data);
        video.srcObject = null;
        video.src = videoFile;
        video.loop = true;
        video.play();
        actionBtn.innerText = "Download";
        actionBtn.disabled = false;
        actionBtn.addEventListener("click", handleDownload);
    };
    recorder.start();
    setTimeout(() => {
        recorder.stop();
    }, 5000);
};

const init = async () => {
    stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            width: 1024,
            height: 576,
        },
    });
    video.srcObject = stream;
    video.play();
};

init();

actionBtn.addEventListener("click", handleStart);
