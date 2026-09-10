import HeroLogo from '../assets/banner-main.png';
import BannerBG from '../assets/bg-shadow.png';

const Banner = () => {
    return (
        <div
            className="
                min-h-[400px]
                flex
                justify-center
                items-center
                flex-col
                space-y-4
                px-4
                text-center
                bg-cover
                bg-center
                bg-no-repeat
            "
            style={{
                backgroundImage: `url(${BannerBG})`
            }}
        >

            {/* Hero Logo */}

            <img
                src={HeroLogo}
                alt="Dream 11"
                className="w-40 sm:w-48 md:w-56"
            />


            {/* Heading */}

            <h1
                className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    font-bold
                    text-black
                "
            >
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>


            {/* Subtitle */}

            <h5 className="text-sm sm:text-base">
                Beyond Boundaries Beyond Limits
            </h5>


            {/* Button */}

            <button
                className="
                    bg-[#E7FE29]
                    text-black
                    px-5
                    py-3
                    rounded-2xl
                    font-semibold
                    hover:bg-sky-200
                    cursor-pointer
                    transition
                "
            >
                Claim Free Credit
            </button>

        </div>
    );
};

export default Banner;