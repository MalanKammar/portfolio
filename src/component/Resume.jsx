import React from 'react'
import './styles/resume.css'

function Resume(props){
    return(
        <section id="resume">
            <div className="container mt-5 p-3">
                <div className="section-title text-center">
                    <h2 className="text-info display-4">Resume</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nisi assumenda officiis in commodi modi accusamus qui aut, eum pariatur corporis debitis labore? Debitis ab harum incidunt nihil, recusandae voluptate.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h6 className="display-6 text-secondary">Education</h6>
                        <div className="resume-item pb-0">
                            <h4>Masters Degree</h4>
                            <h5>2021-2023</h5>
                            <p><em>university/college name,cityname</em></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, et. Quos quo perferendis sapiente excepturi.</p>
                        </div>
                        <div className="resume-item pb-0">
                            <h4>Degree</h4>
                            <h5>2019-2021</h5>
                            <p><em>university/college name,cityname</em></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, et. Quos quo perferendis sapiente excepturi.</p>
                        </div>
                        <div className="resume-item pb-0">
                            <h4> Diploma</h4>
                            <h5>2015-2019</h5>
                            <p><em>university/college name,cityname</em></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, et. Quos quo perferendis sapiente excepturi.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h6 className="display-6 text-secondary">Certifications</h6>
                        <div className="resume-item pb-0">
                            <h4>MERN Stack Certification</h4>
                            <h5>2023</h5>
                            <p><em>Be-practical Tech Solutions,Banglore</em></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, et. Quos quo perferendis sapiente excepturi.</p>
                        </div>
                        <div className="resume-item pb-0">
                            <h4> Cyber Security</h4>
                            <h5>2015-2019</h5>
                            <p><em>university/college name,cityname</em></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, et. Quos quo perferendis sapiente excepturi.</p>
                        </div>
                        <div className="resume-item pb-0">
                            <h4> Data science</h4>
                            <h5>2015-2019</h5>
                            <p><em>university/college name,cityname</em></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, et. Quos quo perferendis sapiente excepturi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Resume