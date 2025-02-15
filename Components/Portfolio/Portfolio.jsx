import React from 'react'

export default function Portfolio() {
  return (
   <>
  <main className="main-portfolio">
        <h1 className="portfolio-head">Portfolio </h1>
  <div className="main-portfolio-container">
    <div className="portfolio-container">
      <div className="child-container1">
        <h1 className="designer">Designer</h1>
        <div className="para">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elite?
        </div>
      </div>
      <div className="child-container2">
        {" "}
        <h1 className="developer"> Developer</h1>
        <div className="para">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elie?
        </div>
      </div>
    </div>
  </div>
  <div className="para">Lorem ipsum dolor sit amet.</div>
  <div className="card-container">
    <div className="card ">
      <div className="card-text-container html-container">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum! */}
      </div>
      <div>
        <p className="card-link">
          Lorem ipsum dolor sit amet.um dolor sit amet.
        </p>
      </div>
    </div>
    <div className="card ">
      <div className="card-text-container css-container">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum! */}
      </div>
      <div>
        <p className="card-link">
          Lorem ipsum dolor sit amet.um dolor sit amet.
        </p>
      </div>
    </div>
    <div className="card ">
      <div className="card-text-container js-container">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum! */}
      </div>
      <div>
        <p className="card-link">
          Lorem ipsum dolor sit amet.um dolor sit amet.
        </p>
      </div>
    </div>
  </div>
</main>


   </>
  )
}
