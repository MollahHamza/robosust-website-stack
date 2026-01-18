import React from 'react';

const Home = () => {
    const achievements = [
        { img: 'NasaSpaceApp.jpg', text: '1st Runner-up at the NASA Space Apps Challenge Bangladesh 2024 with their project "EcoQuest: SDG Adventure." and Nominated for the global stages of the NASA Space Apps Challenge' },
        { img: 'Ghorar_gari.jpg', text: 'Team ঘোড়ার গাড়ি - 2nd Runner-up in the Chem-Competition at the BUET Chemical Fest 2024' },
        { img: 'Unovationhub_1.jpg', text: 'Team Automama- Secured a winning position in the Smart Unibator University Innovation Hub Program.' },
        { img: 'KUET-1.jpg', text: 'Team Void Sust- 2nd Runner-up at KUET Calibration LFR Contest.' },
        { img: 'Comsot.jpg', text: 'Team Ethereal Luminary-1st Runner-up in the BRAC University IEEE Satellite Expedition Contest - Phase II' },
        { img: 'KUET-2.jpg', text: 'Team SUST Mavericks - Champion and 1st Runner-up in the Calibration KUET - LFR Segment.' },
    ];

    const projects = [
        { img: 'automama.png', text: "It is Bangladesh's first-ever Level 2 autonomous car and aimed at advancing autonomous vehicle technology in Bangladesh.2d Camera Used for lane detection, object recognition, and navigation." },
        { img: 'orca.png', text: 'Autonomous Underwater Vehicle (AUV) developed by Team Onushondhan for SAUVC 2025. Key Features: Underwater cameras, IMU, depth sensors, and thrusters for autonomous navigation and task execution. Processing Unit: Powered by NVIDIA Jetson Nano for Al-based object detection and decision-making.' },
        { img: 'chemicar.png', text: 'Custom-built, 18 cell rechargeable lead-acid battery built by recycling lead plates from old batteries and an acid-base neutralization reaction using phenolphthalein as an Indicator is used as the stopping mechanism. A color sensor detects the color change, sending a signal to a microcontroller, which stops the motor' },
    ];

    const workshops = [
        { img: '1.jpg', text: 'Capturing moments of inspiration and innovation—where curiosity meets creativity!' },
        { img: '2.jpg', text: 'Guiding young minds, one idea at a time—mentors lighting the path to innovation!' },
        { img: '3.jpg', text: 'Grateful hearts and bright minds—thanking our inspiring Pycharm workshop instructor with a token of appreciation!' },
        { img: '4.jpg', text: 'Sparkling curiosity, one robot at a time—our young minds are ready to shape the future!' },
        { img: '5.jpg', text: 'Little minds, big dreams—future innovators in the making!' },
        { img: '6.jpg', text: 'Empowering the next generation of innovators through the limitless possibilities of robotics.' },
    ];

    const members = [
        { img: 'Nowshad.png', name: 'Noushad Sojib', dept: 'CSE,SUST', batch: '2009-10' },
        { img: 'Farhanul.png', name: 'Md Farhanul Islam', dept: 'EEE ,SUST', batch: '2012-13' },
        { img: 'Tawfiq.png', name: 'Taufiq Rahman', dept: 'IPE, SUST', batch: '2013-14' },
        { img: 'Umme Sumaya Jannat.png', name: 'Umme Sumaya Jannat', dept: 'CSE, SUST', batch: '2014-15' },
        { img: 'Ali Tarique Zaman.png', name: 'Ali Tarique Zaman', dept: 'CEE, SUST', batch: '2015-16' },
        { img: 'Anamul.png', name: 'Anamul Haque', dept: 'MEE, SUST', batch: '2016-17' },
    ];

    return (
        <>
            {/* Static Hero Section */}
            <section className="py-0 color-white" style={{ minHeight: '100vh', position: 'relative' }}>
                <div
                    className="background-holder overlay overlay-freya"
                    style={{ backgroundImage: 'url(/assets/images/home/cover-1.jpeg)' }}
                ></div>
                <div className="container">
                    <div className="row justify-content-start align-items-end pt-11 pb-6" style={{ minHeight: '100vh' }}>
                        <div className="col pb-lg-0">
                            <div className="row align-items-end">
                                <div className="col-lg">
                                    <div className="overflow-hidden">
                                        <p className="mb-1 text-uppercase ls animate-fade-up">
                                            Robosust
                                        </p>
                                    </div>
                                    <div className="overflow-hidden">
                                        <h2 className="color-white fw-500 mb-4 mb-lg-0 animate-fade-up delay-1">
                                            Robotics for glory
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About RoboSUST */}
            <section className="text-center background-white py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h2 className="mb-4" style={{ fontSize: '2rem', fontWeight: 'bold' }}>About RoboSUST</h2>
                            <p className="lead" style={{ fontSize: '1.25rem', fontWeight: 300 }}>
                                RoboSUST is a robotics-based organization of Shahjalal University of Science and Technology (SUST)
                                aimed at creating an open platform for students from all departments who wish to engage with robotics.
                                Starting from 2015, RoboSUST has achieved over 60 accomplishments, including the development of our
                                very own Ribo and Lee (humanoid robots).
                            </p>
                        </div>
                    </div>
                    <div className="row mt-6">
                        <div className="col-lg-4">
                            <div className="card mb-4" style={{ border: 'none', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s' }}>
                                <img className="card-img-top" src="/assets/images/home/intro-1.jpeg" alt="Ribo" style={{ height: '300px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                <div className="card-body" style={{ padding: '1.5rem' }}>
                                    <h5 className="card-title text-uppercase" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ribo</h5>
                                    <p className="card-text text-justify" style={{ fontSize: '1rem', color: '#6c757d' }}>
                                        RIBO is the first social interaction robot in Bangladesh, designed and developed by the 'ROBO SUST' team
                                        of Shahjalal University of Science and Technology. The robot can move its hands and eyes, walk slowly,
                                        and speak recorded Bengali sentences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="card mb-4" style={{ border: 'none', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s' }}>
                                <img className="card-img-top" src="/assets/images/home/intro-2.webp" alt="Li" style={{ height: '300px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                <div className="card-body" style={{ padding: '1.5rem' }}>
                                    <h5 className="card-title text-uppercase" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Li</h5>
                                    <p className="card-text text-justify" style={{ fontSize: '1rem', color: '#6c757d' }}>
                                        Li is an advanced humanoid robot that highlights a major achievement in robotics in Bangladesh.
                                        It can walk, understand and speak Bangla, identify faces, mimic expressions, and answer questions
                                        about Bangladesh and the Liberation War.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="card mb-4" style={{ border: 'none', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s' }}>
                                <img className="card-img-top" src="/assets/images/home/sustset.png" alt="SUSTsat-1" style={{ height: '300px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                <div className="card-body" style={{ padding: '1.5rem' }}>
                                    <h5 className="card-title text-uppercase" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>SUSTsat-1</h5>
                                    <p className="card-text text-justify" style={{ fontSize: '1rem', color: '#6c757d' }}>
                                        SUSTsat-1 is the first cubesatellite initiative from Shahjalal University of Science and Technology.
                                        Designed for amateur cubesat research, it supports sensor suite telemetry, audio, and image telemetry
                                        over a 433MHz channel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievement Section */}
            <section className="py-10 overflow-hidden text-center">
                <div
                    className="background-holder overlay overlay-1"
                    style={{ backgroundImage: 'url(/assets/images/home/agpbanner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex flex-column justify-content-between" style={{ minHeight: '80vh', paddingTop: '20vh', position: 'relative' }}>
                                <div className="overflow-hidden">
                                    <h1 className="fs-5 fs-sm-6 color-white mb-3 text-uppercase">Achievement</h1>
                                </div>
                                <div className="overflow-hidden mt-auto" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
                                    <p className="ls fw-300 text-uppercase color-9 mb-0" style={{ marginBottom: '50px' }}>
                                        Continuously leading the domain of research and technology in the university and even in the whole country.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievement Content */}
            <section className="text-center">
                <div className="container">
                    <div className="row custom-row">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="col-lg-6 mb-4">
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '66.67%', overflow: 'hidden' }}>
                                    <img className="w-100" src={`/assets/images/work/${achievement.img}`} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: '20pt', color: 'gray', marginTop: '10px', padding: '10px', backgroundColor: 'white', borderRadius: '5px' }}>
                                    {achievement.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ongoing Initiative */}
            <section className="py-10 overflow-hidden text-center">
                <div className="background-holder overlay overlay-1" style={{ backgroundImage: 'url(/assets/images/home/ongoing.jpg)' }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="overflow-hidden">
                                <h1 className="fs-5 fs-sm-6 color-white mb-3 text-uppercase">Ongoing Initiative</h1>
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="ls fw-300 text-uppercase color-9 mb-0">
                                    Pioneering advancements in research and technology within the university and across the nation.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ongoing Projects */}
            <section className="text-center">
                <div className="container">
                    <div className="row event-row">
                        {projects.map((project, index) => (
                            <div key={index} className="col-12 mb-4">
                                <div className="image-wrapper">
                                    <img className="w-100" src={`/assets/images/home/${project.img}`} alt="" />
                                </div>
                                <h4 className="mt-3" style={{ fontFamily: "'Futura PT', sans-serif", fontSize: '20px' }}>
                                    {project.text}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workshop and Seminars */}
            <section className="py-10 overflow-hidden text-center">
                <div className="background-holder overlay overlay-1" style={{ backgroundImage: 'url(/assets/images/home/workshopandseminar.jpg)' }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="overflow-hidden">
                                <h1 className="fs-5 fs-sm-6 color-white mb-3 text-uppercase">Workshop and Seminars</h1>
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="ls fw-300 text-uppercase color-9 mb-0">AI awareness workshop in JSPSC</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop Content */}
            <section className="text-center">
                <div className="container">
                    <div className="row event-row">
                        {workshops.map((workshop, index) => (
                            <div key={index} className="col-lg-6 mb-4">
                                <div className="image-wrapper">
                                    <img className="w-100" src={`/assets/images/workshop/${workshop.img}`} alt="" />
                                </div>
                                <h4 className="mt-3" style={{ fontFamily: "'Futura PT', sans-serif" }}>
                                    {workshop.text}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni Network */}
            <section className="py-10 overflow-hidden text-center">
                <div className="background-holder overlay overlay-1" style={{ backgroundImage: 'url(/assets/images/home/robosustal.jpg)' }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="overflow-hidden">
                                <h1 className="fs-5 fs-sm-6 color-white mb-3 text-uppercase">Alumni Network</h1>
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="ls fw-300 text-uppercase color-9 mb-0">
                                    Pioneering advancements in research and technology within the university and across the nation.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Members Section */}
            <section className="text-center">
                <div className="row">
                    {members.map((member, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="image-container">
                                <img className="alumni" src={`/assets/images/home/members/${member.img}`} alt="Alumni" />
                                <div className="image-info">
                                    <p><strong>{member.name}</strong></p>
                                    <p>{member.dept}</p>
                                    <p>Batch: {member.batch}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
