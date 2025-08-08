import LazyYouTubeEmbed from "./LazyYoutubeEmbed";

const Collabs = () => {
    return (
        <section className="py-12 max-w-6xl mx-auto border-b border-neutral-400 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        id: "pG_Tfq7ZczA",
                        text: "Butch ha participado en el Hell & Heaven Open Air 2022",
                        thumbnail: "https://res.cloudinary.com/df9znr8oq/image/upload/v1754099845/ThumbnailFeat1_rsrlfi_zkiywd.jpg"
                    },

                    {
                        id: "7HtKGyw-ZAM",
                        text: "Es el guitarrista de la banda de groove metal B-Chaos",
                        thumbnail: "https://res.cloudinary.com/df9znr8oq/image/upload/v1754099846/ThumbnailFeat2_bqivdy_ctudrg.jpg"
                    },
                    {
                        id: "5mQr2gK6k5A",
                        text: "Ha lanzado varios singles con su banda B-Chaos",
                        thumbnail: "https://res.cloudinary.com/df9znr8oq/image/upload/v1754104747/Imagen_de_WhatsApp_2025-08-01_a_las_21.07.10_476837bb_eda0yf.jpg",
                    }
                ].map((collab, index) => (
                    <div
                        key={index}
                        className="bg-neutral-100 rounded-2xl shadow-lg border border-neutral-700 hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
                    >
                        <div className="aspect-video">
                            <LazyYouTubeEmbed videoId={collab.id} videoThumbnail={collab.thumbnail} />
                        </div>
                        <div className="p-4">
                            <p className="text-indigo-600 text-sm font-semibold">{collab.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <a href="https://www.youtube.com/watch?v=7HtKGyw-ZAM&list=PLtK56D8BA36vxNynwC1MkrXSfXkf0-nSR" aria-label='YouTube' target="_blank" rel="noopener noreferrer">
                    <span className="text-indigo-600 font-bold underline underline-offset-1" >Ver más Colaboraciones</span>
                </a>
            </div>
        </section>
    );
};

export default Collabs;
