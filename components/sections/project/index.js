import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Fade } from 'react-reveal';
import projectList from '../../../utils/projectList';
import Title from '../title';
import ProjectButton from './projectButton';
import Projects from './projects';

export default function Project() {
  const [items, setItems] = useState([
    ...projectList.sort((b, a) => a.id - b.id),
  ]);

  const location = useRouter();
  const path = location.pathname;

  return (
    <div className="containerCustom gap">
      <Title title="projects" />
      {path !== '/' && <ProjectButton setItem={setItems} items={items} />}

      <AnimatePresence>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 columns-1 gap-1 justify-items-center">
          <Projects items={items} setItem={setItems} />{' '}
        </div>
      </AnimatePresence>

      {path === '/' && (
        <Fade up>
          <div className="text-center mt-9 flex justify-center">
            <Link href="/projects">
              <button
                type="button"
                className=" bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-5 md:px-9 md:hover:px-16 py-3.5 text-center mr-2 mb-2 text-white transition-all flex items-center justify-center"
              >
                Show more
                <i aria-hidden className="fa-solid fa-arrow-right pl-1"></i>
              </button>
            </Link>
          </div>
        </Fade>
      )}
    </div>
  );
}
