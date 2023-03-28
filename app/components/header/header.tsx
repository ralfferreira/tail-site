import Link from 'next/link';
import '../../output.css'
import '../../globals.css'

const Header = () => {
  return (
    <header
      className="grid w-full grid-cols-2 items-center gap-3 border-b-[1px] border-b-lightGray/20 px-[min(200px,_10vw)] py-5 sm:grid-cols-3"
    >
      <Link href="/"
        ><img src="/assets/img/logo.webp" alt="logo" className="h-[100px] w-[100px]"
      /></Link>
      <nav className="invisible hidden sm:visible sm:flex">
        <ul
          className="flex w-full items-center justify-center gap-14 [&>li:hover]:underline [&>li:hover]:decoration-navTextGray [&>li:hover]:underline-offset-8"
        >
          <li className="text-navTextGray"><Link href="/about">Sobre</Link></li>

          <li className="text-navTextGray"><Link href="/blog">Blog</Link></li>

          <li className="text-navTextGray"><Link href="/researches">Projetos</Link></li>

          <li className="text-navTextGray"><Link href="/team">Membros</Link></li>
        </ul>
      </nav>

      <div className="flex items-center justify-end gap-3">
        <div className="invisible hidden shrink-0 gap-4 md:visible md:flex">
          <Link href="#">
            <img src="/assets/img/flag_brazil.svg" alt="Portuguese Translation" />
          </Link>
          <Link href="#"
            ><img src="/assets/img/flag_usa.svg" alt="English Translation"
          /></Link>
        </div>
        <Link href="/contact" className="rounded-lg border-[1px] border-tailBlue bg-transparent px-5 py-3 text-sm text-tailBlue transition-all hover:bg-tailBlue hover:text-black">
          <button>Contact</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;