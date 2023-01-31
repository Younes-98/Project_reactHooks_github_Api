import React from "react";
import { useNavigate } from "react-router-dom";

const Acteur = ({ acteur, followerse, followings }) => {
  const {
    name,
    login,
    avatar_url,
    location,
    followers,
    following,
    created_at,
    public_repos,
    email,
  } = acteur;

  const navigate = useNavigate();
  const retour = () => {
    navigate("/acteurs");
  };

  return (
    <div className="flex h-[100vh] items-start justify-center from-yellow-200 via-red-300 to-blue-300 bg-gradient-to-br shadow-2xl">
      <div className="bg-white md:w-[700px] shadow-md rounded-md px-6 py-4 mx-6 lg:mt-[90px] mt-[30px] mb-[100px]">
        <div className="sm:flex sm:justify-between">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src={avatar_url}
              alt={avatar_url}
            />
            <div className="ml-2">
              <h3 className="text-lg text-gray-800 font-medium">{name}</h3>
              <span className="text-gray-600">{email}</span>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <button className="flex items-center text-white bg-blue-600 rounded px-2 py-1 hover:bg-blue-500 focus:outline-none focus:shadow-outline">
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="ml-1 text-sm" onClick={() => retour()}>
                return
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <h4 className="text-gray-600 text-sm">Login</h4>
            <span className="mt-2 text-xl font-medium text-gray-800">
              {login}
            </span>
          </div>
          <div>
            <h4 className="text-gray-600 text-sm">Submissions</h4>
            <span className="mt-2 text-xl font-medium text-gray-800">
              12171
            </span>
          </div>
          <div>
            <h4 className="text-gray-600 text-sm">Location</h4>
            <span className="mt-2 text-xl font-medium text-gray-800">
              {location}
            </span>
          </div>
        </div>
        <div className="mt-3">
          <h4 className="text-gray-600 text-sm">created_at</h4>
          <span className="mt-2 text-xl font-medium text-gray-800">
            {created_at}
          </span>
        </div>
        <div className="mt-4">
          <h4 className="text-sm text-gray-600">{followers} Followers</h4>
          <div className="flex items-center overflow-hidden mt-2">
            {followerse.map((folow) => {
              const { id, avatar_url } = folow;
              return (
                <>
                  <img
                    key={id}
                    className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
                    src={avatar_url}
                    alt="followers"
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm text-gray-600">{following} Following</h4>
          <div className="flex items-center overflow-hidden mt-2">
            {followings.map((folow) => {
              const { id, avatar_url } = folow;
              return (
                <>
                  <img
                    key={id}
                    className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
                    src={avatar_url}
                    alt="followings"
                  />
                </>
              );
            })}
          </div>
        </div>
        <a className="block mt-4 text-blue-400 hover:underline" href="#">
          {public_repos} Public repository
        </a>
      </div>
    </div>
  );
};

export default Acteur;
