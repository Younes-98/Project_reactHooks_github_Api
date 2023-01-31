import React from "react";
import { BreakContexte } from "../contexte/BreakContexte";
import { useContext } from "react";
import Spinner from "./Spinner";

const AlertName = () => {
  const { name, setName, acteurNom, nameSear } = useContext(BreakContexte);

  if (name !== "" && acteurNom.login === undefined) {
    return <Spinner />;
  } else {
    return (
      <div>
        {nameSear !== "" && (
          <div className="alert flex justify-center mx-auto mt-2 pt-3 text-black shadow-3xl w-1/2 md:1/3">
            <div>
              <p className="text-primary text-md md:text-2xl">
                {acteurNom.login}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setName(acteurNom.login)}
                className="stroke-current flex-shrink-0 h-6 w-6 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default AlertName;
