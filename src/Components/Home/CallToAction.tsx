// import { fetchCallToAction } from "@/services/main.services";
import { CallToActionOutI } from "@/types/CallToActionOut";
interface PropTypes {
  call_to_action: CallToActionOutI;
}
export default async function CallToAction({ call_to_action }: PropTypes) {
  return (
    <div className="bg-gray-50">
      <div className="container max-w-7xl mx-auto pt-24 pb-12 px-5 ">
        {/* <pre>{JSON.stringify(call_to_action, null, 2)}</pre> */}

        <div className="flex flex-col items-center justify-center w-full h-full my-auto text-center">
          <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-6">
            {call_to_action.data.title}
          </h2>
          <p className="mb-10 text-lg font-normal lg:w-6/12 text-grey-700">
            {call_to_action.data.message}
          </p>
          <div className="flex flex-col items-center justify-center w-full gap-4 mb-4 md:flex-row">
            <div className="relative flex items-center">
              <span className="absolute ml-3">{/* <AtIcon /> */}</span>
              <input
                type="search"
                placeholder="E-mail address"
                className="flex items-center py-2 pl-10 pr-3 text-sm font-medium border border-solid outline-none grow placeholder:text-dark-grey-500 placeholder:text-sm placeholder:font-medium border-grey-500 focus:border-grey-600 text-dark-grey-900 rounded-xl"
              ></input>
            </div>
            <button className="bg-primary flex items-center px-4 py-2 text-sm font-bold text-gray-600 border rounded-xl border-purple-blue-500 bg-purple-blue-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300">
              Get started now !
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 px-5" />
    </div>
  );
}
