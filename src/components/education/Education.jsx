import React from 'react'
import "../education/education.css";

const Education = () => {
  return (
    <>
    <section className="quslification section " id='education'>
        <h2 className="section__title">Education</h2>
        <span className="section__subtitle">My education</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button button--flex qualification__active">
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className="qualification__button button--flex">
                    {/* <i className="uil uil-image qualification__icon"></i>Experience */}
                </div>
            </div>
            <div className="qualification__sections">
                <div className="qualification__content"></div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Shree Gyan Mandir School</h3>
                            <span className="qualification__subtitle"><i class="fa-solid fa-location-dot"></i>Thuthi Jaijaipur(CG)</span>
                            <div className="qualification__calender">
                                <li className="uil uil-calendar-alt"></li> 2008-2010
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">G.S.C Conv.Mod.Hr.Sec School</h3>
                            <span className="qualification__subtitle"><i class="fa-solid fa-location-dot"></i>Jaijaipur(CG)</span>
                            <div className="qualification__calender">
                                <li className="uil uil-calendar-alt"></li> 2011-2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Rungta College Of Engineering Of Tech.R1</h3>
                            <span className="qualification__subtitle"><i class="fa-solid fa-location-dot"></i>Bhilai(CG)</span>
                            <div className="qualification__calender">
                                <li className="uil uil-calendar-alt"></li> 202-2026
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Education