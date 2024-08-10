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
      bis: [
        { nome: "Recursos Humanos", imagem: "/images/grh.png", url: "https://app.powerbi.com/view?r=eyJrIjoiZTlkYWM0NTAtNzEwNS00MTg5LThiODEtYWY5NTg0ZmRmOWNkIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9"},
        { nome: "Contratos", imagem: "/images/contratos.png", url: "https://app.powerbi.com/view?r=eyJrIjoiZTUzNDIwN2EtZDlhZS00MTk5LWJjNjQtZTQxZTEyYjg2OGYyIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9"},
        { nome: "Protocolo", imagem: "/images/protocolo.png", url: "https://app.powerbi.com/view?r=eyJrIjoiOTgxNDM0NDktZmJjYS00MDYwLWI1YmUtOWIzNTQ4MDc0ODhhIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9"}
      ]
    },
    {
      nome: "CCCO - Coordenadoria de Contratos de Concessão",
      bis: [
        { nome: "STPL", imagem: "/images/ads.png", url: "https://url-do-bi-ccco-1.com" },
        { nome: "Histórico de Índices", imagem: "/images/indices.png", url: "https://app.powerbi.com/view?r=eyJrIjoiZmU0NzAyNzctMWEyNS00YzFiLTllMWQtOTUwMGRlMGFhMDhmIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9"},
        { nome: "Multa Disciplinar", imagem: "/images/multa_disciplinar.png", url: "https://app.powerbi.com/view?r=eyJrIjoiYTkyMTc5MmEtMzI0Ni00ZDJlLTk0ODktZTM4NjQ2Yjc2MzFmIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9"}
      ]
    },
    {
      nome: "ADI - Coordenadoria de Contratos de Concessão",
      bis: [
        { nome: "BI ADI 3", imagem: "/images/bi_ads_3.jpg", url: "https://url-do-bi-ads-3.com" }
      ]
    },
    {
      nome: "CORIN - Comissão de Recursos de Infração",
      bis: [
        { nome: "Controle Processos", imagem: "/images/corin.png", url: "https://app.powerbi.com/view?r=eyJrIjoiNGYxODE0NTMtMGU3YS00NWExLWFhZTktZjBiOGU4YzYzOTNiIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9" }
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