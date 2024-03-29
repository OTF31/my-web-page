import React from "react";

import { useContext } from "react";
import { contextPersonalData } from "../App";

const MenuLateral = (props) => {
  const { personalData, setPersonalData } = useContext(contextPersonalData);

  // let isOpenSideMenu = this.props.isOpenSideMenu;
  let openSideMenu = props.openSideMenu;

  return (
    <>
      {
        <div
          className={`fixed top-0 left-0 h-screen rounded-r-lg bg-primary-color text-xs sm:w-12 md:text-[16px] lg:text-xl md:lg:w-[17%]`}
        >
          <button
            className="fixed top-4 left-2 text-white hover:scale-125"
            onClick={openSideMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </button>

          <div className="mt-7 flex h-full w-full flex-col gap-1">
            <img
              className="mt-12 mb-4 h-8 w-8 self-center rounded-3xl md:lg:mt-2 md:lg:h-16 md:lg:w-16"
              src="https://w7.pngwing.com/pngs/825/857/png-transparent-computer-icons-user-profile-user-silhouette-apple-icon-image-format-user-profile.png"
              alt=""
            />
            <h3 className="hidden self-center text-center font-[Montserrat] text-[14px] text-white md:lg:block md:lg:text-[24px]">
              {personalData["nombres"]}
            </h3>
            <h3 className="mb-6 hidden self-center text-center font-[Montserrat] text-[14px] text-white md:lg:block md:lg:text-[24px]">
              {personalData["apellidos"]}
            </h3>

            <button className="ml-1 mr-1 flex items-center justify-between self-stretch p-2 font-[Montserrat] text-white shadow-inner shadow-orange-500 hover:bg-secondary-color hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-8 lg:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <span className="hidden md:lg:inline">Menú 2</span>
            </button>

            <button className="ml-1 mr-1 flex items-center justify-between self-stretch p-2 font-[Montserrat] text-white shadow-inner shadow-orange-500 hover:bg-secondary-color hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-8 lg:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="hidden md:lg:inline">Menú 3</span>
            </button>

            <button className="ml-1 mr-1 flex items-center justify-between self-stretch p-2 font-[Montserrat] text-white shadow-inner shadow-orange-500 hover:bg-secondary-color hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-8 lg:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
              <span className="hidden md:lg:inline">Menú 4</span>
            </button>

            <button className="ml-1 mr-1 flex items-center justify-between self-stretch p-2 font-[Montserrat] text-white shadow-inner shadow-orange-500 hover:bg-secondary-color hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-8 lg:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="hidden md:lg:inline">Menú 5</span>
            </button>

            <button className="ml-1 mr-1 flex items-center justify-between self-stretch p-2 font-[Montserrat] text-white shadow-inner shadow-orange-500 hover:bg-secondary-color hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-8 lg:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                />
              </svg>
              <span className="hidden md:lg:inline">Menú 6</span>
            </button>

            <button className="absolute left-2 bottom-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="z-10 h-6 w-6 self-start rounded-md text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        // :
        // <div className="fixed top-0 left-0 w-12 h-screen rounded-r-lg bg-primary-color">
        //   <button className="fixed text-white top-5 left-3" onClick={openSideMenu}>
        //     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        //       <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        //     </svg>
        //   </button>

        //   <div className="flex flex-col w-full h-full gap-1 mt-12">
        //     <img className="self-center mt-12 mb-4 rounded-full w-7 h-7" src="https://w7.pngwing.com/pngs/825/857/png-transparent-computer-icons-user-profile-user-silhouette-apple-icon-image-format-user-profile.png" alt="" />

        //     <button className="flex justify-between self-stretch p-2 ml-1 mr-1 mt-12 text-white shadow-inner shadow-orange-500 hover:bg-secondary-color hover:text-black font-[Montserrat]">
        //       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        //         <path d="M12 14l9-5-9-5-9 5 9 5z" />
        //         <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        //       </svg>
        //     </button>

        //     <button className="flex justify-between self-stretch p-2 ml-1 mr-1 text-white shadow-inner shadow-orange-500 hover:bg-secondary-color hover:text-black font-[Montserrat]">
        //       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        //       </svg>
        //     </button>

        //     <button className="flex justify-between self-stretch p-2 ml-1 mr-1 text-white shadow-inner shadow-orange-500 hover:bg-secondary-color hover:text-black font-[Montserrat]">
        //       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        //       </svg>
        //     </button>

        //     <button className="flex justify-between self-stretch p-2 ml-1 mr-1 text-white shadow-inner shadow-orange-500 hover:bg-secondary-color hover:text-black font-[Montserrat]">
        //       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        //       </svg>
        //     </button>

        //     <button className="flex justify-between self-stretch p-2 ml-1 mr-1 text-white shadow-inner shadow-orange-500 hover:bg-secondary-color hover:text-black font-[Montserrat]">
        //       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        //       </svg>
        //     </button>

        //     <svg xmlns="http://www.w3.org/2000/svg" className="fixed z-10 self-start w-6 h-6 text-white rounded-md left-2 bottom-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        //       <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        //       <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        //     </svg>
        //   </div>
        // </div>
      }
    </>
  );
};

export default MenuLateral;
