import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiLinkedinLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkDin",
    link: "www.linkedin.com/in/vijay-saratkar-a0366624b",
    Icon: RiLinkedinLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mr_saratkar_ji_09",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vijay.saratkat/",
    Icon: RiFacebookLine,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@saratkarjicreation3685/featured",
    Icon: RiYoutubeLine,
  },
  {
    name: "Github",
    link: "https://github.com/Vijayaudacious",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
