import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  margin-top: 12px;
  padding: 0 12px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0;
  margin: 12px 0;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
  width: 20%;
`;

const Resultado = ({ resultado, monedas }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Precio>
        <Imagen
          src={`https:cryptocompare.com/${IMAGEURL}`}
          alt="Imagen Cripto"
        />
        {monedas.criptomoneda} <span>{PRICE}</span>
      </Precio>
      <Texto>
        Precio mas Alto: <span>{HIGHDAY}</span>
      </Texto>
      <Texto>
        Precio mas Bajo: <span>{LOWDAY}</span>
      </Texto>
      <Texto>
        Variacion: <span>{CHANGEPCT24HOUR}</span>
      </Texto>
      <Texto>
        Ultima Actualizacion: <span>{LASTUPDATE}</span>
      </Texto>
    </Contenedor>
  );
};

export default Resultado;
