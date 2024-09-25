import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import PropTypes from "prop-types";

function Sidebar({ className }) {
  Sidebar.propTypes = {
    className: PropTypes.string,
  };

  const [isDropdownOpenGettingStarted, setIsDropdownOpenGettingStarted] =
    useState(false);
  const toggleDropdownGettingStarted = () => {
    setIsDropdownOpenGettingStarted(!isDropdownOpenGettingStarted);
  };

  const [isDropdownOpenTeacherTools, setIsDropdownOpenTeacherTools] =
    useState(false);
  const toggleDropdownTeacherTools = () => {
    setIsDropdownOpenTeacherTools(!isDropdownOpenTeacherTools);
  };

  const [isDropdownOpenAllDocument, setIsDropdownOpenAllDocument] =
    useState(false);
  const toggleDropdownAllDocument = () => {
    setIsDropdownOpenAllDocument(!isDropdownOpenAllDocument);
  };

  return (
    <div className={`h-full w-64 bg-white text-gray-800 shadow-md ${className}`}>
      <ul className="space-y-2">
        <li>
          <a href="#home" className="block p-4 hover:bg-gray-100">
            Home
          </a>
        </li>
        <li className="relative">
          <button
            onClick={toggleDropdownGettingStarted}
            className="w-full text-left block p-4 hover:bg-gray-100 focus:outline-none"
          >
            快速開始
            <span className="absolute right-4 top-5">
              {isDropdownOpenGettingStarted ? (
                <SlArrowDown />
              ) : (
                <SlArrowRight />
              )}
            </span>
          </button>
          <div
            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
              isDropdownOpenGettingStarted ? "max-h-80" : "max-h-0"
            }`}
            style={{ maxHeight: isDropdownOpenGettingStarted ? "320px" : "0px" }}
          >
            <ul>
              <li>
                <a
                  href="#StartingGuideRegister"
                  className="block p-4 hover:bg-gray-100 indent-8"
                >
                  註冊
                </a>
              </li>
              <li>
                <a
                  href="#execute-alice"
                  className="block p-4 hover:bg-gray-100 indent-8"
                >
                  執行ALICE專題庫
                </a>
              </li>
              <li>
                <a
                  href="#set-student-test-account"
                  className="block p-4 hover:bg-gray-100 indent-8"
                >
                  設定一組學生測試帳號
                </a>
              </li>
              {/* 教師工具介紹的子項目，放在快速開始內 */}
              <li className="relative">
                <button
                  onClick={toggleDropdownTeacherTools}
                  className="w-full text-left block p-4 hover:bg-gray-100 focus:outline-none indent-8"
                >
                  教師工具介紹
                  <span className="absolute right-4 top-5">
                    {isDropdownOpenTeacherTools ? (
                      <SlArrowDown />
                    ) : (
                      <SlArrowRight />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                    isDropdownOpenTeacherTools ? "max-h-40" : "max-h-0"
                  }`}
                  style={{ maxHeight: isDropdownOpenTeacherTools ? "160px" : "0px" }}
                >
                  <ul>
                    <li>
                      <a
                        href="#TeacherToolsClassShow"
                        className="block p-4 hover:bg-gray-100 indent-8"
                      >
                        ALICE課程呈現方式
                      </a>
                    </li>
                    <li>
                      <a
                        href="#TeacherToolsAssessment"
                        className="block p-4 hover:bg-gray-100 indent-8"
                      >
                        ALICE課程評量工具
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="relative">
          <button
            onClick={toggleDropdownAllDocument}
            className="w-full text-left block p-4 hover:bg-gray-100 focus:outline-none"
          >
            完整介紹
            <span className="absolute right-4 top-5">
              {isDropdownOpenAllDocument ? <SlArrowDown /> : <SlArrowRight />}
            </span>
          </button>
          <div
            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
              isDropdownOpenAllDocument ? "max-h-60" : "max-h-0"
            }`}
            style={{ maxHeight: isDropdownOpenAllDocument ? "240px" : "0px" }}
          >
            <ul>
              <li>
                <a
                  href="#course-implementation"
                  className="block p-4 hover:bg-gray-100 indent-8"
                >
                  課程實施
                </a>
              </li>
              <li>
                <a
                  href="#course-presentation"
                  className="block p-4 hover:bg-gray-100 indent-8"
                >
                  課程呈現方式
                </a>
              </li>
              <li>
                <a
                  href="#grading-tool-introduction"
                  className="block p-4 hover:bg-gray-100 indent-8"
                >
                  評分工具介紹
                </a>
              </li>
              <li>
                <a
                  href="#add-alice-course-content"
                  className="block p-4 hover:bg-gray-100 indent-8"
                >
                  新增ALICE課程內容
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
