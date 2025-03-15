import React from 'react'

const Hero = () => {
  return (
    <section className="ezy__sheader5 light bg-center bg-no-repeat bg-contain relative z-[1] bg-white dark:bg-[#0b1727] text-white overflow-hidden py-24 md:py-48">
    <div
        className="absolute top-0 left-0 right-0 bottom-0 opacity-90 -z-[1]"
        style={{ background: "linear-gradient(to right, #0ba6f9, #33f3e4)" }}
    ></div>
    <div className="container px-4">
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                <h1 className="text-[35px] md:text-6xl font-bold leading-snug">
                   Our Services
                </h1>
                <p className="text-xl leading-normal opacity-75 mt-6">
                    Tenetur et neque delectus deleniti suscipit eos. Delectus quis
                    quaerat illum sit esse, qui, quasi obcaecati magni ea cum Beatae
                    non distinctio.
                </p>
            </div>
        </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
            className="relative block h-14 w-full"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                fill="currentColor"
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="text-white dark:bg-[#0b1727]"
            ></path>
        </svg>
    </div>
</section>
  )
}

export default Hero