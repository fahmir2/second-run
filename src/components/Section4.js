import React from 'react';

function Section4(){
    return         <section class="tm-section pt-2 pb-3">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 tm-flex-center-v tm-section-left">
                                    <form action="#" class="tm-contact-form" method="POST">
                                        <div class="form-group mb-4">
                                            <input type="text" id="contact_name" name="contact_name" class="form-control" placeholder="Name" required/>
                                        </div>
                                        <div class="form-group mb-4">
                                            <input type="email" id="contact_email" name="contact_email" class="form-control" placeholder="Email" required/>
                                        </div>
                                        <div class="form-group mb-5">
                                            <textarea rows="5" id="contact_message" name="contact_message" class="form-control" placeholder="Message..." required></textarea>
                                        </div>
                                        <div class="form-group mb-0 text-right">
                                            <button type="submit" class="btn tm-btn-primary tm-send-btn">Send</button>
                                        </div>
                                    </form>
                                </div>
                            
                            </div>
                        </div>
                    </section>
};


export default Section4;