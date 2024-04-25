import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import PropTypes from "prop-types";

function Sidebar({className}) {
    Sidebar.propTypes = {
        className: PropTypes.string,
    };

    const [isDropdownOpenGettingStarted, setIsDropdownOpenGettingStarted] = useState(false);
    const isDropdownOpenGettingStartedOpen = () => {setIsDropdownOpenGettingStarted(!isDropdownOpenGettingStarted);};
    const [isDropdownOpenTeacherTools, setIsDropdownOpenTeacherTools] = useState(false);
    const isDropdownOpenTeacherToolsOpen = () => {setIsDropdownOpenTeacherTools(!isDropdownOpenTeacherTools);};

    return (
        <div className={`h-full w-64 bg-white text-gray-800 shadow-md  ${className}`}>
            <ul className="space-y-2">
                <li>
                    <a href="#home" className="block p-4 hover:bg-gray-100">
                        Home
                    </a>
                </li>
                <li className="relative">
                    <button
                        onClick={isDropdownOpenGettingStartedOpen}
                        className="w-full text-left block p-4 hover:bg-gray-100 focus:outline-none"
                    >
                        快速開始
                        <span className="absolute right-4 top-5">
                            {isDropdownOpenGettingStarted ? <SlArrowDown/> : <SlArrowRight/>}
                        </span>
                    </button>
                    <div
                        className={`transition-[max-height] duration-700 ease-in-out overflow-hidden ${isDropdownOpenGettingStarted ? "max-h-60" : "max-h-0"
                            }`}
                    >
                        <ul>
                            <li>
                                <a href="#StartingGuideRegister" className="block p-4 hover:bg-gray-100 indent-8">
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

                        </ul>
                    </div>
                </li>
                <li className="relative">
                    <button
                        onClick={isDropdownOpenTeacherToolsOpen}
                        className="w-full text-left block p-4 hover:bg-gray-100 focus:outline-none"
                    >
                        教師工具介紹
                        <span className="absolute right-4 top-5">
                            {isDropdownOpenTeacherTools ? <SlArrowDown/> : <SlArrowRight/>}
                        </span>
                    </button>
                    <div
                        className={`transition-[max-height] duration-700 ease-in-out overflow-hidden ${isDropdownOpenTeacherTools ? "max-h-60" : "max-h-0"
                            }`}
                    >
                        <ul>
                            <li>
                                <a href="#TeacherToolsClassShow" className="block p-4 hover:bg-gray-100 indent-8">
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
    );
}

export default Sidebar;
