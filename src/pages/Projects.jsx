import React from 'react';

const Projects = () => {
    return (
        <>
            {/* Header */}
            <section className="py-9 overflow-hidden text-center">
                <div
                    className="background-holder overlay overlay-1 parallax"
                    style={{ backgroundImage: 'url(/assets/images/projectfinal.jpg)' }}
                ></div>
                <div className="container">
                    <div className="row" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="col">
                            <div className="overflow-hidden">
                                <h1 className="fs-5 fs-sm-6 color-white mb-3" data-zanim='{"delay":0}'>
                                    Innovation: Robotics Revolution
                                </h1>
                            </div>
                            <div className="overflow-hidden">
                                <p className="fs-2 fw-300 ls color-8 text-uppercase" data-zanim='{"delay":0.1}'>
                                    Next-Gen Automation Showcase
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Hunt 2025 Content */}
            <div style={{ backgroundColor: '#1a1a2e', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
                <h2 style={{ color: '#f9a826' }}>📣 RoboSUST Project Hunt 2025 - Event Recap</h2>
                <p style={{ fontSize: '16px', maxWidth: '800px', margin: 'auto' }}>
                    The <b>RoboSUST Project Hunt 2025</b> was a grand success! Newcomers and current members showcased their
                    innovative robotics projects, demonstrating creativity, problem-solving, and engineering excellence.
                </p>

                <h3 style={{ color: '#f9a826', marginTop: '20px' }}>🚀 Featured Projects</h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '15px' }}>
                    {/* Project 1 */}
                    <div style={{ backgroundColor: '#16213e', padding: '15px', borderRadius: '5px', width: '300px', textAlign: 'center' }}>
                        <img src="/assets/images/project/1.jpg" alt="Project 1" style={{ width: '100%', borderRadius: '5px' }} />
                        <h4 style={{ color: '#f9a826', marginTop: '10px' }}>Sign Language Recognition System</h4>
                        <p style={{ fontSize: '14px' }}>
                            This IoT-based system captures hand movements using motion sensors and translates them into text
                            and speech. The device detects specific gestures, displays the corresponding text on a screen,
                            and provides audio feedback, enabling seamless communication between deaf and non-deaf individuals.
                        </p>
                    </div>

                    {/* Project 2 */}
                    <div style={{ backgroundColor: '#16213e', padding: '15px', borderRadius: '5px', width: '300px', textAlign: 'center' }}>
                        <img src="/assets/images/project/2.jpg" alt="Project 2" style={{ width: '100%', borderRadius: '5px' }} />
                        <h4 style={{ color: '#f9a826', marginTop: '10px' }}>Autonomous Water Vehicle</h4>
                        <p style={{ fontSize: '14px' }}>
                            This IoT-powered autonomous water vehicle detects nearby vessels using ultrasonic and radar
                            sensors. It analyzes proximity data and adjusts its direction to avoid collisions. If a
                            potential collision is detected, the system can automatically stop the engine to ensure safety
                            in water navigation.
                        </p>
                    </div>

                    {/* Project 3 */}
                    <div style={{ backgroundColor: '#16213e', padding: '15px', borderRadius: '5px', width: '300px', textAlign: 'center' }}>
                        <img src="/assets/images/project/3.jpg" alt="Project 3" style={{ width: '100%', borderRadius: '5px' }} />
                        <h4 style={{ color: '#f9a826', marginTop: '10px' }}>Smart Garden System</h4>
                        <p style={{ fontSize: '14px' }}>
                            This IoT-powered Smart Garden system automates plant care by controlling a water pump, fan, and
                            monitoring environmental conditions. Sensors track temperature and humidity in real time,
                            triggering automated irrigation and ventilation systems to maintain optimal plant growth. Users
                            can also monitor and control the system remotely via a mobile app.
                        </p>
                    </div>
                </div>

                <p style={{ fontSize: '16px', maxWidth: '800px', margin: 'auto', marginTop: '20px' }}>
                    These are just a few of the amazing projects that were presented. We are incredibly proud of our
                    participants and look forward to seeing their future innovations!
                </p>

                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#f9a826', marginTop: '15px' }}>
                    Stay tuned for the next RoboSUST event! 🤖🔥
                </p>
            </div>
        </>
    );
};

export default Projects;
