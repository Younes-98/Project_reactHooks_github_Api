import React, { createContext, useState } from "react";
import axios from "axios";
import BreakReducer from "./BreakReducer";
import { useReducer } from "react";

export const BreakContexte = createContext();

const BreakProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loadingbyname, setLoadingbyname] = useState(true);

  const initialState = {
    acteurs: [],
    acteur: {},
    acteurNom: {},
    followers: [],
    following: [],
  };
  const [state, dispatch] = useReducer(BreakReducer, initialState);

  const [name, setName] = useState("");
  const [nameSear, setNameSear] = useState("");

  const fetchActeurs = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.github.com/users");
      // console.log("Acteurs", response.data);
      dispatch({
        type: "GET_ACTEURS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const fetchActeur = async (login) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${login}`);
      dispatch({
        type: "GET_ACTEUR",
        payload: response.data,
      });
      // console.log("acteur", response.data);
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await axios.get(
        `https://api.github.com/users/${login}/followers`
      );
      dispatch({
        type: "GET_FOLLOWERS",
        payload: response.data,
      });
      // console.log("followers", response.data);
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await axios.get(
        `https://api.github.com/users/${login}/following`
      );
      dispatch({
        type: "GET_FOLLOWING",
        payload: response.data,
      });
      // console.log("followers", response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const fetchByName = async (login) => {
    setLoadingbyname(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${login}`);
      dispatch({
        type: "GET_ACTNAME",
        payload: response.data,
      });
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoadingbyname(false);
  };

  const clearActeur = () => {
    dispatch({ type: "REMOVE_ACTEUR" });
  };
  const clearnomActeur = () => {
    dispatch({ type: "REMOVE_NOMACTEUR" });
  };

  return (
    <BreakContexte.Provider
      value={{
        loading,
        fetchActeurs,
        acteurs: state.acteurs,
        fetchActeur,
        acteur: state.acteur,
        followers: state.followers,
        following: state.following,
        clearActeur,
        acteurNom: state.acteurNom,
        fetchByName,
        name,
        setName,
        clearnomActeur,
        nameSear,
        setNameSear,
        loadingbyname,
        setLoadingbyname,
      }}
    >
      {children}
    </BreakContexte.Provider>
  );
};

export default BreakProvider;
