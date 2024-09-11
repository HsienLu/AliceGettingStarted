import logo from "../assets/logo.png";
import { useState } from "react";
const contextPath = "https://alice.ntust.edu.tw/";
export function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
    <button className="bg-[#BBE2EC] py-4 px-4 cursor-pointer text-gray-800 text-xl leading-8 focus:outline-none hover:bg-gray-200">
        關於我們
    </button>
    {isOpen && (
        <div className="dropdown-content absolute block bg-white min-w-[160px] shadow-md z-50">
            <a href={`${contextPath}/wise-advantage.html`} className="block px-4 py-3 text-black hover:bg-gray-100">
                學習優勢
            </a>
            <a href={`${contextPath}/pages/features.html`} className="block px-4 py-3 text-black hover:bg-gray-100">
                教學特色
            </a>
            <a href={`${contextPath}/contact/contactwise.html`} className="block px-4 py-3 text-black hover:bg-gray-100">
                聯絡我們
            </a>
        </div>
    )}
</div>
  );
}

function Header() {
 
  return (
    <>
      <div className="font-notoSans bg-[#BBE2EC] mb-4">
        <div className="flex   items-center p-4">
          <div className="grow-[1] logoHeader">
            <a href={`${contextPath}`} title="Home Page">
              <img className="w-[500px] h-full  block" src={logo} alt="" />
            </a>
          </div>
          <div className="grow-[2] selectMenu flex space-x-12">
            <a
              href={`${contextPath}/projectlibrary`}
              className="text-gray-800 text-xl leading-8 py-4 px-4 "
            >
              課程消息
            </a>
            <a
              href={`${contextPath}/pages/news.html`}
              className="text-gray-800 text-xl leading-8 py-4 px-4 "
            >
              最新消息
            </a>
            <DropDown></DropDown>
          </div>
          <a href={`${contextPath}`} className="text-white bg-blue-600 hover:bg-blue-700 text-xl leading-8 py-2 px-4 rounded transition-colors duration-200 cursor-pointer">回到首頁</a>
        </div>
      </div>
    </>
  );
}
export default Header;
