import Link from "next/link";
import React from "react";

const Banner: React.FC = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="banner__content">
                <h2 className="title">
                  A trusted and secure cryptocurrency Esmaeil.
                </h2>
                <p className="fs-20 desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link href="#" className="btn-action">
                  <span>Trading Now</span>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="banner__image">
                <img
                  src="/assets/images/layout/banner-02.png"
                  alt="Banner Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
