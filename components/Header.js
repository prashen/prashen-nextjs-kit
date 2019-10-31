import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className="appContainer">
    {/* Blogger's name */}
    <h1 className="blogerTitle">@PrashenJeetRoy</h1>
    {/* menu */}
    <div className="menuWrap">
      <Link href="/">
        <a className="menuItem">Blogs</a>
      </Link>

      <Link href="/about">
        <a className="menuItem">About</a>
      </Link>

      <Link href="/contact">
        <a className="menuItem">Wanna Say Hi!</a>
      </Link>
    </div>

    <style jsx>{`
    .appContainer {
      padding: 20px;
      text-align: center;
    }
    .blogerTitle {
      color: navajowhite;
    }
      .menuItem {
        color:greenyellow;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
        text-decoration: overline;
      }
      
    `}</style>
  </div>
);

export default Header;