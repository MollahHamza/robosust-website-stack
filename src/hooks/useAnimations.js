import { useEffect } from 'react';

/**
 * Custom hook to initialize all JavaScript animations and effects
 * This includes GSAP animations, Rellax parallax, and other effects
 */
const useAnimations = () => {
    useEffect(() => {
        const initAnimations = () => {
            // Initialize Rellax for parallax effects
            if (window.Rellax) {
                setTimeout(() => {
                    try {
                        new window.Rellax('.parallax', {
                            speed: -2,
                            center: false,
                            wrapper: null,
                            round: true,
                            vertical: true,
                            horizontal: false
                        });
                    } catch (e) {
                        console.log('Rellax initialization skipped:', e.message);
                    }
                }, 100);
            }

            // Initialize GSAP/TweenMax animations
            if (window.TweenMax) {
                setTimeout(() => {
                    // Animate elements with data-zanim attribute
                    const animElements = document.querySelectorAll('[data-zanim]');
                    animElements.forEach((el) => {
                        try {
                            const animData = JSON.parse(el.getAttribute('data-zanim'));
                            if (animData.from) {
                                window.TweenMax.from(el, 1, {
                                    ...animData.from,
                                    delay: animData.delay || 0
                                });
                            }
                        } catch (e) {
                            // Ignore JSON parsing errors
                        }
                    });

                    // Animate timeline elements
                    const timelineElements = document.querySelectorAll('[data-zanim-timeline]');
                    timelineElements.forEach((container) => {
                        const children = container.querySelectorAll('[data-zanim]');
                        children.forEach((child, index) => {
                            try {
                                const animData = JSON.parse(child.getAttribute('data-zanim'));
                                if (animData.from) {
                                    window.TweenMax.from(child, 1, {
                                        ...animData.from,
                                        delay: (animData.delay || 0) + (index * 0.1)
                                    });
                                }
                            } catch (e) {
                                // Ignore
                            }
                        });
                    });
                }, 200);
            }

            // Initialize scroll animations
            if (window.$) {
                setTimeout(() => {
                    // Trigger animations on scroll
                    window.$(window).on('scroll', function () {
                        const scrollPos = window.$(this).scrollTop();
                        window.$('[data-zanim-trigger="scroll"]').each(function () {
                            const elementPos = window.$(this).offset().top;
                            const windowHeight = window.$(window).height();

                            if (scrollPos + windowHeight > elementPos + 100) {
                                window.$(this).addClass('animate-in');
                            }
                        });
                    });
                }, 300);
            }
        };

        // Initialize after a delay to ensure scripts are loaded
        const timer = setTimeout(initAnimations, 400);

        return () => {
            clearTimeout(timer);
            // Clean up Rellax instances if they exist
            if (window.rellaxInstance) {
                window.rellaxInstance.destroy();
            }
        };
    }, []);
};

export default useAnimations;
