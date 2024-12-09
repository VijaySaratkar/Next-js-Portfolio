import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full px-4 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-8">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image
              src="/vijay.png"
              alt="logo"
              width={90}
              height={90}
              priority
              style={{
                display: "block",
                background: "none",
                margin: 0,
                padding: 0,
                marginTop: "-32px",
              }}
              className="remove-bg"
            />
          </Link>

          {/* Socials */}
          <div className="socials">
            <Socials />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Mobile Layout */
        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }

          .flex {
            flex-direction: row;
            justify-content: space-between;
          }

          .logo {
            position: absolute;
            left: 0;
            top: 0;
          }

          .socials {
            position: absolute;
            right: 0;
            top: 0;
          }
        }

        /* Desktop Layout */
        @media (min-width: 769px) {
          .logo {
            position: static;
          }

          .socials {
            position: static;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
