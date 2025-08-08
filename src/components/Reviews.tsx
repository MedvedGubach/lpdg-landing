import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Reviews = () => {

    const videoReviews = [
        {
            video: "https://res.cloudinary.com/df9znr8oq/video/upload/v1754099852/ReviewVideo6_fsbosg_b1vwjv.webm"
        },
        {
            video: "https://res.cloudinary.com/df9znr8oq/video/upload/v1754099846/ReviewVideo5_skdkry_snwafv.webm"
        },
        {
            video: "https://res.cloudinary.com/df9znr8oq/video/upload/v1754099842/ReviewVideo2_s7lqop_ju9y0n.webm"
        },
        {
            video: "https://res.cloudinary.com/df9znr8oq/video/upload/v1754099847/ReviewVideo1_fpmqyh_j4vasc.mp4"
        },
        {
            video: "https://res.cloudinary.com/df9znr8oq/video/upload/v1754099842/ReviewVideo3_ditvjz_i9e0ze.webm"
        }, 
        {
            video: "https://res.cloudinary.com/df9znr8oq/video/upload/v1754099850/ReviewVideo4_n6eyo2_sv7z6e.mp4"
        },

        {
            video: "https://res.cloudinary.com/df9znr8oq/video/upload/v1754099844/ReviewVideo7_jhwfyx_uhsho0.webm"
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        const maxIndex = Math.ceil(videoReviews.length / itemsPerPage) - 1;
        setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
    };

    const start = currentIndex * itemsPerPage;
    const visibleReviews = videoReviews.slice(start, start + itemsPerPage);

    return (
        <section className="text-black py-12 border-b border-neutral-400 px-4">
            <h2 className="text-3xl text-indigo-600 font-bold text-center mb-10">Lo que dicen los alumnos</h2>

            {/* Slider */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        className="flex justify-center gap-6 flex-wrap"
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {visibleReviews.map((review, index) => (
                            <div key={index}
                                className="bg-neutral-200 w-full sm:w-[300px] rounded-xl p-6 shadow-md flex flex-col justify-between min-h-[400px]"
                            >
                                <div className="w-full aspect-video">
                                    <video src={review.video} controls autoPlay={false}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <div className="flex justify-center mt-8 gap-4">
                    <button
                        onClick={handlePrev}
                        className="bg-indigo-600 text-white px-4 py-2  disabled:opacity-50 hover:bg-indigo-800 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring- focus:ring-indigo-400"
                        disabled={currentIndex === 0}
                    >
                        ← Anterior
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-indigo-600 text-white px-4 py-2 disabled:opacity-50 hover:bg-indigo-800 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring- focus:ring-indigo-400"
                        disabled={start + itemsPerPage >= videoReviews.length}
                    >
                        Siguiente →
                    </button>
                </div>

                <div className="flex justify-center mt-6 space-x-4">
                    {Array.from({ length: Math.ceil(videoReviews.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'} transition-all`}
                            aria-label="review-bullets"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Reviews