import { Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import React from "react";
import useWindowDimensions from "../../hook/getWindowDimensions";
import menuList from "@/utils/manuList";

export default function MobileDrawer({ setSidebar, isOpen }) {
  const { width } = useWindowDimensions();

  const closeSidebar = () => {
    setSidebar(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
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
            sx={{ width: 290 }}
            role="presentation"
            // onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className="h-full dark:text-white bg-white dark:bg-[#1f2937]"
          >
            <div className="text-2xl pb-4 pt-5 bg-gray-50 dark:bg-[#111827] flex items-center px-4 justify-between font-medium border dark:border-gray-900">
              <div>Menu</div>
              <div onClick={closeSidebar}>
                <i class="bx bx-x"></i>
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
                  <div className="w-full py-2 px-5 my-1">{menu.name}</div>
                </Link>
              ))}
            </div>
          </Box>
        </Drawer>
      )}
    </>
  );
}
