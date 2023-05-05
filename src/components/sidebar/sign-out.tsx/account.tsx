import { signOut, useSession, signIn } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import dummypicture from "../../../../public/dummy-profile.svg";

function AccountButton() {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef: any = useRef(null);

  const handleSignOut = async () => {
    await signOut();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutsideDropdown = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      window.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

  if (!session) {
    return null;
  }

  const {
    user: { image, email },
  }: any = session;

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between w-full rounded-lg py-2 px-2 cursor-pointer dropdownbutton"
        onClick={toggleDropdown}
        style={{ display: "flex" }}
      >
        <div className="flex items-center space-x-2">
          <img
            src={image ? image : dummypicture.src}
            alt="Profile Picture"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm overflow-hidden relative">
            <div className="absolute inset-0 mask-vignette" />
            {email}
          </span>
        </div>
        <div className="ml-3">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 flex-shrink-0 text-gray-400"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="dp">
          <div
            className="absolute left-0 right-0 bg-gray-800 rounded overflow-hidden shadow-lg"
            ref={dropdownRef}
            style={{ bottom: "100%" }}
          >
            <div
              className="py-2 px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
              onClick={handleSignOut}
            >
              Sign Out
            </div>
            <div className="flex items-center mx-auto border-b-2 border-white/5"></div>

            <div
              className="py-2 px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
              onClick={() => signIn("google")}
            >
              Change Account
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
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
        .mask-vignette {
          mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0) 80%
          );
        }
        .dp {
          z-index: 1;
        }
      `}</style>
    </div>
  );
}

export default AccountButton;
