import { useState, useRef, useEffect } from "react";

export default function ImageSlider({ images }) {
    const indicatorWidthPercent = images.length > 0 ? 100 / images.length : 100;

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const sliderCurrent = sliderRef.current;

        if (!sliderCurrent) {
            return;
        }

        // Find all the slides inside of the slider
        const slides = sliderCurrent.querySelectorAll("div");
        const slidesArray = Array.from(slides);

        // Wait until a slide is 50% visible, then find it's index in the array of
        // all slides and update the currentSlideIndex
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = slidesArray.indexOf(entry.target);
                        setCurrentSlideIndex(index);
                        console.log(currentSlideIndex)
                    }
                });
            },
            {
                root: sliderCurrent,
                threshold: 0.5,
            }
        );
        slides.forEach((slide) => observer.observe(slide));

        return () => slides.forEach((slide) => observer.unobserve(slide));
    }, []);

    return (
        <div className="w-full -z-50 grid place-items-center ">
            {/* Slider */}
            <div
                ref={sliderRef}
                className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory "
                style={{
                    paddingBottom: "15px",
                    clipPath: "inset(0 0 15px 0)",
                }}
            >
                {images.map((obj, index) => {
                    return (
                        <div key={obj.url} className="w-full flex-shrink-0 snap-start lg:h-1/4 lg:w-1/4 round-sm shadow-lg">
                            <img src={obj.url} />
                            <div>{obj.meal}</div>
                        </div>
                    );
                })}
            </div>

            {/* Scroll indicator */}
            <div className="flex lg:hidden">
                <div className={`h-4 w-4 rounded-full text-center mx-2 ${currentSlideIndex==1 ? "bg-blue-300" : "bg-gray-100"}`} />
                <div className={`h-4 w-4 rounded-full text-center mx-2 ${currentSlideIndex==3 ? "bg-green-300" : "bg-gray-100"}`} />
                <div className={`h-4 w-4 rounded-full text-center mx-2 ${currentSlideIndex==5 ? "bg-yellow-300" : "bg-gray-100"}`} />
                <div className={`h-4 w-4 rounded-full text-center mx-2 ${currentSlideIndex==7 ? "bg-red-300" : "bg-gray-100"}`} />
            </div>
            {/* <div>{currentSlideIndex}</div> */}
            {/* <div className="w-full h-0.5 relative bg-gray-300">
        <div
          className="h-0.5 absolute top-0 left-0 bg-gray-500"
          style={{
            width: `${indicatorWidthPercent}%`,
            left: `${indicatorWidthPercent * currentSlideIndex}%`,
            transition: "left 150ms ease-in-out",
          }}
        />
      </div> */}
        </div>
    );
}