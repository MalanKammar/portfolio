import React from 'react'

function Contact(props){
    return(
        <section id="contact">
            <div className='container'>
               <section className='section-title mt-5'>
                 <h3 className="text-title display-3 mt-5 text-center">Contact</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore laudantium eaque ut sequi nostrum, molestiae ullam fugit harum minima sapiente aliquam vitae nobis ipsum mollitia! Nam cum expedita error minus.</p>
                </section>
                <div className="row mt-5">
                    <div className="col-md-4 col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4 className="text-title">Location</h4>
                                <p>A1023,4Th Cross ,Bengaluru-560079</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4 className="text-title">Email</h4>
                                <p>malan@gmail.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4 className="text-title">call</h4>
                                <p>9988776655</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8 mt-2 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <form action="" autoComplete='off'>
                                       <div className="form-group mt-2">
                                         <label htmlFor="name">FullName</label>
                                         <input type="text" name="name" id="name" className="form-control"  required/>
                                        </div> 
                                        <div className="form-group mt-2">
                                         <label htmlFor="email">Email</label>
                                         <input type="text" name="email" id="email" className="form-control"  required/>
                                        </div> 

                                        <div className="form-group mt-2">
                                         <label htmlFor="message">Message</label>
                                         <textarea type="text" name="msg" id="msg" className="form-control"  required/>
                                        </div> 

                                        <div className="form-group mt-2">
                                         <input type="submit" value="submit" className="btn btn-outline-secondary"/>
                                        </div> 
                                    </form>
                                </div>
                             </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact