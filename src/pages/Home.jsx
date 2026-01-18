import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        // Wait for all scripts to load, then initialize plugins
        const initializePlugins = () => {
            // Initialize Flexslider
            if (window.$ && window.$.fn.flexslider) {
                setTimeout(() => {
                    window.$('.flexslider').flexslider({
                        animation: "slide",
                        controlNav: false,
                        directionNav: true,
                        slideshow: true,
                        slideshowSpeed: 7000,
                        animationSpeed: 600,
                        initDelay: 0,
                        randomize: false,
                    });
                }, 100);
            }

            // Initialize Rellax for parallax effects
            if (window.Rellax) {
                setTimeout(() => {
                    new window.Rellax('.parallax', {
                        speed: -2,
                        center: false,
                        wrapper: null,
                        round: true,
                        vertical: true,
                        horizontal: false
                    });
                }, 200);
            }

            // Initialize GSAP animations
            if (window.TweenMax) {
                setTimeout(() => {
                    // Animate elements with data-zanim attribute
                    const animElements = document.querySelectorAll('[data-zanim]');
                    animElements.forEach((el) => {
                        try {
                            const animData = JSON.parse(el.getAttribute('data-zanim'));
                            window.TweenMax.from(el, 1, animData.from);
                        } catch (e) {
                            // Ignore parsing errors
                        }
                    });
                }, 300);
            }

            // Remove preloader
            const preloader = document.getElementById('preloader');
            if (preloader) {
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }
        };

        // Call initialization after a short delay to ensure all scripts are loaded
        const timer = setTimeout(initializePlugins, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Hero Slider */}
            <div className="flexslider flexslider-simple h-full loading parallax">
                <ul className="slides">
                    <li data-zanim-timeline="{}">
                        <section className="py-0 color-white">
                            <div
                                className="background-holder overlay overlay-freya mobile-centered-frame"
                                style={{ backgroundImage: 'url(/assets/images/home/cover-1.jpeg)' }}
                            ></div>
                            <div className="container">
                                <div className="row justify-content-start align-items-end pt-11 pb-6 h-full" data-zanim-timeline="{}">
                                    <div className="col pb-lg-0">
                                        <div className="row align-items-end parallax" data-rellax-speed="2">
                                            <div className="col-lg">
                                                <div className="overflow-hidden">
                                                    <p
                                                        className="mb-1 text-uppercase ls"
                                                        data-zanim='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.1}'
                                                    >
                                                        Robosust
                                                    </p>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <h2
                                                        className="color-white fw-500 mb-4 mb-lg-0"
                                                        data-zanim='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0}'
                                                    >
                                                        Robotics for glory
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </li>
                    <li data-zanim-timeline="{}">
                        <section className="py-0 color-white">
                            <div
                                className="background-holder overlay overlay-freya"
                                style={{ backgroundImage: 'url(/assets/images/home/cover2.jpg)' }}
                            ></div>
                            <div className="container">
                                <div className="row justify-content-start align-items-end pt-11 pb-6 h-full" data-zanim-timeline="{}">
                                    <div className="col pb-lg-0">
                                        <div className="row align-items-end parallax" data-rellax-speed="2"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </li>
                    <li data-zanim-timeline="{}">
                        <section className="py-0 color-white">
                            <div
                                className="background-holder overlay overlay-freya"
                                style={{ backgroundImage: 'url(/assets/images/home/cover-3.png)' }}
                            ></div>
                            <div className="container">
                                <div className="row justify-content-start align-items-end pt-11 pb-6 h-full" data-zanim-timeline="{}">
                                    <div className="col pb-lg-0">
                                        <div className="row align-items-end parallax" data-rellax-speed="2">
                                            <div className="col-lg">
                                                <div className="overflow-hidden">
                                                    <p
                                                        className="mb-1 text-uppercase ls"
                                                        data-zanim='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.1}'
                                                    >
                                                        Upper Chesterfield
                                                    </p>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <h2
                                                        className="color-white fw-500 mb-4 mb-lg-0"
                                                        data-zanim='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0}'
                                                    >
                                                        Sorption Marking Studio
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="col text-lg-right">
                                                <div className="overflow-hidden">
                                                    <div data-zanim='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.2}'>
                                                        <a className="btn btn-sm btn-outline-white" href="#">More about Sorption</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </li>
                </ul>
            </div>

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
                                        and speak recorded Bengali sentences. It marks a significant milestone in showcasing robotics innovation
                                        in the country and paves the way for future advancements in humanoid technology.
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
                                        about Bangladesh and the Liberation War. Created by the 'Friday Lab' team, led by Nowshad Sajib,
                                        it took three years of effort and Tk10 lakh to develop this remarkable project.
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
                                        over a 433MHz channel. Two ground stations have been set up for signal reception, encouraging space
                                        systems engineering and innovation in satellite technology.
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
                    className="background-holder overlay overlay-1 parallax"
                    style={{ backgroundImage: 'url(/assets/images/home/agpbanner.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
                    data-rellax-percentage="0.5"
                >
                    <div className="container">
                        <div className="row" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                            <div className="col d-flex flex-column justify-content-between" style={{ minHeight: '80vh', paddingTop: '20vh', position: 'relative' }}>
                                <div className="overflow-hidden">
                                    <h1 className="fs-5 fs-sm-6 color-white mb-3" data-zanim='{"delay":0}'>Achievement</h1>
                                </div>
                                <div className="overflow-hidden mt-auto" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
                                    <p className="ls fw-300 text-uppercase color-9 mb-0" style={{ marginBottom: '50px' }} data-zanim='{"delay":0.1}'>
                                        Continuously leading the domain of research and technology in the university and even in the whole country.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievement Content - I'll create a shorter version to fit in this message */}
            <section className="text-center">
                <div className="container">
                    <div className="row justify-content-center"></div>
                    <div className="row custom-row">
                        {[
                            { img: 'NasaSpaceApp.jpg', text: '1st Runner-up at the NASA Space Apps Challenge Bangladesh 2024 with their project "EcoQuest: SDG Adventure." and Nominated for the global stages of the NASA Space Apps Challenge' },
                            { img: 'Ghorar_gari.jpg', text: 'Team ঘোড়ার গাড়ি - 2nd Runner-up in the Chem-Competition at the BUET Chemical Fest 2024' },
                            { img: 'Unovationhub_1.jpg', text: 'Team Automama- Secured a winning position in the Smart Unibator University Innovation Hub Program.' },
                            { img: 'KUET-1.jpg', text: 'Team Void Sust- 2nd Runner-up at KUET Calibration LFR Contest.' },
                            { img: 'Comsot.jpg', text: 'Team Ethereal Luminary-1st Runner-up in the BRAC University IEEE Satellite Expedition Contest - Phase II' },
                            { img: 'KUET-2.jpg', text: 'Team SUST Mavericks - Champion and 1st Runner-up in the Calibration KUET - LFR Segment.' },
                        ].map((achievement, index) => (
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
                <div className="background-holder overlay overlay-1 parallax" style={{ backgroundImage: 'url(/assets/images/home/ongoing.jpg)' }} data-rellax-percentage="0.5"></div>
                <div className="container">
                    <div className="row" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="col">
                            <div className="overflow-hidden">
                                <h1 className="fs-5 fs-sm-6 color-white mb-3" data-zanim='{"delay":0}'>Ongoing Inetiative</h1>
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="ls fw-300 text-uppercase color-9 mb-0" data-zanim='{"delay":0.1}'>
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
                        {[
                            { img: 'automama.png', text: "It is Bangladesh's first-ever Level 2 autonomous car and aimed at advancing autonomous vehicle technology in Bangladesh.2d Camera Used for lane detection, object recognition, and navigation." },
                            { img: 'orca.png', text: 'Autonomous Underwater Vehicle (AUV) developed by Team Onushondhan for SAUVC 2025. Key Features: Underwater cameras, IMU, depth sensors, and thrusters for autonomous navigation and task execution. Processing Unit: Powered by NVIDIA Jetson Nano for Al-based object detection and decision-making.' },
                            { img: 'chemicar.png', text: 'Custom-built, 18 cell rechargeable lead-acid battery built by recycling lead plates from old batteries and an acid-base neutralization reaction using phenolphthalein as an Indicator is used as the stopping mechanism. A color sensor detects the color change, sending a signal to a microcontroller, which stops the motor' },
                        ].map((project, index) => (
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
                <div className="background-holder overlay overlay-1 parallax" style={{ backgroundImage: 'url(/assets/images/home/workshopandseminar.jpg)' }} data-rellax-percentage="0.5"></div>
                <div className="container">
                    <div className="row" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="col">
                            <div className="overflow-hidden">
                                <h1 className="fs-5 fs-sm-6 color-white mb-3" data-zanim='{"delay":0}'>Workshop and Seminars</h1>
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="ls fw-300 text-uppercase color-9 mb-0" data-zanim='{"delay":0.1}'>Ai awareness workshop in JSPSC</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop Content */}
            <section className="text-center">
                <div className="container">
                    <div className="row event-row">
                        {[
                            { img: '1.jpg', text: 'Capturing moments of inspiration and innovation—where curiosity meets creativity!' },
                            { img: '2.jpg', text: 'Guiding young minds, one idea at a time—mentors lighting the path to innovation!' },
                            { img: '3.jpg', text: 'Grateful hearts and bright minds—thanking our inspiring Pycharm workshop instructor with a token of appreciation!' },
                            { img: '4.jpg', text: 'Sparkling curiosity, one robot at a time—our young minds are ready to shape the future!' },
                            { img: '5.jpg', text: 'Little minds, big dreams—future innovators in the making!' },
                            { img: '6.jpg', text: 'Empowering the next generation of innovators through the limitless possibilities of robotics.' },
                        ].map((workshop, index) => (
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
                <div className="background-holder overlay overlay-1 parallax" style={{ backgroundImage: 'url(/assets/images/home/robosustal.jpg)' }} data-rellax-percentage="0.5"></div>
                <div className="container">
                    <div className="row" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="col">
                            <div className="overflow-hidden">
                                <h1 className="fs-5 fs-sm-6 color-white mb-3" data-zanim='{"delay":0}'>Alumni Network</h1>
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="ls fw-300 text-uppercase color-9 mb-0" data-zanim='{"delay":0.1}'>
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
                    {[
                        { img: 'Nowshad.png', name: 'Noushad Sojib', dept: 'CSE,SUST', batch: '2009-10' },
                        { img: 'Farhanul.png', name: 'Md Farhanul Islam', dept: 'EEE ,SUST', batch: '2012-13' },
                        { img: 'Tawfiq.png', name: 'Taufiq Rahman', dept: 'IPE, SUST', batch: '2013-14' },
                        { img: 'Umme Sumaya Jannat.png', name: 'Umme Sumaya Jannat', dept: 'CSE, SUST', batch: '2014-15' },
                        { img: 'Ali Tarique Zaman.png', name: 'Ali Tarique Zaman', dept: 'CEE, SUST', batch: '2015-16' },
                        { img: 'Anamul.png', name: 'Anamul Haque', dept: 'MEE, SUST', batch: '2016-17' },
                    ].map((member, index) => (
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
