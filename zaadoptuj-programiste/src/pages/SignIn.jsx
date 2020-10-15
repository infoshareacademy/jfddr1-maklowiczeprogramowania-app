import React from "react";
import styled from "styled-components";
import MobTemplate from "../components/MobTemplate";

const MobLabel = styled.label`
`;

const SignIn = () => {
  return (
  <MobTemplate>
      <h1>Załóż konto</h1>
      <label>Imię</label>
      <input></input>
      <label>Nazwisko</label>
      <input></input>
      <label>Email</label>
      <input></input>
      <label>Hasło</label>
      <input></input>
      <p>Masz już konto? Zaloguj się tutaj</p>
      <p>Wypełnij nasz szczegółowy formularz, żeby korzystać ze wszystkich możliwości, zrób to teraz i miej to z głowy! Możesz też pominąć ten krok i przyglądać się naszemu portalowi z nieco dalszej odległości!</p>
  </MobTemplate>
  );
}

export default SignIn;
