import React, { useContext, useEffect } from "react";
import { BreakContexte } from "../contexte/BreakContexte";
import { Link } from "react-router-dom";
import AlertName from "../components/AlertName";
import Spinner from "../components/Spinner";

const Acteurs = () => {
  const { fetchActeurs, acteurs, loading } = useContext(BreakContexte);
  useEffect(() => {
    fetchActeurs();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner classname={"mt-32"} />
      ) : (
        <>
          <AlertName />
          <div className="pt-4 pb-44 sm:pb-32 px-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {acteurs.map((acteur) => {
              const { id, login, avatar_url } = acteur;
              return (
                <div
                  key={id}
                  className="card card-side px-2 bg-secondary-content shadow-2xl"
                >
                  <div className="avatar my-auto">
                    <div className="mask mask-squircle w-36 h-36">
                      <img
                        className="object-top"
                        src={avatar_url}
                        alt="Photo"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title m-auto">
                      Login: <span className="text-red-600">{login}</span>
                    </h2>
                    <div className="card-actions m-auto">
                      <Link to={`/acteurs/${login}`}>
                        <button className="btn btn-outline btn-primary">
                          Plus
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Acteurs;
