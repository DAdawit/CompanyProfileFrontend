import Carosole from "@/Components/Home/Carosole";
import // fetchSpecialFoods,
// fetchMenuByMealtimes,
// getAllHeroSection,
// fetchHero,
"@/services/main.services";
// import MenuByMealTime2 from "@/components/Home/MenuByMealTime";
import { fetchHero } from "@/services/main.services";
// import { fetchLogos } from "@/services/admin.services";
export default async function Home() {
  // const data = await fetchSpecialFoods();
  // const menuByMealtime = await fetchMenuByMealtimes();
  const heroSections = await fetchHero();
  // const logos = await fetchLogos();

  return (
    <>
      <main id="" className="overflow-hidden bg-bgPrimary">
        <div>
          {/* <pre>{JSON.stringify(heroSections.data[0].heroSlider, null, 2)}</pre> */}
          <Carosole carosoles={heroSections.data[0].heroSlider} /> *
        </div>
        <div>{/* <Services /> */}</div>
        <section id="Menu" className="bg-bgSecondary py-10">
          <div className="flex flex-col justify-center items-center gap-5 pt-10">
            <h1 className=" text-primary font-sans text-sm font-medium text-center ">
              SPECIAL SELECTION
            </h1>
            {/* <Image
              src="/separator.png"
              alt="spector"
              width={100}
              height={200}
              className="text-center"
            /> */}
          </div>
          <div className=" pt-5">
            {/* <MenuByMealTime /> */}
            {/* <MenuByMealTime menus={menuByMealtime} /> */}
            {/*  */}
          </div>
        </section>
        {/* special offers */}
        <section id="Specials" className="bg-bgPrimary">
          {/* <Specials specials={data} /> */}
        </section>

        {/* our strength */}
        <section className="bg-bgThird">{/* <OurStrength /> */}</section>
        {/* chefs */}
        <section className="bg-bgThird">{/* <Chefs /> */}</section>

        <section className="bg-bgThird">{/* <Experiance /> */}</section>
        {/* move to top */}
        {/* <MoveToTop /> */}
      </main>
    </>
  );
}
