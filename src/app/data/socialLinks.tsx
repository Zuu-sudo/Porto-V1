import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../components/icons/SocialIcons";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/anantanaufal",
    icon: <GithubIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anantanaufal/",
    icon: <LinkedinIcon />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/anantanaufal/",
    icon: <InstagramIcon />,
  },
];
