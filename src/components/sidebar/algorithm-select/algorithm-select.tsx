import { useState, useEffect, useRef, useContext } from "react";
import { BiBrain } from "react-icons/bi";

import { AlgoContext } from "@/context/algo-context";

const AlgorithmSelect = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Boyer Moore");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const {setCurrentAlgo} = useContext(AlgoContext);
  
  useEffect(() => (
    setCurrentAlgo("bm")
  ), []);

  const handleAlgorithmChange = (e: any) => {
    if(e.target.value === "bm") {
      setSelectedAlgorithm("Boyer Moore");
    } else {
      setSelectedAlgorithm("Knuth-Morris-Pratt");
    }
    setCurrentAlgo(e.target.value);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutsideDropdown = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      window.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`absolute left-0 right-0 bottom-full bg-gray-800 rounded overflow-hidden shadow-lg dp ${
          isDropdownOpen ? "open" : ""
        }`}
        style={{ pointerEvents: isDropdownOpen ? "auto" : "none" }}
      >
        <div
          className="py-2 px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => {
            if (isDropdownOpen) {
              handleAlgorithmChange({ target: { value: "bm" } });
            }
          }}
        >
          Boyer Moore
        </div>
        <div className="flex items-center mx-auto border-b-2 border-white/5"></div>
        <div
          className="py-2 px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => {
            if (isDropdownOpen) {
              handleAlgorithmChange({ target: { value: "kmp" } });
            }
          }}
        >
          Knuth-Morris-Pratt
        </div>
      </div>
      <div
        className="flex items-center justify-between w-full rounded-lg py-2 px-2 cursor-pointer dropdownbutton"
        onClick={toggleDropdown}
        style={{ display: "flex" }}
      >
        <div className="flex items-center">
          <BiBrain className="text-gray-400 w-6 h-6" />
          <span className="ml-2 text-sm">{selectedAlgorithm}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <style jsx>{`
        .dp {
          border-radius: 0.5rem 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .dp.open {
          opacity: 1;
        }
        .dropdown {
          background-color: #050509;
          transition: background-color 0.3s ease;
        }
        .dropdown:hover {
          background-color: #6e6e80;
          cursor: pointer;
        }
        .dropdownbutton {
          transition: background-color 0.3s ease;
        }
        .dropdownbutton:hover {
          background-color: #343541;
        }
        .pembatas{
            border-bottom: 1px solid #ffffff;
        }
      `}</style>
    </div>
  );
};

export default AlgorithmSelect;
