import Nav from './components/Nav';
import illustration from './assets/images/illustration-working.svg';
import Features from './components/Features';
import boostDesktop from './assets/images/desktop/bg-boost-desktop.svg';
import boostMobile from './assets/images/mobile/bg-boost-mobile.svg';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Nav />
      <main>
        <section className="mb-10 grid grid-cols-1 place-items-center overflow-hidden md:grid-cols-2 lg:mb-0 xl:gap-32">
          <img
            src={illustration}
            alt="Employee working at a desk"
            className="aspect-square h-[90%] w-full translate-x-6 object-cover object-left"
          />

          <header className="w-full max-w-2xl space-y-5 px-5 text-center font-Poppins md:row-start-1 md:text-left lg:px-9 xl:ml-24">
            <h1 className="text-4xl font-bold text-Neutral-darkBlue md:text-5xl lg:text-6xl xl:text-7xl">
              More than just shorter links
            </h1>
            <p className="tracking-wider text-Neutral-grayViolet sm:text-xl">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="rounded-full bg-Primary-cyan px-10 py-4 font-medium text-slate-50 transition hover:bg-opacity-60 sm:text-xl">
              Get Started
            </button>
          </header>
        </section>

        <Features />

        <div className="relative bg-Primary-violet">
          <picture>
            <source media="(min-width: 768px)" srcSet={boostDesktop} />
            <img
              src={boostMobile}
              alt=""
              className="h-full w-full object-cover"
            />
          </picture>
          <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 space-y-5 text-center font-Poppins text-white">
            <h3 className="text-2xl font-bold">Boost your links today</h3>
            <button className="relative rounded-full bg-Primary-cyan px-10 py-3 text-xl after:absolute after:inset-0 after:-z-10 after:rounded-full after:bg-white hover:bg-opacity-60">
              Get Started
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
