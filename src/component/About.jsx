import React from 'react'
import "./styles/about.css"

function About(props){
    return(
        <section id="about">
            <div className='container mt-5 p-3'>
                <div className="section-title text-center">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ipsum deleniti minus earum molestiae quos provident tenetur debitis nulla sit. Maiores, nemo dicta assumenda non eius id est dolorem amet.</p>
                </div>
                {/* personal info  */}
            <div className='row'>
                <div className='col-md-4 col-lg-4'>
                    <img src={'https://picsum.photos/id/544/500/500'} alt="no image" className='img-fluid img-thumbnail' />
                </div>

                <div className="col-lg-8 col-md-8 pt-lg-0 content">
                    <h3>Wb and Fullstack Developer</h3>
                    <p className="text-secondary">
                        <em>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sunt commodi quidem dicta quaerat autem dolore consequatur quia unde officiis odio reprehenderit ea, eos quis facere temporibus magni hic provident!
                        </em>
                    </p>
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <i className="bi bi-envelope-fill me-2"></i>
                                    <strong>Email</strong>
                                    <span className="text-success float-end">malan@gmail.com</span>
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-phone-fill me-2"></i>
                                    <strong>Mobile</strong>
                                    <span className="text-success float-end">9988776655</span>
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-browser-edge me-2"></i>
                                    <strong>Website</strong>
                                    <span className="text-success float-end">www.abc.com</span>
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-globe me-2"></i>
                                    <strong>City</strong>
                                    <span className="text-success float-end">Banglore</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <i className="bi bi-patch-check me-2"></i>
                                    <strong>Certificate</strong>
                                    <span className="text-success float-end">On FrontEnd</span>
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-book me-2"></i>
                                    <strong>Qualification</strong>
                                    <span className="text-success float-end">BCA</span>
                                </li>
                                {/* <li className="list-group-item">
                                    <i className="bi bi-browser-edge me-2"></i>
                                    <strong>Website</strong>
                                    <span className="text-success float-end">www.abc.com</span>
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-globe me-2"></i>
                                    <strong>City</strong>
                                    <span className="text-success float-end">Banglore</span>
                                </li> */}
                                <li className="list-group-item d-grid">
                                    <a href={''} target='_blank' className='btn btn-outline-info'>
                                        <i className="bi bi-arrow-down">Download CV</i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* skills  */}
            <div className="section-title text-center">
                    <h2>Skills</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ipsum deleniti minus earum molestiae quos provident tenetur debitis nulla sit. Maiores, nemo dicta assumenda non eius id est dolorem amet.</p>
                </div>

            <div className="row skills-content">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="sill-block mt-3 mb-3">
                        <strong className='text-success'>HTML <i className="val float-end">98%</i></strong>
                        <div className="progress" role="progressbar">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:'98%'}}>98%</div>
                        </div>
                    </div>
                    <div className="sill-block mt-3 mb-3">
                        <strong className='text-success'>CSS <i className="val float-end">88%</i></strong>
                        <div className="progress" role="progressbar">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{width:'88%'}}>88%</div>
                        </div>
                    </div>
                    <div className="sill-block mt-3 mb-3">
                        <strong className='text-success'>Javascript <i className="val float-end">70%</i></strong>
                        <div className="progress" role="progressbar">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width:'70%'}}>70%</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="sill-block mt-3 mb-3">
                        <strong className='text-info'>Bootstrap <i className="val float-end">95%</i></strong>
                        <div className="progress" role="progressbar">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width:'95%'}}>95%</div>
                        </div>
                    </div>
                    <div className="sill-block mt-3 mb-3">
                        <strong className='text-danger'>React<i className="val float-end">50%</i></strong>
                        <div className="progress" role="progressbar">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:'50%'}}>50%</div>
                        </div>
                    </div>
                    <div className="sill-block mt-3 mb-3">
                        <strong className='text-dark'>Express js<i className="val float-end">67%</i></strong>
                        <div className="progress" role="progressbar">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" style={{width:'67%'}}>67%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
export default About