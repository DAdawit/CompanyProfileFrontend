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
// import api form "./axios"
// import { CategoryOut, SubCategory } from "@/types/Category";
// import {
//   MealTimeOut,
//   Mealtime,
//   MenuByCategoryOut,
//   MenuItemsByMealTimeOut,
// } from "@/types/MealTime";
// import {
//   MenuOut,
//   MenusByCategoryOut,
//   MenusByMealTimeOUt,
//   SpecialFoodOut,
// } from "@/types/Menu";
// import { LogoOut } from "@/types/Logo";
// import { MenuBySubCategoryOut } from "@/types/SubCategory";
// import { ProfileI } from "@/types";

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
    `${devBaseurl}/service?populate[ServicesComponent][populate]=icon`,
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
