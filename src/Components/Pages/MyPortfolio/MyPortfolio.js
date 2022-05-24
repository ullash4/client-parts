import React from "react";

function MyPortfolio() {
  return (
    <div className="my-10 px-14 lg:px-20">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-[494px] h-[455px] shadow-lg"
            src="https://i.ibb.co/W3Pbwz6/IMG-20220503-182007.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">Imran Mahmud Ullash</h2>
          <p className="font-bold text-xl">Email: programmerullash@gmail.com</p>
          <p className="font-bold text-xl">
            Education: Diploma in computer 5th semester- Tangail Polytechnic
            Institute
          </p>
          <p className="font-bold text-xl">
            Skills: Html, CSS, Bootstrap, TailwindCSS, Javascript, ES6,
            React.Js, React Router, React Query, AOS, Firebase, Node.Js,
            Express.Js, MongoDB
          </p>
          <p className="font-bold text-xl flex flex-col lg:flex-row justify-center items-center gap-2 ">
            Some Projects click to see:
            <a
              className="btn btn-md btn-primary mx-2"
              href="https://sports-wizard-e919a.web.app/"
              target="_blank"
            >
              SportsWizard
            </a>
            <a
              className="btn btn-md btn-primary mx-2"
              href="https://to-do-app-8fe72.web.app/"
              target="_blank"
            >
              To-do App
            </a>
            <a
              className="btn btn-md btn-primary mx-2"
              href="https://photopidea.web.app/"
              target="_blank"
            >
              PhotoPidea
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
