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
        { nome: "BI ADS 1", imagem: "/images/ads.png" },
        { nome: "BI ADS 2", imagem: "/images/bi_ads_2.jpg" },
        { nome: "BI ADS 3", imagem: "/images/bi_ads_3.jpg" }
      ]
    },
    {
      nome: "CCCO - Coordenadoria de Contratos de Concessão",
      imagem: "/images/ads.png", 
      bis: [
        { nome: "BI CCCO 1", imagem: "/images/ads.png" },
        { nome: "BI ADS 2", imagem: "/images/bi_ads_2.jpg" },
        { nome: "BI ADS 3", imagem: "/images/bi_ads_3.jpg" }
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
    beforeChange: (current, next) => handleSetorChange(next)
  };

  const settingsSlider2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    adaptiveHeight: true
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
              <img src={bi.imagem} alt={bi.nome} />
              <h3>{bi.nome}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AsNavFor;