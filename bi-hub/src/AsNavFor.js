import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const setores = [
    { nome: "ADS - Administração Setorial", bis: ["BI ADS 1", "BI ADS 2", "BI ADS 3"] },
    { nome: "CCCO - Coordenadoria de Contratos de Concessão", bis: ["BI CCCO 1", "BI CCCO 2"] },
    { nome: "ADI - Assessoria de Demandas Institucionais", bis: ["BI ADI 1", "BI ADI 2", "BI ADI 3", "BI ADI 4"] }
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
    <div className="slider-container">
      <h2>Setores e PowerBIs</h2>
      <h4>Setores</h4>
      <Slider {...settingsSlider1} ref={slider => (sliderRef1 = slider)}>
        {setores.map((setor, index) => (
          <div key={index}>
            <h3>{setor.nome}</h3>
          </div>
        ))}
      </Slider>
      <h4>PowerBIs do Setor</h4>
      <Slider {...settingsSlider2} ref={slider => (sliderRef2 = slider)}>
        {setores[setorAtual].bis.map((bi, index) => (
          <div key={index}>
            <h3>{bi}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AsNavFor;