import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import projectList from "../../../utils/projectList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "90vh",
  border: "none",
  boxShadow: 90,
  p: 1,
};

function ProjectModal({ setOpen, open, projectId }) {
  const handleClose = () => setOpen(false);

  const findProject = projectList.filter(
    (project) => project?.id === projectId
  );

  let content = null;

  content = findProject.map((project, idx) => {
    const { name, imageSrc, category, link, source, description } =
      project || {};
    return (
      <>
        <div
          className="min-h-[5vh] max-h-[42vh] overflow-hidden scrollbar-hide rounded-lg"
          key={idx}
        >
          <img src={imageSrc} alt={name} />
        </div>
        <div className="py-3 px-3">
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            className="capitalize font-medium"
          >
            {name}
          </Typography>

          <div className="text-xs md:text-sm text-gray-700 dark:text-gray-400 mt-2 mb-2">
            {description ||
              `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit maiores quasi quod quidem blanditiis culpa, deserunt
            atque tempore ullam ratione eos quaerat, odit perferendis illum
            placeat facere recusandae dolore asperiores.`}
          </div>

          <div className=" mb-5">
            {/* <span className="font-medium">Using:</span>{" "} */}
            {category.map((cat, idx) => (
              <>
                {/* <span key={idx}>{(idx ? ", " : "") + cat}</span> */}
                <div
                  className="bg-blue-100 text-blue-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded-2xl dark:bg-blue-200 dark:text-blue-800 capitalize inline-block"
                  key={idx}
                >
                  {cat}
                </div>
              </>
            ))}
          </div>

          {(link || source) && (
            <div className="mt-3">
              {link && (
                <a href={link} target="_blank" rel="noreferrer">
                  <button className="bg-violet-700 hover:bg-violet-800 text-sm text-white font-medium py-2 px-3 rounded-lg inline-flex items-center">
                    <i className="fa-solid fa-share-from-square mr-2"></i>
                    <span>Live Preview</span>
                  </button>
                </a>
              )}{" "}
              {source && (
                <a href={source} target="_blank" rel="noreferrer">
                  <button className="bg-slate-600 hover:bg-slate-700 text-sm text-white font-medium py-2 px-3 rounded-lg inline-flex items-center">
                    <i className="fa-brands fa-github mr-2"></i>
                    <span>Github</span>
                  </button>
                </a>
              )}{" "}
            </div>
          )}
        </div>
      </>
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
          className="w-[96%] md:w-[700px] outline-none rounded-xl overflow-x-auto  scrollbar-hide dark:text-white bg-gray-50 dark:bg-[#1f2937]"
        >
          <button
            className="absolute top-3 right-3 h-8 w-8 dark:bg-[#464f56] bg-gray-200 hover:bg-gray-300 dark:hover:bg-[#27282f] dark:text-white text-gray-700 rounded-full"
            onClick={handleClose}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          {content}
        </Box>
      </Modal>
    </>
  );
}

export default ProjectModal;
