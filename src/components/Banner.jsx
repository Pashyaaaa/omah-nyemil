const Banner = () => {
  return (
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div
        class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#4671ff] to-[#776fff] opacity-20"></div>
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#4671ff] to-[#776fff] opacity-20"></div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Omah Nyemil
          </h2>
          <p class="mt-6 text-base md:text-lg leading-8 text-gray-300">
            Omah Nyemil terinspirasi dari kata "omah" yang dalam bahasa Jawa
            berarti rumah, simbol kehangatan dan kenyamanan. Omah Nyemil hadir
            untuk menyajikan camilan lezat yang membawa suasana akrab layaknya
            di rumah. Dengan beragam pilihan dari manis hingga gurih, Omah
            Nyemil adalah tempat sempurna untuk berbagi momen istimewa bersama
            keluarga dan teman.
          </p>
        </div>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <div class="relative group">
              <p class="cursor-not-allowed text-slate-400">
                Open Hire <span aria-hidden="true">&rarr;</span>
              </p>
              <div class="absolute bottom-full mb-2 hidden w-max p-2 text-sm text-white bg-black rounded group-hover:block">
                Akan segera hadir
              </div>
            </div>

            <div class="relative group">
              <p className="cursor-not-allowed text-slate-400">
                Program Magang/Intern <span aria-hidden="true">&rarr;</span>
              </p>
              <div class="absolute bottom-full mb-2 hidden w-max p-2 text-sm text-white bg-black rounded group-hover:block">
                Akan segera hadir
              </div>
            </div>

            <a href="/menu">
              Our Product <span aria-hidden="true">&rarr;</span>
            </a>

            <div class="relative group">
              <a href="#" className="cursor-not-allowed text-slate-400">
                Meet our leader <span aria-hidden="true">&rarr;</span>
              </a>
              <div class="absolute bottom-full mb-2 hidden w-max p-2 text-sm text-white bg-black rounded group-hover:block">
                Akan segera hadir
              </div>
            </div>
          </div>

          <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col-reverse">
              <dt class="text-base leading-7 text-gray-300">Cabang</dt>
              <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                1
              </dd>
            </div>
            <div class="flex flex-col-reverse">
              <dt class="text-base leading-7 text-gray-300">Testimoni</dt>
              <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                300+
              </dd>
            </div>
            <div class="flex flex-col-reverse">
              <dt class="text-base leading-7 text-gray-300">
                Porsi Per Minggu Terjual
              </dt>
              <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                ±40
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Banner;
