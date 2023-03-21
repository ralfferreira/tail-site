import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <img src="/assets/img/logoTail.png" alt="Logo do Site" />
        </Link>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/researches">Researches</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
        </ul>
        <Link href="/contact">
          <button>Contact</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;