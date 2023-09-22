import useWindowDimensions from '@/hook/getWindowDimensions';
import menuList from '@/utils/menuList';
import { Drawer } from '@mui/material';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MobileDrawer({ setSidebar, isOpen }) {
  const { width } = useWindowDimensions();
  const location = useRouter();
  const path = location.pathname;

  const closeSidebar = () => {
    setSidebar(false);
  };

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setSidebar(open);
  };

  return (
    <>
      {width !== undefined && width < 768 && (
        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 260 }}
            role="presentation"
            // onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className="h-full dark:text-white bg-white dark:bg-[#1f2937]"
          >
            <div className="text-2xl pb-4 pt-5 bg-gray-50 dark:bg-[#111827] flex items-center px-4 justify-between font-medium border dark:border-gray-900">
              <div>Menu</div>
              <div onClick={closeSidebar} className="text-[1.7rem]">
                <i aria-hidden className="bx bx-x"></i>
              </div>
            </div>

            <div className="overflow-x-auto h-[calc(100%-4.5rem)]">
              {menuList.map((menu, idx) => (
                <Link
                  href={menu.link}
                  key={idx}
                  className="capitalize font-medium text-gray-800 hover:text-mainColor  dark:text-white"
                  onClick={closeSidebar}
                >
                  <ul className="w-full py-2 px-2 my-1">
                    <li
                      className={`py-1 px-4 block w-full capitalize rounded-lg overflow-hidden ${
                        path === menu?.link || path === menu?.link + '/'
                          ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white'
                          : 'active:bg-gray-300 dark:active:bg-gray-600'
                      }`}
                    >
                      {menu.name}
                    </li>
                  </ul>
                </Link>
              ))}
            </div>
          </Box>
        </Drawer>
      )}
    </>
  );
}
