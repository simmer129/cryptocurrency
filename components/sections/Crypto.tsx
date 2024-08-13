"use client";
import Link from "next/link";
import { useState } from "react";

interface CryptoBoxProps {
  href: string;
  iconClass: string;
  name: string;
  unit: string;
  price: string;
  bottomValue: string;
  saleClass: string;
  saleValue: string;
}

const CryptoBox: React.FC<CryptoBoxProps> = ({
  href,
  iconClass,
  name,
  unit,
  price,
  bottomValue,
  saleClass,
  saleValue,
}) => (
  <div className="crypto-box">
    <div className="top">
      <Link href={href}>
        <span className={iconClass}>
          <span className="path1" />
          <span className="path2" />
        </span>
        <span>{name}</span>
        <span className="unit">{unit}</span>
      </Link>
    </div>
    <h6 className="price">{price}</h6>
    <div className="bottom">
      <p>{bottomValue}</p>
      <div className={`sale ${saleClass}`}>{saleValue}</div>
    </div>
  </div>
);

export default function Crypto() {
  const [flatTabs, setFlatTabs] = useState<number>(1);
  const handleFlatTabs = (index: number) => {
    setFlatTabs(index);
  };

  return (
    <>
      <section className="crypto" data-aos="fade-up" data-aos-duration={1000}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="crypto__main">
                <div className="flat-tabs">
                  <ul className="menu-tab">
                    {[...Array(9).keys()].map((i) => (
                      <li
                        key={i + 1}
                        className={flatTabs === i + 1 ? "active" : ""}
                        onClick={() => handleFlatTabs(i + 1)}
                      >
                        <h6 className="fs-16">{["Crypto", "Dollar"][i]}</h6>
                      </li>
                    ))}
                  </ul>
                  <div className="content-tab">
                    {[...Array(9).keys()].map((i) => (
                      <div
                        key={i + 1}
                        className="content-inner"
                        style={{
                          display: `${flatTabs === i + 1 ? "flex" : "none"}`,
                        }}
                      >
                        <CryptoBox
                          href="#"
                          iconClass="icon-btc"
                          name="Bitcoin"
                          unit="BTC/USD"
                          price="USD 46,168.95"
                          bottomValue="36,641.20"
                          saleClass="critical"
                          saleValue="-0.79%"
                        />
                        <CryptoBox
                          href="#"
                          iconClass="icon-eth"
                          name="Ethereum"
                          unit="ETH/USD"
                          price="USD $3,480.04"
                          bottomValue="36,641.20"
                          saleClass="success"
                          saleValue="+10.55%"
                        />
                        <CryptoBox
                          href="#"
                          iconClass="icon-tether"
                          name="Tether"
                          unit="USDT/USD"
                          price="USD 1.00"
                          bottomValue="36,641.20"
                          saleClass="critical"
                          saleValue="-0.01%"
                        />
                        <CryptoBox
                          href="#"
                          iconClass="icon-bnb"
                          name="BNB"
                          unit="BNB/USD"
                          price="USD 443.56"
                          bottomValue="36,641.20"
                          saleClass="critical"
                          saleValue="-1.24%"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
