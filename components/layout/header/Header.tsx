import Link from "next/link";
import { Menu } from "@headlessui/react";

interface HeaderProps {
  scroll: boolean;
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  scroll,
  isMobileMenu,
  handleMobileMenu,
}) => {
  return (
    <>
      <header id="header_main" className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header__body d-flex justify-content-between">
                <div className="header__left">
                  <div className="logo">
                    <Link className="light" href="/">
                      <img
                        id="site-logo"
                        src="/assets/images/logo/logo.png"
                        alt=""
                        width={118}
                        height={32}
                        data-retina="/assets/images/logo/logo@2x.png"
                        data-width={118}
                        data-height={32}
                      />
                    </Link>
                    <Link className="dark" href="/">
                      <img
                        src="/assets/images/logo/logo-dark.png"
                        alt=""
                        width={118}
                        height={32}
                        data-retina="/assets/images/logo/logo-dark@2x.png"
                        data-width={118}
                        data-height={32}
                      />
                    </Link>
                  </div>
                  <div className="left__main">
                    <nav id="main-nav" className="main-nav">
                      <ul id="menu-primary-menu" className="menu">
                        <li className="menu-item-has-children">
                          <Link href="#">
                            Homepage
                            <svg
                              width={8}
                              height={6}
                              viewBox="0 0 8 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.99998 5.27995C3.85661 5.27995 3.71325 5.2252 3.60394 5.11594L0.164113 1.67609C-0.0547044 1.45728 -0.0547044 1.1025 0.164113 0.883773C0.382842 0.665044 0.737547 0.665044 0.956382 0.883773L3.99998 3.92754L7.0436 0.883879C7.26242 0.665151 7.61709 0.665151 7.8358 0.883879C8.05472 1.10261 8.05472 1.45738 7.8358 1.6762L4.39603 5.11605C4.28666 5.22533 4.1433 5.27995 3.99998 5.27995Z"
                                fill="white"
                              />
                            </svg>
                          </Link>
                          {/* <ul className="sub-menu">
                            <li className="menu-item">
                              <Link href="/">Home 01</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/home-v2">Home 02</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/home-v3">Home 03</Link>
                            </li>
                          </ul> */}
                        </li>
                        {/* <li className="menu-item">
                          <Link href="/buy-crypto-select">Buy Crypto</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/markets">Markets</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/exchange">Exchange</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/spot">Spot</Link>
                        </li>
                        <li className="menu-item"> */}
                        {/* <Link href="/wallet">
                            BITUSDT
                            <svg
                              className="s1"
                              width={8}
                              height={10}
                              viewBox="0 0 8 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.75979 3.20154C6.69318 3.13681 6.59973 3.10739 6.50828 3.12243C6.41666 3.13741 6.33754 3.19493 6.29504 3.27747C6.14887 3.56144 5.9632 3.82239 5.74477 4.05308C5.76654 3.88644 5.7775 3.7188 5.7775 3.55072C5.7775 3.2282 5.73428 2.8963 5.64898 2.56413C5.36855 1.4731 4.6332 0.550422 3.63154 0.0327073C3.54434 -0.0123512 3.44043 -0.0107692 3.35463 0.0369261C3.26883 0.0846409 3.21264 0.172121 3.20494 0.269973C3.12686 1.26146 2.61615 2.16349 1.80301 2.74536C1.79225 2.75312 1.78156 2.76097 1.77088 2.76878C1.74875 2.78497 1.72789 2.80029 1.7084 2.81314C1.70535 2.81517 1.70232 2.81724 1.69936 2.81937C1.18795 3.18552 0.765977 3.67361 0.479004 4.23101C0.187402 4.79798 0.0395508 5.4064 0.0395508 6.03931C0.0395508 6.36173 0.0827734 6.69362 0.168027 7.02585C0.61793 8.77697 2.19379 9.99997 4.00023 9.99997C6.18404 9.99997 7.96068 8.22322 7.96068 6.03931C7.96068 4.96236 7.5342 3.95454 6.75979 3.20154Z"
                                fill="#3772FF"
                              />
                            </svg>
                          </Link>
                        </li> */}
                        <li className="menu-item-has-children">
                          <Link href="#">
                            Pages
                            <svg
                              width={8}
                              height={6}
                              viewBox="0 0 8 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.99998 5.27995C3.85661 5.27995 3.71325 5.2252 3.60394 5.11594L0.164113 1.67609C-0.0547044 1.45728 -0.0547044 1.1025 0.164113 0.883773C0.382842 0.665044 0.737547 0.665044 0.956382 0.883773L3.99998 3.92754L7.0436 0.883879C7.26242 0.665151 7.61709 0.665151 7.8358 0.883879C8.05472 1.10261 8.05472 1.45738 7.8358 1.6762L4.39603 5.11605C4.28666 5.22533 4.1433 5.27995 3.99998 5.27995Z"
                                fill="#23262F"
                              />
                            </svg>
                          </Link>
                          {/* <ul className="sub-menu">
                            <li className="menu-item">
                              <Link href="/blog-default">Blog Default</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/blog-grid-v1">Blog Grid V1</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/blog-grid-v2">Blog Grid v2</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/blog-list">Blog List</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/blog-details">Blog Details</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/buy-crypto-select">Buy Crypto</Link>
                            </li>
                          </ul> */}
                        </li>
                        <li className="menu-item">
                          <Link href="/contact">Contact</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/about">About</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* 
                <div className="header__right d-flex align-items-center">
                  <div className="header__right-top d-flex align-items-center">
                    <div className="language-selector">
                      <Menu as="div" className="relative">
                        <div className="dropdown-button">
                          <button>
                            <img
                              src="/assets/images/icons/english.svg"
                              alt="English"
                            />
                            <span>EN</span>
                            <svg
                              className="s1"
                              width={8}
                              height={5}
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.00001 4.14735C3.93488 4.14735 3.86987 4.11636 3.81238 4.06613L0.630457 0.451968C0.482751 0.307709 0.482751 0.0780743 0.630457 -0.0661862C0.778163 -0.210446 1.00787 -0.210446 1.15557 -0.0661862L4.00001 2.84851L6.84477 -0.0661452C6.99247 -0.210406 7.22218 -0.210406 7.36987 -0.0661452C7.51756 0.0780743 7.51756 0.307709 7.36987 0.451968L4.1878 4.06613C4.13054 4.11636 4.06543 4.14735 4.00001 4.14735Z"
                                fill="#231F20"
                              />
                            </svg>
                          </button>
                          <Menu.Items className="absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    href="/"
                                    className={`block px-4 py-2 text-sm ${
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                    }`}
                                  >
                                    <img
                                      src="/assets/images/icons/english.svg"
                                      alt="English"
                                    />
                                    English
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    href="/"
                                    className={`block px-4 py-2 text-sm ${
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                    }`}
                                  >
                                    <img
                                      src="/assets/images/icons/french.svg"
                                      alt="French"
                                    />
                                    French
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </div>
                      </Menu>
                    </div>
                    <div className="header__search">
                      <button className="search-icon">
                        <img
                          src="/assets/images/icons/search.svg"
                          alt="Search"
                        />
                      </button>
                      <div className="search-form">
                        <form>
                          <input type="text" placeholder="Search" />
                          <button type="submit">
                            <img
                              src="/assets/images/icons/search.svg"
                              alt="Search"
                            />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
