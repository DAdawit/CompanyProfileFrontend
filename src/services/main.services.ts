// export async function fetchLogos(): Promise<LogoOut[]> {
//   try {
//     const response = await api.get<LogoOut[]>("/admin/logos");
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

// import { HeroOut, HeroSection } from "@/types/Hero";
import { HeroOutT } from "@/types/HeroOut";
// import {prodBaseUrl} from "./axios";
import { devBaseurl } from "./axios";
import { LogoOutI } from "@/types/LogoOut";
import { AboutUsI } from "@/types/AboutUsOut";
import { ServicesOutI } from "@/types/ServicesOut";
import { PortfoliosOutI } from "@/types/PortfoliosOut";
import { OurTeamOutI } from "@/types/OurTeamOut";
import { TestimonialsOutI } from "@/types/TestimonialOut";
import { CallToActionOutI } from "@/types/CallToActionOut";
import { OrgDetailOutI } from "@/types/OrgDetailOut";
import { PortfolioDetailI } from "@/types/PortfolioDetailOut";

export async function fetchLogos(): Promise<LogoOutI> {
  const res = await fetch(`${devBaseurl}/logo?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchHero(): Promise<HeroOutT> {
  const res = await fetch(
    `${devBaseurl}/heroes?populate[heroSlider][populate]=image`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export async function fetchAboutUs(): Promise<AboutUsI> {
  const res = await fetch(`${devBaseurl}/about-us?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function fetchOurServices(): Promise<ServicesOutI> {
  const res = await fetch(
    `${devBaseurl}/service?populate[ServicesComponent][populate]=icon&populate=image`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}
export async function fetchOurPortfolios(): Promise<PortfoliosOutI> {
  const res = await fetch(
    `${devBaseurl}/portfolios?populate=*&pagination[pageSize]=4`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export async function fetchAllOurPortfolios(): Promise<PortfoliosOutI> {
  const res = await fetch(`${devBaseurl}/portfolios?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchOutTeam(): Promise<OurTeamOutI> {
  const res = await fetch(`${devBaseurl}/our-teams?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function fetchTestimonials(): Promise<TestimonialsOutI> {
  const res = await fetch(`${devBaseurl}/testimonials?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchCallToAction(): Promise<CallToActionOutI> {
  const res = await fetch(`${devBaseurl}/call-to-action`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  // console.log(data);
  return data;
}

export async function fetchOrgDetail(): Promise<OrgDetailOutI> {
  const res = await fetch(`${devBaseurl}/company-detail?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchOrgPortfolioDetail(): Promise<PortfolioDetailI> {
  const res = await fetch(`${devBaseurl}/portfolio-detail?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function fetchContactUsDetail(): Promise<PortfolioDetailI> {
  const res = await fetch(`${devBaseurl}/contact-us?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
