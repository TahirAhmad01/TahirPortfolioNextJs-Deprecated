import { useWindowScrollPositions } from '@/hook/useWindowScrollPositions';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import Footer from './footer';
import Navbar from './navigation/nav';

export default function Layout({ children }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useWindowScrollPositions();
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  const location = useRouter();
  const path = location.pathname;

  const backToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <div className="relative dark:text-white bg-gray-50 dark:bg-[#111827] transition-all overflow-hidden font-nunito">
        <Navbar
          theme={theme}
          toggleDarkMode={toggleDarkMode}
          loading={mounted}
        />
        {children}
        <Footer />

        {path === '/' ? (
          scrollY > 90 && (
            <>
              <WhatsAppWidget
                phoneNumber="+8801610881871"
                companyName={process.env.name}
                replyTimeText="Typically replies within an hour"
                sendButton="send"
                message="Hello! how can I help you?"
                open={false}
              />
            </>
          )
        ) : (
          <WhatsAppWidget
            phoneNumber="+8801610881871"
            companyName={process.env.name}
            replyTimeText="Typically replies within an hour"
            sendButton="send"
            message="Hello! how can I help you?"
            open={false}
          />
        )}

        <button
          x-data="topBtn"
          id="topButton"
          className={`fixed z-10 p-2 sm:p-3 bg-gray-100 text-black rounded-full shadow-md bottom-[7.4rem] right-[13px]  sm:bottom-[3.4rem] sm:right-24  animate-bounce ${
            scrollY > 250 ? 'block' : 'hidden'
          }`}
          onClick={backToTop}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
