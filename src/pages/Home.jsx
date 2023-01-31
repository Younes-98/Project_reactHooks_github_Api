import React, { useContext, useEffect, useState } from "react";
import { BreakContexte } from "../contexte/BreakContexte";
import { Link } from "react-router-dom";
import AlertName from "../components/AlertName";
const Home = () => {
  const { fetchActeurs, acteurs } = useContext(BreakContexte);
  useEffect(() => {
    fetchActeurs();
  }, []);

  return (
    <div className="bg-base-200 mb-2">
      <AlertName />
      <div className="hero min-h-screen pb-32">
        <div className="hero-content flex-grow-0 flex-col px-6 sm:px-20">
          <div className="carousel rounded-box">
            {acteurs.map((acteur) => (
              <div key={acteur.id} className="carousel-item w-full">
                <img
                  src={acteur.avatar_url}
                  className="h-80"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
            ))}
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">API GITHUB</h1>
            <p className="py-6">
              GitHub is a for-profit company that offers a cloud-based Git
              repository hosting service. Essentially, it makes it a lot easier
              for individuals and teams to use Git for version control and
              collaboration.
            </p>
            <Link to="/acteurs" className="btn btn-primary">
              Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
