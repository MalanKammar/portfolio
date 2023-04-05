import React from 'react';
import './styles/project.css'

function Projects(props){
    return(
        <section className="projects">
            <div className='container'>
               <div className='row'>
                   <div className='col-md-12 text-center mt-5'>
                       <h3 className='display-3 text-title'>Projects</h3>
                   </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-5 mb-3 d-flex justify-content-center">
                    <ul className="nav nav-pills" id="project" role='tablist'>
                        <li className="nav-item">
                            <buttoon className="nav-link active " id="html" data-bs-toggle="tab" data-bs-target="#nav-html">HTML & CSS</buttoon>
                        </li>
                        <li className="nav-item">
                            <buttoon className="nav-link" id="js" data-bs-toggle="tab" data-bs-target="#nav-js">JAVASCRIPT</buttoon>
                        </li>
                        <li className="nav-item">
                            <buttoon className="nav-link " id="react" data-bs-toggle="tab" data-bs-target="#nav-react">REACT</buttoon>
                        </li>
                        <li className="nav-item">
                            <buttoon className="nav-link" id="mern" data-bs-toggle="tab" data-bs-target="#nav-mern">MERN</buttoon>
                        </li>
                    </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                    <div className="tab-content mt-3 mb-3" id="project-tab">
                        {/* first panel */}
                        <div className="tab-pane fade show active" id="nav-html">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="text-success text-center">HTMl and CSS Projects</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                       <div className="col-md-3 mt-2">
                                        <div className="card shadow-lg">
                                            <img src="https://picsum.photos/id/243/400/400" alt="" className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="text-center text-info">Project-1</h5>
                                                <div className="d-flex justify-content-between">
                                                    <a href="#" className="btn btn-outline-success btn-sm">Preview</a>
                                                    <a href="#" className="btn btn-outline-secondary btn-sm">Code</a>
                                                </div>
                                            </div>
                                        </div>
                                       </div>
                                       <div className="col-md-3 mt-2">
                                        <div className="card shadow-lg">
                                            <img src="https://picsum.photos/id/243/400/400" alt="" className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="text-center text-info">Project-2</h5>
                                                <div className="d-flex justify-content-between">
                                                    <a href="#" className="btn btn-outline-success btn-sm">Preview</a>
                                                    <a href="#" className="btn btn-outline-secondary btn-sm">Code</a>
                                                </div>
                                            </div>
                                        </div>
                                       </div>
                                       <div className="col-md-3 mt-2">
                                        <div className="card shadow-lg">
                                            <img src="https://picsum.photos/id/243/400/400" alt="" className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="text-center text-info">Project-3</h5>
                                                <div className="d-flex justify-content-between">
                                                    <a href="#" className="btn btn-outline-success btn-sm">Preview</a>
                                                    <a href="#" className="btn btn-outline-secondary btn-sm">Code</a>
                                                </div>
                                            </div>
                                        </div>
                                       </div>
                                       <div className="col-md-3 mt-2">
                                        <div className="card shadow-lg">
                                            <img src="https://picsum.photos/id/243/400/400" alt="" className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="text-center text-info">Project-4</h5>
                                                <div className="d-flex justify-content-between">
                                                    <a href="#" className="btn btn-outline-success btn-sm">Preview</a>
                                                    <a href="#" className="btn btn-outline-secondary btn-sm">Code</a>
                                                </div>
                                            </div>
                                        </div>
                                       </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-js">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="text-success text-center">JS Projects</h5>
                                </div>
                                <div className="card-body"></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-react">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="text-success text-center">React Projects</h5>
                                </div>
                                <div className="card-body"></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-mern">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="text-success text-center">MERN Projects</h5>
                                </div>
                                <div className="card-body"></div>
                            </div>
                        </div>
                    </div>
                </div>

              </div>
           </div>
        </section>
    )
}
export default Projects