import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useWindowDimensions from '@/hook/getWindowDimensions';
import blur from '@/assets/images/blur.webp';
import projectList from '@/utils/projectList';
import ProjectModal from './projectModal';

export default function Projects({ items }) {
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState('');
  const handleOpen = id => {
    setOpen(true);
    setProjectId(id);
  };

  const location = useRouter();
  const path = location.pathname;
  const { width } = useWindowDimensions();

  let slice;
  if (path === '/' && projectList.length > 9) {
    slice = projectList.slice(0, 9);
  } else {
    slice = items;
  }

  return (
    <>
      {slice.map((item, idx) => {
        const { id, imageSrc, placeholderSrc, name, category } = item || {};
        return (
          <Fade key={idx} className="w-full block">
            <motion.div
              layout={width > 768 ? true : false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div
                className="relative projectBtn w-full object-contain  overflow-hidden hover:cursor-pointer h-64 sm:h-52 lg:h-56 "
                onClick={() => handleOpen(id)}
              >
                <LazyLoadImage
                  src={imageSrc}
                  placeholderSrc={placeholderSrc ? placeholderSrc : blur}
                  threshold="100"
                  alt={name}
                  effect="blur"
                  height="100%"
                  width="100%"
                  className="object-cover min-h-full w-full block"
                  key={idx}
                  loading="lazy"
                />
                <div className="absolute bg-white/80 backdrop-blur  h-[80px] w-full -bottom-full left-0 z-30 md:flex justify-center items-center slide-up transition-all ease-in-out duration-500 dark:text-black hidden">
                  <div>
                    <div className="font-semibold capitalize text-base text-center">
                      {name}
                    </div>
                    <div className="text-center text-sm">
                      {category.map((cat, idx) => (
                        <span key={idx}>{(idx ? ', ' : '') + cat}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Fade>
        );
      })}

      <ProjectModal
        open={open}
        handleOpen={handleOpen}
        setOpen={setOpen}
        projectId={projectId}
      />
    </>
  );
}
