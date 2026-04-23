import Image from 'next/image';

export default function IndomieLandingPage() {
  return (
    <div className="min-h-screen bg-[#FFF8D6] font-sans overflow-x-hidden relative">
      <section className="indomie-intro pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden="true">
        <div className="indomie-intro__track">
          <div className="indomie-intro__panel indomie-intro__panel--red">
            <Image
              src="/images/logo-indomiel-merah.png"
              alt=""
              width={640}
              height={220}
              priority
              className="indomie-intro__logo indomie-intro__logo--red"
            />
          </div>
          <div className="indomie-intro__panel indomie-intro__panel--yellow">
            <Image
              src="/images/logo-indomiel-kuning.png"
              alt=""
              width={640}
              height={220}
              className="indomie-intro__logo"
            />
          </div>
          <div className="indomie-intro__panel indomie-intro__panel--green">
            <Image
              src="/images/logo-indomiel-hijau.png"
              alt=""
              width={640}
              height={220}
              className="indomie-intro__logo"
            />
          </div>
          <div className="indomie-intro__panel indomie-intro__panel--black">
            <Image
              src="/images/logo-indomiel-hitam.png"
              alt=""
              width={640}
              height={220}
              className="indomie-intro__logo"
            />
          </div>
          <div className="indomie-intro__panel indomie-intro__panel--red">
            <Image
              src="/images/logo-indomie-main.png"
              alt=""
              width={640}
              height={220}
              className="indomie-intro__logo"
            />
          </div>
        </div>
      </section>

      <nav className="bg-[#E32322] text-white w-full fixed top-0 left-0 z-50 shadow-md border-b-8 border-[#C1121F]">
        <div className="relative h-20 w-full">
          <div className="absolute left-0 top-0 z-20 w-32 sm:w-40 lg:w-[300px]">
            <Image
              src="/images/logo-indomie-main.png"
              alt=""
              width={300}
              height={170}
              priority
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between pl-32 pr-4 sm:pl-44 sm:pr-6 lg:pl-[280px] lg:pr-8">
            <div className="flex-1"></div>

            <div className="hidden md:flex space-x-8 text-sm font-extrabold uppercase tracking-wider">
              <a href="#" className="hover:text-yellow-300 transition border-b-4 border-white pb-1">Home</a>
              <a href="#" className="hover:text-yellow-300 transition pb-1">About Us</a>
              <a href="#" className="hover:text-yellow-300 transition pb-1">Products</a>
              <a href="#" className="hover:text-yellow-300 transition pb-1">Recipes</a>
              <a href="#" className="hover:text-yellow-300 transition pb-1">Moments</a>
              <a href="#" className="hover:text-yellow-300 transition pb-1">Contact Us</a>
              <a href="#" className="hover:text-yellow-300 transition pb-1">Minigame</a>
            </div>

            <div className="hidden md:flex items-center space-x-4 ml-8">
              <button
                className="transition duration-200 hover:-translate-y-0.5 hover:scale-110"
                aria-label="Search"
              >
                <Image
                  src="/images/search-icon-png-9.png?v=white1"
                  alt="Search"
                  width={24}
                  height={24}
                  unoptimized
                  className="h-6 w-6 object-contain transition duration-200 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(254,199,25,0.95)]"
                />
              </button>
              <button
                className="transition duration-200 hover:-translate-y-0.5 hover:scale-110"
                aria-label="World"
              >
                <Image
                  src="/images/world-icon.png?v=white1"
                  alt="World"
                  width={24}
                  height={24}
                  unoptimized
                  className="h-6 w-6 object-contain transition duration-200 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(254,199,25,0.95)]"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-[88px]" aria-hidden="true"></div>

      <section className="relative w-full bg-[#E32322] min-h-[500px] md:min-h-[700px] flex flex-col items-center justify-end overflow-hidden pt-10 pb-24 border-b-[16px] border-[#FFF8D6]">

        <div className="relative z-10 w-full max-w-5xl aspect-[16/9] rounded-[28px] overflow-hidden mb-[-24px] border-[6px] border-[#F7A3A3] bg-[#C1121F]">
          <Image
            src="/images/anjay.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1100px"
          />
        </div>

        <div className="relative z-20 mt-4 bg-[#FFC627] px-8 py-4 rounded-full shadow-2xl transform md:rotate-2 border-4 border-[#E32322]">
          <h1 className="text-2xl md:text-5xl font-extrabold text-[#E32322] tracking-wider uppercase text-center drop-shadow-sm">
            Flavour, Favoured By The World
          </h1>
          <p className="mt-1 text-center text-xs md:text-sm font-bold tracking-wide text-[#B11B1A]">
            especially Will Smith
          </p>
        </div>
      </section>

      <section className="relative w-full py-16 px-4 flex flex-col items-center">

        <div className="absolute right-[-50px] bottom-0 w-64 h-64 bg-green-500 rounded-full opacity-30 blur-3xl z-0 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 z-10" style={{ fontFamily: 'cursive, sans-serif' }}>
          Our Products
        </h2>

        <button className="z-10 bg-[#E32322] hover:bg-[#C1121F] text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 mb-16 text-lg">
          View All Products
        </button>

        <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto w-full">

          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-[4/3] flex items-center justify-center">
              <Image
                src="/images/indomie-mi-goreng-special_detail_094906814.png"
                alt="Indomie Mi Goreng Special"
                width={420}
                height={320}
                className="h-auto w-full object-contain drop-shadow-2xl transition duration-300 hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-[#E32322] tracking-wide uppercase">
              Mi Goreng
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-[4/3] flex items-center justify-center">
              <Image
                src="/images/indomie-chicken-flavor_detail_171159183.png"
                alt="Indomie Chicken Flavour"
                width={420}
                height={320}
                className="h-auto w-full object-contain drop-shadow-2xl transition duration-300 hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-[#E32322] tracking-wide uppercase">
              Kari Ayam
            </h3>
          </div>

        </div>
      </section>

      <section
        className="relative w-full overflow-hidden bg-[#dce9ef] py-12 md:py-16"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(90, 116, 138, 0.12) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="pointer-events-none absolute -left-24 top-[-120px] h-[320px] w-[420px] rounded-full bg-white/45"></div>
        <div className="pointer-events-none absolute -right-16 bottom-[-160px] h-[300px] w-[540px] rounded-full bg-[#c7dce8]/80"></div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 text-[#374c67] md:grid-cols-3 md:px-10">
          <div>
            <h3 className="mb-4 text-2xl font-black uppercase tracking-wide">About</h3>
            <p className="max-w-md text-lg leading-relaxed text-[#3d5572]">
              Indomie has come a long way since its humble beginnings in the 1970&apos;s. Our noodles are made from
              carefully selected ingredients, the best quality flour and fresh spices from the natural resources of
              Indonesia giving it a unique and delicious flavor.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-black uppercase tracking-wide">Browse</h3>
            <ul className="space-y-2 text-xl font-bold uppercase leading-relaxed">
              <li><a href="#" className="hover:text-[#E32322]">About Us</a></li>
              <li><a href="#" className="hover:text-[#E32322]">Products</a></li>
              <li><a href="#" className="hover:text-[#E32322]">Recipes</a></li>
              <li><a href="#" className="hover:text-[#E32322]">Events</a></li>
              <li><a href="#" className="hover:text-[#E32322]">Moments</a></li>
              <li><a href="#" className="hover:text-[#E32322]">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-black uppercase tracking-wide">Address</h3>
            <p className="max-w-lg text-lg leading-relaxed text-[#3d5572]">
              Sudirman Plaza - Indofood Tower, 23rd floor. Jl. Jend. Sudirman, Kav. 76-78, Setiabudi, Jakarta
              Selatan-DKI Jakarta 12910, Indonesia
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#4a607c] text-xl font-black text-[#4a607c] hover:bg-white/60"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#4a607c] text-base font-black text-[#4a607c] hover:bg-white/60"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#4a607c] text-base font-black text-[#4a607c] hover:bg-white/60"
                aria-label="Twitter"
              >
                tw
              </a>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#4a607c] text-sm font-black text-[#4a607c] hover:bg-white/60"
                aria-label="YouTube"
              >
                yt
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-10 flex w-full max-w-7xl flex-col gap-3 px-6 text-[#3d5572] md:flex-row md:items-end md:justify-between md:px-10">
          <Image
            src="/images/logo-indofood2.png"
            alt="Logo Indofood"
            width={220}
            height={64}
            className="h-auto w-40 md:w-52 object-contain"
          />
          <p className="text-base md:text-lg">&copy; 2019 Indomie. All Rights Reserved.</p>
        </div>
      </section>

    </div>
  );
}