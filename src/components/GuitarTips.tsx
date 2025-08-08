
import LazyYouTubeEmbed from "./LazyYoutubeEmbed";

const GuitarTips = () => {
    const videoIds = [
        { id: 'uwzdNcPbAXQ', thumbnail: 'https://res.cloudinary.com/df9znr8oq/image/upload/v1754099847/TipsThumbnail1_tvuhaa_cx2z9k.jpg' },
        { id: 'kdjmCowKSmc', thumbnail: 'https://res.cloudinary.com/df9znr8oq/image/upload/v1754099847/TipsThumbnail3_accgyp_x5lmwp.jpg' },
        { id: '6d_WyxovYzU', thumbnail: 'https://res.cloudinary.com/df9znr8oq/image/upload/v1754099847/TipsThumbnail2_z90trr_c1msqu.jpg' }
    ];

    return (
        <section className="py-12 max-w-6xl mx-auto border-b-1 border-neutral-400">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {videoIds.map((video, index) => (
                    <LazyYouTubeEmbed key={index} videoId={video.id} videoThumbnail={video.thumbnail} />
                ))
                }
            </div>

              <div className="text-center mt-8">
                <a href="https://www.youtube.com/watch?v=5GnLNw4J82I&list=PLtK56D8BA36uhSKTfk-UrDN3nnev__Mtz" aria-label='YouTube' target="_blank" rel="noopener noreferrer">
                    <span className="text-indigo-600 font-bold underline underline-offset-1" >Ver más Tips y Consejos</span>
                </a>
            </div>

            
        </section>)
}

export default GuitarTips;