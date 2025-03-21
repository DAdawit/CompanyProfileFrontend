import { SocialLink } from "@/types/OurTeamOut";
// import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
interface PropType {
  links: SocialLink;
  color?: string;
}
const SocialMeadiaLinks = ({ links, color }: PropType) => {
  return (
    <div
      className={`flex justify-start opacity-100 z-50 hover:blur-none h-min space-x-3 ${
        color ? `text-${color}` : "text-gray-500"
      }`}
    >
      <div className=" opacity-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <Link href={links?.linkedin} target="_blank">
          <LinkedInIcon />
        </Link>
      </div>
      <div className="opacity-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <Link href={links?.email} target="_blank">
          <EmailIcon />
        </Link>
      </div>
      <div className="opacity-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <Link href={links?.telegram} target="_blank">
          <TelegramIcon />
        </Link>
      </div>
      <div className="opacity-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <Link href={links.instagram} target="_blank">
          <InstagramIcon />
        </Link>
      </div>
    </div>
  );
};

export default SocialMeadiaLinks;
