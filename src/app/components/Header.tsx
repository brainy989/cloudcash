import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-8 flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl text-bauhaus font-bold">Weekly sumup</h1>
        <span className="text-bauhaus-light">
          Get summary of your weekly online transactions here.
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <svg
            width="23"
            height="17"
            viewBox="0 0 23 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.40497 0.46521H19.405C20.505 0.46521 21.405 1.36521 21.405 2.46521V14.4652C21.405 15.5652 20.505 16.4652 19.405 16.4652H3.40497C2.30497 16.4652 1.40497 15.5652 1.40497 14.4652V2.46521C1.40497 1.36521 2.30497 0.46521 3.40497 0.46521Z"
              fill="#E3E3E3"
            />
            <path
              d="M21.405 2.46521L11.405 9.46521L1.40497 2.46521"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="text-gray-600">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.405 8.46521C18.405 6.87391 17.7728 5.34779 16.6476 4.22257C15.5224 3.09735 13.9963 2.46521 12.405 2.46521C10.8137 2.46521 9.28755 3.09735 8.16233 4.22257C7.03711 5.34779 6.40497 6.87391 6.40497 8.46521C6.40497 15.4652 3.40497 17.4652 3.40497 17.4652H21.405C21.405 17.4652 18.405 15.4652 18.405 8.46521Z"
              fill="#E3E3E3"
            />
            <path
              d="M14.135 21.4652C13.9591 21.7683 13.7068 22.0199 13.4032 22.1947C13.0996 22.3696 12.7553 22.4617 12.405 22.4617C12.0546 22.4617 11.7103 22.3696 11.4067 22.1947C11.1031 22.0199 10.8508 21.7683 10.675 21.4652"
              stroke="#E3E3E3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="18.1064" cy="5.16355" r="3.97196" fill="#BB4430" />
          </svg>
        </button>
        <div className="flex items-center space-x-2">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_1_300"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="36"
              height="36"
            >
              <circle cx="17.7624" cy="18.4651" r="17.5292" fill="#FFC145" />
            </mask>
            <g mask="url(#mask0_1_300)">
              <path
                d="M28.5951 38.0827V34.5019C28.5951 32.6025 28.0244 30.7809 27.0086 29.4378C25.9929 28.0947 24.6152 27.3402 23.1787 27.3402H12.3459C10.9093 27.3402 9.53165 28.0947 8.51587 29.4378C7.5001 30.7809 6.92944 32.6025 6.92944 34.5019V38.0827"
                fill="#197BBD"
              />
              <path
                d="M17.7609 21.923C20.7523 21.923 23.1773 19.498 23.1773 16.5066C23.1773 13.5152 20.7523 11.0902 17.7609 11.0902C14.7695 11.0902 12.3445 13.5152 12.3445 16.5066C12.3445 19.498 14.7695 21.923 17.7609 21.923Z"
                fill="white"
              />
            </g>
          </svg>

          <div>
            <p className="text-bauhaus text-xs font-semibold">Andrew</p>
            <p className="text-bauhaus-light text-xs">Admin account</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
