import React from 'react'

const Header = () => {
  return (
    <header className="w-full bg-[#ffffff] hidden lg:block border-b-[1px] border-gray-100">
  <div className="2xl:w-[80%] xl:w-[95%] mx-auto  sm:px-6">
    <div className="flex items-center justify-between">
      <a className="hover:cursor-pointer" href="/">
        <svg
          width={130}
          height={50}
          viewBox="0 0 79 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1309 13.2913L21.1289 13.2934C21.1309 13.3525 21.1309 13.4116 21.1309 13.4687C21.1309 14.3003 20.9719 15.1115 20.6601 15.8738C20.5663 16.1041 20.4563 16.3304 20.338 16.5485C20.2912 16.6361 20.2382 16.7258 20.1811 16.8175C19.8978 17.2761 19.5553 17.6981 19.166 18.0711C19.0641 18.1669 18.9581 18.2647 18.8481 18.3564C17.7026 19.3205 16.2472 19.8505 14.7491 19.8505C11.229 19.8505 8.36523 16.9867 8.36523 13.4666C8.36523 12.8083 8.46511 12.158 8.66486 11.5364C9.1785 9.92206 10.3424 8.55235 11.8548 7.77984C12.7434 7.32531 13.7442 7.08479 14.7491 7.08479C15.597 7.08479 16.4144 7.24785 17.1767 7.56175L15.6806 9.38804C15.3789 9.32078 15.0671 9.28408 14.7511 9.28408C12.399 9.28408 10.4932 11.2367 10.5706 13.6073C10.642 15.8066 12.4336 17.588 14.6309 17.6491C15.9802 17.6879 17.2358 17.0886 18.0613 16.0206C18.0959 15.9737 18.1265 15.935 18.153 15.8962C18.471 15.4519 18.6952 14.9546 18.8195 14.4328C18.8277 13.4442 18.8379 12.1091 18.846 11.0329C18.8542 9.98729 18.8603 9.18625 18.8583 9.18625V4.3902H15.1527C14.3781 3.69719 14.4556 2.88799 14.902 2.44365C15.1078 2.23575 15.3932 2.10938 15.7091 2.10938H19.9997C20.6295 2.10938 21.1411 2.62098 21.1411 3.25081L21.1309 13.2913Z"
            fill="#3366AA"
          />
          <path
            d="M6.39813 0C2.87804 0 0.0142681 2.86377 0.0142681 6.38386C0.0142681 6.44297 0.0142684 6.50412 0.0183449 6.56323L0 16.6608V16.6629C0 17.2682 0.491223 17.7574 1.09455 17.7574C1.69992 17.7574 2.19114 17.2662 2.19114 16.6629V11.1779C2.45408 11.4102 2.7374 11.6202 3.03702 11.8057C4.04597 12.4334 5.20778 12.7657 6.40017 12.7657C9.92026 12.7657 12.784 9.90192 12.784 6.38386C12.78 2.86377 9.91822 0 6.39813 0ZM6.39813 10.5664C5.35046 10.5664 4.34763 10.175 3.57309 9.46369C2.93715 8.88074 2.503 8.1327 2.31751 7.29701C2.25025 6.99942 2.21764 6.69164 2.21764 6.38182C2.21764 6.07201 2.25229 5.76423 2.31955 5.4646C2.50707 4.63095 2.94122 3.8829 3.57513 3.29996C4.34967 2.5886 5.35454 2.19726 6.40221 2.19726C8.70953 2.19726 10.5847 4.0745 10.5847 6.37978C10.5807 8.68915 8.70341 10.5664 6.39813 10.5664Z"
            fill="#3366AA"
          />
          <path
            d="M6.4302 9.09673C7.92176 9.09673 9.13091 7.88758 9.13091 6.39602C9.13091 4.90446 7.92176 3.69531 6.4302 3.69531C4.93864 3.69531 3.72949 4.90446 3.72949 6.39602C3.72949 7.88758 4.93864 9.09673 6.4302 9.09673Z"
            fill="#3366AA"
          />
          <path
            d="M6.45479 7.65177C7.14823 7.65177 7.71037 7.08963 7.71037 6.3962C7.71037 5.70276 7.14823 5.14062 6.45479 5.14062C5.76136 5.14062 5.19922 5.70276 5.19922 6.3962C5.19922 7.08963 5.76136 7.65177 6.45479 7.65177Z"
            fill="white"
          />
          <path
            d="M26.8453 9.16406V1.91574H29.9057C29.9762 1.91574 30.0702 1.9191 30.1876 1.92581C30.3084 1.92916 30.4158 1.93923 30.5098 1.95601C30.9426 2.02312 31.2967 2.16574 31.5718 2.38386C31.8504 2.60198 32.0551 2.87715 32.1859 3.20936C32.3168 3.53822 32.3822 3.90567 32.3822 4.31171C32.3822 4.71775 32.3151 5.08688 32.1809 5.4191C32.05 5.74795 31.8453 6.02144 31.5668 6.23957C31.2916 6.45769 30.9393 6.6003 30.5098 6.66742C30.4158 6.68084 30.3084 6.69091 30.1876 6.69762C30.0668 6.70433 29.9728 6.70769 29.9057 6.70769H28.2145V9.16406H26.8453ZM28.2145 5.42916H29.8453C29.9158 5.42916 29.993 5.42581 30.0769 5.4191C30.1608 5.41238 30.2379 5.39896 30.3084 5.37883C30.493 5.32849 30.6356 5.2446 30.7363 5.12715C30.8369 5.00634 30.9057 4.87379 30.9426 4.7295C30.9829 4.58185 31.003 4.44259 31.003 4.31171C31.003 4.18084 30.9829 4.04326 30.9426 3.89896C30.9057 3.75131 30.8369 3.61876 30.7363 3.50131C30.6356 3.3805 30.493 3.29493 30.3084 3.2446C30.2379 3.22446 30.1608 3.21104 30.0769 3.20433C29.993 3.19762 29.9158 3.19426 29.8453 3.19426H28.2145V5.42916ZM33.9969 9.16406V1.91574H35.366V4.89561H38.6076V1.91574H39.9768V9.16406H38.6076V6.17413H35.366V9.16406H33.9969ZM41.4906 9.16406L43.7054 1.91574H45.749L47.9638 9.16406H46.5544L44.5812 2.77144H44.843L42.9 9.16406H41.4906ZM42.8195 7.654V6.37547H46.645V7.654H42.8195ZM49.5707 9.16406V1.91574H50.9398V7.88554H54.0606V9.16406H49.5707ZM55.0171 9.16406L57.2319 1.91574H59.2755L61.4903 9.16406H60.0809L58.1077 2.77144H58.3695L56.4265 9.16406H55.0171ZM56.346 7.654V6.37547H60.1715V7.654H56.346ZM62.9965 9.16406V1.91574H64.3857L67.5368 6.74795V1.91574H68.926V9.16406H67.5368L64.3857 4.33185V9.16406H62.9965ZM74.0453 9.31507C73.3205 9.31507 72.6946 9.15735 72.1678 8.84191C71.6443 8.52648 71.2399 8.0852 70.9547 7.51809C70.6728 6.95097 70.5319 6.29158 70.5319 5.5399C70.5319 4.78822 70.6728 4.12883 70.9547 3.56171C71.2399 2.9946 71.6443 2.55332 72.1678 2.23789C72.6946 1.92245 73.3205 1.76473 74.0453 1.76473C74.7701 1.76473 75.3943 1.92245 75.9178 2.23789C76.4446 2.55332 76.849 2.9946 77.1309 3.56171C77.4161 4.12883 77.5587 4.78822 77.5587 5.5399C77.5587 6.29158 77.4161 6.95097 77.1309 7.51809C76.849 8.0852 76.4446 8.52648 75.9178 8.84191C75.3943 9.15735 74.7701 9.31507 74.0453 9.31507ZM74.0453 8.02648C74.505 8.03319 74.8876 7.9342 75.193 7.7295C75.4983 7.5248 75.7265 7.23453 75.8775 6.85869C76.0319 6.48285 76.1091 6.04326 76.1091 5.5399C76.1091 5.03655 76.0319 4.6003 75.8775 4.23118C75.7265 3.86205 75.4983 3.57514 75.193 3.37044C74.8876 3.16574 74.505 3.06003 74.0453 3.05332C73.5856 3.04661 73.203 3.14561 72.8977 3.3503C72.5923 3.555 72.3624 3.84527 72.2081 4.22111C72.0571 4.59695 71.9815 5.03655 71.9815 5.5399C71.9815 6.04326 72.0571 6.4795 72.2081 6.84863C72.3624 7.21775 72.5923 7.50467 72.8977 7.70936C73.203 7.91406 73.5856 8.01977 74.0453 8.02648Z"
            fill="#3564A8"
          />
          <path
            d="M27.55 17.7897C27.1953 17.7897 26.8947 17.6934 26.648 17.5008C26.4014 17.3081 26.2322 17.0497 26.1406 16.7256L26.7643 16.5776C26.8019 16.7491 26.8923 16.8947 27.0356 17.0145C27.1812 17.1343 27.348 17.1942 27.5359 17.1942C27.6581 17.1942 27.7826 17.1648 27.9094 17.1061C28.0363 17.0451 28.1337 16.9464 28.2019 16.8102C28.2488 16.7162 28.2759 16.6128 28.2829 16.5001C28.29 16.385 28.2935 16.2499 28.2935 16.0949V12.6137H28.9277V16.0949C28.9277 16.2405 28.9265 16.3709 28.9242 16.486C28.9242 16.6011 28.9124 16.7115 28.8889 16.8172C28.8678 16.9206 28.8255 17.0263 28.7621 17.1343C28.6353 17.3575 28.465 17.5231 28.2512 17.6311C28.0398 17.7368 27.8061 17.7897 27.55 17.7897ZM32.0713 17.7932C31.5662 17.7932 31.1375 17.6816 30.7852 17.4585C30.4328 17.2353 30.1639 16.9253 29.9783 16.5283C29.7951 16.1313 29.7035 15.6721 29.7035 15.1506C29.7035 14.6291 29.7951 14.1699 29.9783 13.7729C30.1639 13.3759 30.4328 13.0659 30.7852 12.8427C31.1375 12.6195 31.5662 12.508 32.0713 12.508C32.5786 12.508 33.0085 12.6195 33.3609 12.8427C33.7132 13.0659 33.981 13.3759 34.1642 13.7729C34.3474 14.1699 34.4391 14.6291 34.4391 15.1506C34.4391 15.6721 34.3474 16.1313 34.1642 16.5283C33.981 16.9253 33.7132 17.2353 33.3609 17.4585C33.0085 17.6816 32.5786 17.7932 32.0713 17.7932ZM32.0713 17.1942C32.4495 17.1966 32.7642 17.112 33.0156 16.9405C33.2693 16.7667 33.4583 16.5259 33.5828 16.2182C33.7097 15.9105 33.7731 15.5546 33.7731 15.1506C33.7731 14.7442 33.7097 14.3883 33.5828 14.083C33.4583 13.7776 33.2693 13.5392 33.0156 13.3677C32.7642 13.1962 32.4495 13.1093 32.0713 13.107C31.6931 13.1046 31.3783 13.1892 31.127 13.3607C30.878 13.5321 30.6901 13.7717 30.5632 14.0794C30.4364 14.3872 30.3718 14.7442 30.3694 15.1506C30.3671 15.5546 30.4293 15.9093 30.5562 16.2147C30.683 16.5201 30.8721 16.7596 31.1234 16.9335C31.3771 17.1049 31.6931 17.1919 32.0713 17.1942ZM35.1467 17.6875V12.6137H37.1234C37.4264 12.6137 37.6848 12.6759 37.8986 12.8004C38.1147 12.9249 38.2791 13.0893 38.3919 13.2937C38.507 13.4957 38.5645 13.7142 38.5645 13.9491C38.5645 14.2239 38.494 14.4647 38.3531 14.6714C38.2122 14.8781 38.0219 15.0202 37.7823 15.0977L37.7752 14.9251C38.1018 15.012 38.3554 15.1717 38.5363 15.4043C38.7172 15.6368 38.8076 15.914 38.8076 16.2358C38.8076 16.5318 38.7466 16.7878 38.6244 17.0039C38.5046 17.2201 38.3308 17.388 38.1029 17.5078C37.8774 17.6276 37.6096 17.6875 37.2996 17.6875H35.1467ZM35.7809 17.0885H37.1798C37.3677 17.0885 37.5356 17.0544 37.6836 16.9863C37.8316 16.9159 37.9479 16.8172 38.0325 16.6904C38.1194 16.5635 38.1628 16.4108 38.1628 16.2323C38.1628 16.0608 38.1241 15.907 38.0466 15.7707C37.9714 15.6345 37.8645 15.5264 37.7259 15.4466C37.5897 15.3643 37.4311 15.3232 37.2502 15.3232H35.7809V17.0885ZM35.7809 14.7313H37.1164C37.2667 14.7313 37.4018 14.6996 37.5216 14.6362C37.6437 14.5704 37.74 14.4788 37.8105 14.3613C37.8833 14.2439 37.9197 14.1065 37.9197 13.9491C37.9197 13.7306 37.8457 13.5521 37.6977 13.4135C37.5497 13.2749 37.356 13.2056 37.1164 13.2056H35.7809V14.7313Z"
            fill="#3564A8"
          />
        </svg>
      </a>
      <ul className="flex grow justify-end flex-wrap items-center space-x-12 mb-0">
        <a
          className="font-manrope font-semibold text-[14px] flex justify-center items-center py-1 px-2 rounded-md hover:text-primary hover:bg-[#D7E0EE]/20  text-black"
          href="http://www.phalanojob.com/search"
        >
          Jobs
        </a>
        <a
          className="font-manrope font-semibold text-[14px] flex justify-center items-center py-1 px-2 rounded-md hover:text-primary hover:bg-[#D7E0EE]/20  text-black"
          href="/"
        >
          Discover
        </a>
        <a
          className="font-manrope font-semibold text-[14px] flex justify-center items-center py-1 px-2 rounded-md hover:text-primary hover:bg-[#D7E0EE]/20  text-black"
          href="http://www.phalanojob.com/for-jobseekers"
        >
          For job seekers
        </a>
        <a
          className="font-manrope font-semibold text-[14px] flex justify-center items-center py-1 px-2 rounded-md hover:text-primary hover:bg-[#D7E0EE]/20  text-black"
          href="http://www.phalanojob.com/employers/"
        >
          For Employers
        </a>
      </ul>
      <ul className="ml-12 flex justify-between items-center gap-5 mt-4">
        <li>
          <a
          href="https://www.phalanojob.com/auth/login/"
            className=" font-manrope font-semibold text-[16px] text-primary flex justify-center h-[40px] items-center rounded-3xl border-[1px] border-primary hover:bg-[#E0E9F6] px-6 py-3 "
          >
            Login
          </a>
        </li>
        <li>
          <a
            href="https://www.phalanojob.com/auth/job-seeker/register/"
            className=" font-manrope font-semibold text-[16px] text-white flex justify-center h-[40px] items-center rounded-3xl bg-primary hover:bg-[#2c5794] px-6 py-3 "
          >
            Register
          </a>
        </li>
        <li className="xl:block hidden">
          <a
            href="https://www.phalanojob.com/auth/login/"
            className="  font-manrope font-semibold text-[16px] text-[#3b6baf] flex justify-center h-[40px] items-center hover:text-primary  "
          >
            For Employer
          </a>
        </li>
      </ul>
    </div>
  </div>
</header>

  )
}

export default Header
