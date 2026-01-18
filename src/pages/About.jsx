import React from 'react';

const About = () => {
    return (
        <>
            {/* Header */}
            <section className="py-9 overflow-hidden text-center">
                <div
                    className="background-holder overlay overlay-1 parallax"
                    style={{ backgroundImage: 'url(/assets/images/about_header.jpg)' }}
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

            {/* Content */}
            <section className="text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <h3 className="mb-4"></h3>
                        </div>
                        <div className="col-lg-6">
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-10 overflow-hidden text-center">
                <div
                    className="background-holder overlay overlay-1 parallax"
                    style={{ backgroundImage: 'url(/assets/images/about_team.jpg)' }}
                    data-rellax-percentage="0.5"
                ></div>
                <div className="container">
                    <div className="row" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="col">
                            <div className="overflow-hidden">
                                <h1 className="fs-5 fs-sm-6 color-white mb-3" data-zanim='{"delay":0}'></h1>
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="ls fw-300 text-uppercase color-9 mb-0" data-zanim='{"delay":0.1}'></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Careers Section */}
            <section className="py-10 overflow-hidden text-center">
                <div
                    className="background-holder overlay overlay-1 parallax"
                    style={{ backgroundImage: 'url(/assets/images/about_careers.jpg)' }}
                    data-rellax-percentage="0.5"
                ></div>
                <div className="container">
                    <div className="row" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="col">
                            <div className="overflow-hidden">
                                <h1 className="fs-5 fs-sm-6 color-white mb-3" data-zanim='{"delay":0}'></h1>
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="ls fw-300 text-uppercase color-9 mb-0" data-zanim='{"delay":0.1}'></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
