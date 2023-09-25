import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SearchDisplay = (props) => {
  //console.log(props);
  const { onSubmitQuery, linkDownload } = props;
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    //console.log(value);
  };

  const handleSubmitQuery = (link) => {
    if (!link) {
      toast.warn("Chưa nhập link!", {
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
    if (onSubmitQuery) onSubmitQuery(link);
  };
  return (
    <div>
      <div className="w-full">
        <div className="flex justify-center">
          <input
            className="w-4/6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Link video tiktok..."
            required
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="ml-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              handleSubmitQuery(query);
            }}
          >
            Lấy Link
          </button>
        </div>
        {linkDownload && (
          <button
            type="submit"
            className="ml-20 mt-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <a href={linkDownload} target="_blank">
              Link Tải
            </a>
          </button>
        )}
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
    </div>
  );
};

export default SearchDisplay;
