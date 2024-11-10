import React, { useEffect, useState } from "react";
import { GoProjectSymlink } from "react-icons/go";
import projectApi from "../API/Project.json";
import { useQuery } from "@tanstack/react-query";

const Project = () => {
  const [popup, setPopup] = useState(false);
  const [link, setLink] = useState(null);

  const fetchGameData = async () => {
    const response = await fetch("https://gawade07.github.io/jsGame/");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response; // Return the JSON data
  };

  const { data, error, isLoading,isPending } = useQuery({
    queryKey: ['gameData'],
    queryFn: fetchGameData,
  });

  const handleBackToTouch = () => {
    setPopup(false);
    setLink(null); // Reset the link when closing the popup
  };

  const popupHandler = (e, project) => {
    e.stopPropagation(); // Prevent click event from bubbling up
    setLink(project.link); // Set the link to the selected project
    setPopup(true); // Open the popup
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popup && !e.target.closest(".viewCard")) {
        handleBackToTouch();
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [popup]);

  return (
    <section className="projects">
      <h2 className="Title">
        <GoProjectSymlink />
        Projects
      </h2>

      {popup && (
        <div className="viewCard">
          <div className="card">
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error fetching data: {error.message}</p>
            ) : (
              <iframe src={link} frameBorder="0"></iframe>
            )}
            <button onClick={handleBackToTouch} className="close-button">Close</button>
          </div>
        </div>
      )}

      <div className="project">
        {projectApi.map((pro) => {
          const { projectName, projectImage, id, technologies } = pro;
          return (
            <>
    {/* <div key={id} className="card">
              <p>{projectName}</p>
              <figure className="igds" onClick={(e) => popupHandler(e, pro)}>
                <img src={projectImage} alt={projectName} />
              </figure>

              <p>{technologies}</p>
              <p>{technologies}</p>
              <p>{technologies}</p>
              <p>{technologies}</p>
            </div>
             */}




             <div key={id} className="pCard">
            <h3>{projectName}</h3>
            <figure onClick={(e) => popupHandler(e, pro)}>
              <img src={projectImage} alt={projectName} />
            </figure>
           </div>
            </>
        
          );
        })}
      </div>
    </section>
  );
};

export default Project;
