import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Frontend Designer</h3>

    <div className="skills__box">
      <div className="skills__group">
        <div className="skills__data">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">HTML</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">CSS</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">JavaScript</h3>
            <span className="skills__level">Basic</span>
          </div>
        </div>
      </div>

      <div className="skills__group">
        <div className="skills__data">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">ReactJs</h3>
            <span className="skills__level">Basic</span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">Git & GitHub</h3>
            <span className="skills__level">Basic</span>
          </div>
        </div>

        <div className="skills__data">
          {/* <i className="bx bx-badge-check"></i> */}

          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Frontend