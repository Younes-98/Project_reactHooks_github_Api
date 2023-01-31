import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Acteur from "../components/Acteur";
import { BreakContexte } from "../contexte/BreakContexte";
import AlertName from "../components/AlertName";
import Spinner from "../components/Spinner";

const ActeursDetail = () => {
  const { login } = useParams();

  const {
    loading,
    acteurNom,
    fetchActeur,
    acteur,
    followers,
    following,
    clearActeur,
  } = useContext(BreakContexte);

  useEffect(() => {
    if (login !== "") {
      fetchActeur(login);
    }
    return () => {
      clearActeur();
    };
  }, []);

  return (
    <>
      <div>
        <AlertName />
      </div>
      {loading ? (
        <Spinner classname={"mt-32"} />
      ) : (
        <>
          <Acteur
            followerse={followers}
            followings={following}
            login={login}
            acteur={acteur}
          />
        </>
      )}
    </>
  );
};

export default ActeursDetail;
