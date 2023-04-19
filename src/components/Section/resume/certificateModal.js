import { Box, Modal } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "90vh",
  border: "none",
  boxShadow: 90,
};

function CertificateModal({ setOpen, open, contents }) {
  const handleClose = () => setOpen(false);
  // const [cerName, setCerName] = useState("");

  // const findProject = workList.filter((work) => work?.id === workId);

  let content = null;

  content = contents.map((cer, idx) => {
    const { image, title } = cer || {};

    return (
      <div className="overflow-auto scrollbar-hide rounded-lg" key={idx}>
        <img src={image} alt={title} key={idx} />
      </div>
    );
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="w-[96%] md:w-[700px] outline-none overflow-auto scrollbar-hide rounded-xl dark:text-white bg-gray-50 dark:bg-[#1f2937]"
        >
          <div className="px-3 pt-3 pb-2 flex items-center justify-between sticky top-0 left-0 dark:text-white bg-gray-50 dark:bg-[#1f2937]">
            <div>
              {contents.map((content, idx) => (
                <span key={idx} className="capitalize font-medium">
                  {content?.title}
                </span>
              ))}
            </div>
            <button
              className="h-8 w-8 dark:bg-[#464f56] bg-gray-200 hover:bg-gray-300 dark:hover:bg-[#27282f] dark:text-white text-gray-700 rounded-full"
              onClick={handleClose}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="px-2 py-2">{content}</div>
        </Box>
      </Modal>
    </>
  );
}

export default CertificateModal;
