import Image from "next/image"
import { Fragment } from "react/jsx-runtime"

const Brands = () => {

    const brandsLogos = [
        {
            name: "Pastills Nixh & Hijos",
            image: 'https://res.cloudinary.com/df9znr8oq/image/upload/v1754431203/logo-nixh_gdl_mx_el_tono_mexicano_gtl3eu.jpg'
        },
        {
            name: "VC Picks",
            image: 'https://res.cloudinary.com/df9znr8oq/image/upload/v1754099847/VCPicksLogo_xrnome_cuwo3g.webp'
        },
        {
            name: "Skull Strings",
            image: 'https://res.cloudinary.com/df9znr8oq/image/upload/v1754099845/SkullStringsLogo_pixvsl_mvgngv.webp'
        },
        {
            name: "Olmos Guitarras",
            image: 'https://res.cloudinary.com/df9znr8oq/image/upload/v1754099839/OlmosGuitarrasLogo_szgmn9_ftscii.webp'
        },
    ]
    return (
        <Fragment>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center py-8">
                {brandsLogos.map((brand, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <Image
                            src={brand.image}
                            alt={brand.name}
                            className={`object-contain ${brand.name === 'Pastills Nixh & Hijos' ? 'rounded-full' : 'rounded-none'}`}
                            width={256} height={128}
                        />
                    </div>
                ))}
            </div>
        </Fragment >
    )
}

export default Brands