"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Linkedin,
  Globe,
  Github,
  Instagram,
  Dribbble,
} from "lucide-react";

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const BehanceIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.5 11.5c.9 0 1.5-.6 1.5-1.5S8.4 8.5 7.5 8.5H5v3h2.5zm.3 2.5H5v3.5h2.8c1 0 1.7-.7 1.7-1.75s-.7-1.75-1.7-1.75zM22 9.5h-5V8h5v1.5zM3 6h5.5C10.4 6 12 7.1 12 9.2c0 1.2-.6 2.1-1.6 2.6 1.3.4 2.1 1.5 2.1 2.9C12.5 17 10.8 18 8.7 18H3V6zm11.8 7c0-2.5 1.8-4.3 4.2-4.3C21.5 8.7 23 10.5 23 13v.8h-6c.2 1.1 1 1.7 2 1.7.7 0 1.3-.3 1.7-.9l1.7.9c-.7 1.2-2 1.9-3.4 1.9-2.5 0-4.2-1.7-4.2-4.4zm2.1-.9h3.8c-.2-.9-.9-1.5-1.9-1.5s-1.7.6-1.9 1.5z" />
  </svg>
);

/* ─────────────────────────────────────
   TEAM DATA  — update photo/links here
───────────────────────────────────── */
const TEAM = [
  {
    id: 1,
    name: "Md Abul Hashem",
    position: "Design Lead",
    photo: "/mohon2.png",
    bg: "#C01BFD",
    socials: [
      { type: "linkedin",  url: "https://rebrand.ly/30752c" },
      { type: "instagram", url: "https://rebrand.ly/link-x2022-716fdb" },
      { type: "behance",   url: "https://rebrand.ly/680223" },
      { type: "dribbble",  url: "https://rebrand.ly/abul-hashem-f0eb88" },
    ],
  },
  {
    id: 2,
    name: "Md.Nafis",
    position: "COO",
    photo: "/nafisA.png",
    bg: "#FFFFFF",
    socials: [
      { type: "linkedin",  url: "https://www.linkedin.com/in/nafis-ahmed-sayeem-121396149/" },
      { type: "facebook",  url: "https://www.facebook.com/nafis.sayeem.2025" },
      { type: "instagram", url: "https://www.instagram.com/between_biriani_and_iced_tea/" },
    ],
  },
  {
    id: 3,
    name: "Khandaker Samin Yeasar",
    position: "Development Lead",
    photo: "/samin.png",
    bg: "#D1FF52",
    socials: [
      { type: "linkedin", url: "https://www.linkedin.com/in/khandakersaminyeasar/" },
      { type: "github",   url: "https://github.com/KhandakerSamin" },
      { type: "facebook", url: "https://www.facebook.com/khandakersaminyeasar/" },
    ],
  },
  {
    id: 4,
    name: "Sohan Sheikh",
    position: "Visualizer",
    photo: "/sohan.png",
    bg: "#C01BFD",
    socials: [
      { type: "facebook",  url: "https://www.facebook.com/share/1BXYuuGyto/" },
      { type: "instagram", url: "https://www.instagram.com/share/1BXYuuGyto/" },
      { type: "behance",   url: "https://www.behance.net/sohansheikh23" },
    ],
  },
  {
    id: 5,
    name: "Md.Rahat Parvez",
    position: "Wordpress Developer",
    photo: "/parvez.png",
    bg: "#FFFFFF",
    socials: [
      { type: "linkedin",  url: "https://www.linkedin.com/in/md-rahat-pervez" },
      { type: "facebook",  url: "https://www.facebook.com/mdrahat.parvez.18" },
      { type: "instagram", url: "https://www.instagram.com/md_r_pervez/" },
    ],
  },
  {
    id: 6,
    name: "Md.Tanvir",
    position: "Visualizer",
    photo: "/tanvir.png",
    bg: "#D1FF52",   
    socials: [
      // { type: "linkedin", url: "https://linkedin.com/in/username" },
      // { type: "github",   url: "https://github.com/username" },
    ],
  },
  {
    id: 7,
    name: "Md.Hasibul Islam",
    position: "Ui/Ux Designer",
    photo: "/hasibul.png",
    bg: "#C01BFD",
    socials: [
      { type: "linkedin",  url: "https://www.linkedin.com/in/hasibuix15" },
      { type: "facebook",  url: "https://www.facebook.com/share/1CVZD2ZS29/" },
      { type: "instagram", url: "https://www.instagram.com/hasibuix15" },
    ],
  },
];

/* ─────────────────────────────────────
   SOCIAL ICON MAP
───────────────────────────────────── */
const SocialIcon = ({ type, url }) => {
  const icons = {
    linkedin:  <Linkedin  className="w-4 h-4" />,
    github:    <Github    className="w-4 h-4" />,
    instagram: <Instagram className="w-4 h-4" />,
    dribbble:  <Dribbble  className="w-4 h-4" />,
    globe:     <Globe     className="w-4 h-4" />,
    facebook:  <FacebookIcon />,
    behance:   <BehanceIcon />,
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-800 hover:text-black transition-all duration-200 shadow-lg backdrop-blur-sm"
      onClick={(e) => e.stopPropagation()}
    >
      {icons[type] || <Globe className="w-4 h-4" />}
    </a>
  );
};

/* ─────────────────────────────────────
   TEAM CARD
   Default border: top-left sharp, rest rounded-2xl
   Hover  border: bottom-left sharp, rest rounded-2xl
───────────────────────────────────── */
function TeamCard({ member }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card wrapper — border-radius animates */}
      <div
        className="relative overflow-hidden w-full"
        style={{
          backgroundColor: member.bg,
          borderRadius: hovered
            ? "60px 60px 60px 0px"   /* hover: bottom-left square */
            : "0px 55px 55px 55px",  /* default: top-left square */
          transition: "border-radius 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          aspectRatio: "3/3",
        }}
      >
        {/* Photo — scales slightly on hover */}
        <div
          className="w-full h-full"
          style={{
            transform: hovered ? "translateY(-4px) scale(1.03)" : "translateY(0) scale(1)",
            transition: "transform 0.6s cubic-bezier(0.34, 1.2, 0.64, 1)",
          }}
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top"
            draggable={false}
          />
        </div>

        {/* Social icons — inside card, bottom-center, visible on hover */}
        <div
          className="absolute inset-x-0 bottom-3 mx-auto flex flex-row justify-center gap-2"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.35s ease 0.1s, transform 0.4s cubic-bezier(0.34, 1.2, 0.64, 1) 0.1s",
          }}
        >
          {member.socials.map((s, i) => (
            <SocialIcon key={i} type={s.type} url={s.url} />
          ))}
        </div>
      </div>

      {/* Name & Position below card */}
      <div className="pt-3 pb-1">
        <h4 className="font-newsreader italic text-[#D1FF52] text-lg md:text-2xl font-medium leading-snug mb-0.5">
          {member.name}
        </h4>
        <p className="text-gray-200 text-base leading-relaxed">
          {member.position}
        </p>
      </div>
    </div>
  );
}


export default function TeamSection() {
  // Split into rows of 4
  const rows = [];
  for (let i = 0; i < TEAM.length; i += 4) {
    rows.push(TEAM.slice(i, i + 4));
  }

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28">

      {/* ── Background gradient layers ── */}

      {/* Base black */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black" />

      {/* Dark top-left base */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(125deg, #000000 0%, #04010d 18%, #080318 35%, #0e0628 50%, transparent 65%)",
        }}
      />

      {/* Vivid right bloom */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 90% 50%, #7b35e8 0%, #4820a8 30%, #1a0848 60%, transparent 80%)",
          opacity: 0.75,
        }}
      />

      {/* Secondary mid glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 85% 55%, #9050f0 0%, #5530c0 32%, transparent 65%)",
          opacity: 0.5,
        }}
      />

      {/* Bottom left fade to keep it dark */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 100%, rgba(0,0,0,0.95) 0%, transparent 65%)",
        }}
      />

      {/* Dark mask from left */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.1) 55%, transparent 70%)",
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.35,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[1370px] px-6 md:px-8">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-newsreader text-white leading-snug">
            The backbone
            <br />
            of{" "}
            <em className="text-[#D1FF52] italic font-newsreader">Oriture</em>
          </h2>
        </div>

        {/* Grid — rows of 4 */}
        <div className="flex flex-col gap-10 md:gap-12">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
            >
              {row.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}