import Link from "next/link";

const Footer = () => {
  return (
    <div className="foot">
      <div className="column" style={{ alignItems: "flex-start" }}>
        <foot-info>© 2021 by Ruben Panzich</foot-info>
        <Link href="https://github.com/Rubeanie/Personal-Website">
          <a>
            <foot-github>Source code on GitHub</foot-github>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
