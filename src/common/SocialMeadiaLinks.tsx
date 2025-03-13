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
}
const SocialMeadiaLinks = ({ links }: PropType) => {
  return (
    <div className="flex justify-center gap-1 opacity-100 z-50">
      <div className="p-3 bg-black hover:bg-[#5d4314] text-white opacity-100">
        <Link href={links?.linkedin} className="" target="_blank">
          <LinkedInIcon />
        </Link>
      </div>
      <div className="p-3 bg-black hover:bg-[#5d4314] text-white opacity-100">
        <Link href={links?.email} className="" target="_blank">
          <EmailIcon />
        </Link>
      </div>
      <div className="p-3 bg-black hover:bg-[#5d4314] text-white opacity-100">
        <Link href={links?.telegram} className="" target="_blank">
          <TelegramIcon />
        </Link>
      </div>
      <div className="p-3 bg-black hover:bg-[#5d4314] text-white opacity-100">
        <Link href={links.instagram} className="" target="_blank">
          <InstagramIcon />
        </Link>
      </div>
    </div>
  );
};

export default SocialMeadiaLinks;
