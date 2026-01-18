import React from 'react';

const Footer = () => {
    return (
        <>
            <section className="py-4 fs-1 text-center background-9">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a
                                className="d-inline-block px-2 color-3"
                                href="https://www.facebook.com/robosustofficial/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="fa fa-facebook"></span>
                            </a>
                            <a
                                className="d-inline-block px-2 color-3"
                                href="https://www.youtube.com/@robosustofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="fa fa-youtube"></span>
                            </a>
                            <a
                                className="d-inline-block px-2 color-3"
                                href="https://bd.linkedin.com/company/robosust"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="background-primary text-center py-6">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col">
                            <p className="text-uppercase color-9 ls mb-3">
                                Driving innovation in robotics with sustainability at the core
                            </p>
                            <p className="color-5 mb-0">
                                Stay connected with us on{' '}
                                <a
                                    className="color-6"
                                    href="https://www.facebook.com/robosustofficial/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Facebook
                                </a>{' '}
                                for the latest updates and advancements.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-auto">
                            <img
                                src="/assets/images/logorobosut.png"
                                alt="Robo SUST Logo"
                                className="img-fluid"
                                style={{ maxHeight: '80px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
