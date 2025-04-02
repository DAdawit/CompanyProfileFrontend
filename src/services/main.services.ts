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
import { baseUrl } from "./axios";
import { LogoOutI } from "@/types/LogoOut";
import { AboutUsI } from "@/types/AboutUsOut";
import { ServicesOutI } from "@/types/ServicesOut";
import { PortfoliosOutI } from "@/types/PortfoliosOut";
import { OurTeamOutI } from "@/types/OurTeamOut";
import { TestimonialsOutI } from "@/types/TestimonialOut";
import { CallToActionOutI } from "@/types/CallToActionOut";
import { OrgDetailOutI } from "@/types/OrgDetailOut";
import { PortfolioDetailI } from "@/types/PortfolioDetailOut";
import { FaqsOutI } from "@/types/FaqsOut";
import { ImportantStatsOutI } from "@/types/SiteStatsOut";
import { TimeLineEventsOutI } from "@/types/TimeLineEventsOut";
import { BlogHeadLineOutI } from "@/types/BlogHeadLineOut";
import { BlogOutI } from "@/types/SingleBlogOut";
import { BlogsOutI } from "@/types/BlogsOut";

export async function fetchLogos(): Promise<LogoOutI> {
  const res = await fetch(`${baseUrl}/logo?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchHero(): Promise<HeroOutT> {
  const res = await fetch(
    `${baseUrl}/heroes?populate[heroSlider][populate]=image`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export async function fetchAboutUs(): Promise<AboutUsI> {
  const res = await fetch(`${baseUrl}/about-us?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function fetchOurServices(): Promise<ServicesOutI> {
  const res = await fetch(
    `${baseUrl}/service?populate[ServicesComponent][populate]=icon&populate=image`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}
export async function fetchOurPortfolios(): Promise<PortfoliosOutI> {
  const res = await fetch(
    `${baseUrl}/portfolios?populate=*&pagination[pageSize]=4`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export async function fetchAllOurPortfolios(): Promise<PortfoliosOutI> {
  const res = await fetch(`${baseUrl}/portfolios?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchOutTeam(): Promise<OurTeamOutI> {
  const res = await fetch(`${baseUrl}/our-teams?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function fetchTestimonials(): Promise<TestimonialsOutI> {
  const res = await fetch(`${baseUrl}/testimonials?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchCallToAction(): Promise<CallToActionOutI> {
  const res = await fetch(`${baseUrl}/call-to-action`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  // console.log(data);
  return data;
}

export async function fetchOrgDetail(): Promise<OrgDetailOutI> {
  const res = await fetch(`${baseUrl}/company-detail?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchOrgPortfolioDetail(): Promise<PortfolioDetailI> {
  const res = await fetch(`${baseUrl}/portfolio-detail?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function fetchContactUsDetail(): Promise<PortfolioDetailI> {
  const res = await fetch(`${baseUrl}/contact-us?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchFaqs(): Promise<FaqsOutI> {
  const res = await fetch(`${baseUrl}/faq?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchStats(): Promise<ImportantStatsOutI> {
  const res = await fetch(`${baseUrl}/site-stat?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchTimeLineEvents(): Promise<TimeLineEventsOutI> {
  const res = await fetch(`${baseUrl}/time-line-event?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function fetchBlogHeadline(): Promise<BlogHeadLineOutI> {
  const res = await fetch(
    `${baseUrl}/blogs?populate=*&filters[headline][$eq]=true&pagination[pageSize]=1&sort=createdAt:desc`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}
export async function fetchBlogs(): Promise<BlogsOutI> {
  const res = await fetch(
    `${baseUrl}/blogs?populate=*&filters[featured][$eq]=false`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export async function fetchBlog(slug: string): Promise<BlogOutI> {
  const res = await fetch(`${baseUrl}/blogs/${slug}?populate=*`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function fetchFeaturedBlog(): Promise<BlogsOutI> {
  const res = await fetch(
    `${baseUrl}/blogs?populate=*&filters[featured][$eq]=true`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}
