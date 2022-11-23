import React from "react";
import { ImgCardPequeno, LayoutCardPequeno, InfosCardPequeno, TituloCardPequeno } from "./styles";

function CardPequeno(props) {
    console.log(props.descricao)
  return (
    <LayoutCardPequeno>
      <ImgCardPequeno src={props.imagem} />
      <InfosCardPequeno>
        <TituloCardPequeno>{props.nome}</TituloCardPequeno>
        <p>{props.descricao}</p>
      </InfosCardPequeno>
    </LayoutCardPequeno>
  );
}

export default CardPequeno;
