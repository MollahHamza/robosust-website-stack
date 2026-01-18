import React from 'react';

const Contact = () => {
    return (
        <>
            {/* Header */}
            <section className="py-9 overflow-hidden text-center">
                <div
                    className="background-holder overlay overlay-1 parallax"
                    style={{ backgroundImage: 'url(/assets/images/contacts_header.jpg)' }}
                ></div>
                <div className="container">
                    <div className="row" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="col">
                            <div className="overflow-hidden">
                                <h1 className="fs-5 fs-sm-6 color-white mb-3" data-zanim='{"delay":0}'></h1>
                            </div>
                            <div className="overflow-hidden">
                                <p className="fs-2 fw-300 ls color-8 text-uppercase" data-zanim='{"delay":0.1}'></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="background-11">
                <div className="container">
                    <div className="row align-items-stretch justify-content-center">
                        <div className="col-lg-4 mb-4">
                            <div className="row">
                                <div className="col-md-6 col-lg-12">
                                    <div className="mb-4 px-5 py-4 background-white">
                                        <h5 className="mb-3"></h5>
                                        <br /><br />
                                        <a href="tel:+47535383458"></a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12">
                                    <div className="mb-4 px-5 py-4 background-white">
                                        <h5 className="mb-3"></h5>
                                        <br /><br />
                                        <a href="tel:"></a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="px-5 py-4 background-white">
                                        <h5></h5>
                                        <a className="d-inline-block mt-2" href="#">
                                            <span className="fa fa-linkedin-square fs-2 mr-2 color-primary"></span>
                                        </a>
                                        <a className="d-inline-block mt-2" href="#">
                                            <span className="fa fa-twitter-square fs-2 mx-2 color-primary"></span>
                                        </a>
                                        <a className="d-inline-block mt-2" href="#">
                                            <span className="fa fa-facebook-square fs-2 mx-2 color-primary"></span>
                                        </a>
                                        <a className="d-inline-block mt-2" href="#">
                                            <span className="fa fa-google-plus-square fs-2 ml-2 color-primary"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mb-4">
                            <div className="background-white p-5">
                                <div
                                    className="googlemap"
                                    data-latlng="48.8583701,2.2922873,17"
                                    data-scrollwheel="false"
                                    data-icon="/assets/images/map-marker.png"
                                    data-zoom="13"
                                    data-theme="Silver"
                                    style={{ minHeight: '427.17px' }}
                                >
                                    <div className="marker-content py-3">
                                        <h5></h5>
                                        <p><br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="background-white p-5">
                                <h4></h4>
                                <form className="zform mt-3">
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" type="hidden" name="to" value="user@domain.extension" />
                                            <input className="form-control background-white" type="text" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-12 mt-4">
                                            <input className="form-control background-white" type="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-12 mt-4">
                                            <textarea className="form-control background-white" rows="11" placeholder="Enter your descriptions here..." required></textarea>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <div className="row">
                                                <div className="col-auto">
                                                    <button className="btn btn-md-lg btn-primary" type="submit">
                                                        <span className="color-white fw-600">Send Now</span>
                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <div className="zform-feedback"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
