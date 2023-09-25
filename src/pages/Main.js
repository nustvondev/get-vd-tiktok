import React, { useState } from "react";
import SearchDisplay from "../components/SearchDisplay";
import VideoDownloader from "../components/VideoDownloader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { SERVER_VIDEO } from "../constants/global";
const Main = () => {
  const [urlVideo, setUrlVideo] = useState("");
  const [linkDownload, setLinkDownload] = useState("");
  const handleLinkToVideo = (link) => {
    if (link.trim() !== "") {
      const urlServer = SERVER_VIDEO;
      axios
        .post(urlServer, {
          url: link,
        })
        .then((response) => {
          if (
            response.data &&
            response.data.medias &&
            response.data.medias.length > 0
          ) {
            const firstMediaUrl = response.data.medias[0].url;

            setUrlVideo(firstMediaUrl);
            setLinkDownload(firstMediaUrl);
            toast.success("Lấy dữ liệu thành công!", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.warn("Link không tồn tại hoặc chủ sở hữu đã xóa!", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            return;
          }
        })
        .catch((error) => {
          toast.warn("Link không tồn tại hoặc chủ sở hữu đã xóa!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          return;
        });
    }
  };
  return (
    <>
      <main className="container mx-auto mt-10">
        {/* header */}
        <div className="flex justify-center">
          <div className="text-4xl font-bold">
            App get video TikTok no watermark
          </div>
        </div>
        {/* search */}
        <div className="flex mt-10">
          <div className="flex flex-auto w-3/6 justify-center">
            <SearchDisplay
              onSubmitQuery={handleLinkToVideo}
              linkDownload={linkDownload}
            />
          </div>
          <div className="flex flex-auto w-3/6 justify-center">
            <VideoDownloader url={urlVideo} />
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>
    </>
  );
};

export default Main;
