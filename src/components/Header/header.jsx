import React from "react";


export const Header = (props) => {
  return (
    <header id="header ">
      <div class="d-flex justify-content-between">
        <div class="header-logo"><img src="images/logo.png" /></div>
        <ul class="header-contents d-flex">
          <li class="header-content-item list-unstyled"><a href="#home">Home</a></li>
          <li class="header-content-item list-unstyled"><a href="#resultados">Resultados</a></li>
          <li class="header-content-item list-unstyled"><a href="#planos">Planos</a></li>
          <li class="header-content-item list-unstyled"><a href="#queroSerAluno">Quero ser Aluno</a></li>
        </ul>
      </div>
    </header>
    /*
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    */
  );
};
