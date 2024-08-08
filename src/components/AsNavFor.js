import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/AsNavFor.css";

function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const setores = [
    {
      nome: "ADS - Administração Setorial",
      imagem: "/images/ads.png",
      bis: [
        { nome: "BI ADS 1", imagem: "/images/ads.png", url: "https://url-do-bi-ads-1.com" },
        { nome: "BI ADS 2", imagem: "/images/bi_ads_2.jpg", url: "https://url-do-bi-ads-2.com" },
        { nome: "BI ADS 3", imagem: "/images/bi_ads_3.jpg", url: "https://url-do-bi-ads-3.com" }
      ]
    },
    {
      nome: "CCCO - Coordenadoria de Contratos de Concessão",
      imagem: "/images/ads.png",
      bis: [
        { nome: "BI CCCO 1", imagem: "/images/ads.png", url: "https://url-do-bi-ccco-1.com" },
        { nome: "BI CCCO 2", imagem: "/images/bi_ads_2.jpg", url: "https://url-do-bi-ads-2.com" },
        { nome: "BI CCCO 3", imagem: "/images/bi_ads_3.jpg", url: "https://url-do-bi-ads-3.com" }
      ]
    },
    {
      nome: "ADI - Coordenadoria de Contratos de Concessão",
      imagem: "/images/ads.png",
      bis: [
        { nome: "BI ADI 1", imagem: "/images/ads.png", url: "https://url-do-bi-ccco-1.com" },
        { nome: "BI ADI 2", imagem: "/images/bi_ads_2.jpg", url: "https://url-do-bi-ads-2.com" },
        { nome: "BI ADI 3", imagem: "/images/bi_ads_3.jpg", url: "https://url-do-bi-ads-3.com" }
      ]
    }
  ];

  const [setorAtual, setSetorAtual] = useState(0);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const handleSetorChange = (index) => {
    setSetorAtual(index);
    if (sliderRef2) {
      sliderRef2.slickGoTo(0);
    }
  };

  const settingsSlider1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => handleSetorChange(next),
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 1000,
    preventDefaultTouchmoveEvent: true
  };

  const settingsSlider2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: false,
    adaptiveHeight: true,
    preventDefaultTouchmoveEvent: true
  };

  return (
    <div className="sliders-container">
      <div className="slider-section">
        <h4>Setores</h4>
        <Slider {...settingsSlider1} ref={slider => (sliderRef1 = slider)} className="slider-setores">
          {setores.map((setor, index) => (
            <div key={index} className="setor-slide">
              <img src={setor.imagem} alt={setor.nome} />
              <h3>{setor.nome}</h3>
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="slider-section">
        <h4>PowerBIs do Setor</h4>
        <Slider {...settingsSlider2} ref={slider => (sliderRef2 = slider)} className="slider-bis">
          {setores[setorAtual].bis.map((bi, index) => (
            <div key={index} className="bi-slide">
              <a href={bi.url} target="_blank" rel="noopener noreferrer">
                <img src={bi.imagem} alt={bi.nome} />
                <h3>{bi.nome}</h3>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AsNavFor;