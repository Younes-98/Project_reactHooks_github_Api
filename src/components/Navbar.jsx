import React, { useContext, useEffect } from "react";
import { BreakContexte } from "../contexte/BreakContexte";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const {
    fetchByName,
    fetchActeur,
    acteurs,
    name,
    setName,
    clearnomActeur,
    nameSear,
    setNameSear,
    acteur,
    acteurNom,
  } = useContext(BreakContexte);

  const navigate = useNavigate();
  const change = (e) => {
    setName(e.target.value);
  };

  // Pour avoir le nameSear et l'utiliser dans fetchByName
  const getSearchName = () => {
    if (name !== "") {
      acteurs.filter((acte) => {
        if (acte.login.toLowerCase().includes(name.toLowerCase())) {
          setNameSear(acte.login);
        }
      });
    } else {
      setNameSear("");
    }
  };

  useEffect(() => {
    if (nameSear && nameSear !== "") {
      fetchByName(nameSear);
    }
  }, [nameSear]);
  getSearchName();

  const rechercher = () => {
    fetchActeur(nameSear);
    navigate(`/acteurs/${acteur.login}`);
    setName("");
  };

  const supprimer = () => {
    setName("");
  };

  return (
    <div className="navbar flex flex-col justify-between sm:flex-row bg-info-content px-4">
      <div>
        <p className="normal-case text-md md:text-xl mb-2 sm:mb-0 text-white">
          GITHUB
        </p>
      </div>
      <div className="justify-end flex-none gap-2 mb-2 sm:mb-0">
        <div className="form-control">
          <input
            type="text"
            placeholder="Chercher par nom"
            value={name}
            onChange={change}
            className="input input-bordered input-sm"
          />
        </div>
        <div className={name === "" ? "invisible" : "visible"}>
          <button
            className="inline-flex animate-pulse items-center p-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
            onClick={() => supprimer()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
        <button
          className="flex items-center justify-center px-4 border-l"
          disabled={name === "" || acteurNom.login === undefined ? true : false}
          onClick={() => rechercher()}
        >
          <svg
            className={`w-6 h-6 text-gray-600 ${
              name !== "" && "text-gray-200"
            }`}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
