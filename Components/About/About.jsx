import React from 'react'

export default function About() {
  return (
  <>
  <main className="main-about">
  <div className="main-container flex-all">
    <div className="container margin-inline flex justify-between ">
      <div className="info-container flex justify-between flex-column">
        <div>
          <h1>Bethany Jones</h1>
          <div className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime{" "}
            <br />
            cum possimus accusamus quaerat est illo ab eius praesentium ad?
          </div>
        </div>
        <div className="about-link-container">
        <div className="media-container">
      <div className="media insta">
        <div className="insta1">
          <div className="insta2">
            <div className="insta3">
              <div className="insta4" />
            </div>
          </div>
        </div>
      </div>
      <div className="media x">
        {" "}
        <div className="x">X</div>
      </div>
      <div className="media linked-in">
        {" "}
        <div className="in">in</div>
      </div>
    </div>
        </div>
      </div>
      <div className="about-img-container">
        <img src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd2l0aCUyMHBjfGVufDB8fDB8fHww" />
      
      </div>
    </div>
  </div>
</main>

  </>
  )
}
