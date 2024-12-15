import Portfolio from "@/assets/images/Portfolio.png";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        <HeroOrbit size={800} rotation={-75}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={25}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={90}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={90}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={450} rotation={-135}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={145}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={-25}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-45}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={5}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={Portfolio} alt="Portfolio" className="size-[250px]"/>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center rounded-lg">
            <div className="text-sm font-medium">👋 Hi! I am Shakhawat Hossain.</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">Creative Developer & Innovator</h1>
          <p className="mt-4 text-center text-whhite/60 md:text-lg">
            I am a passionate developer with expertise in Python programming, MERN stack development, and machine learning. I specialize in solving complex problems, automating systems, and building scalable, user-centric applications. With a strong foundation in technical innovation, I am also working on a thesis focused on multiclass classification for Bangla language complaint categorization in the e-commerce sector. Let's create impactful solutions together!
          </p>
        </div>
        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button className="inline-flex items-center border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work 🚀</span>
          </button>
          <button className="inline-flex items-center border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span className="font-semibold">Let's Connect 🤝</span>
          </button>
        </div>
      </div>
    </div>
  );
};
