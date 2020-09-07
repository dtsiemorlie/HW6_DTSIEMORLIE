import React, { useState, useEffect } from "react";
import Logo from "./Components/Logo";
import "./App.css";
import Card from "./Components/Card";
import Row from "./Components/Row";
import Card2 from "./Components/Card2";
import Axios from "axios";
/*const endpoint = "https://gtl-covid-api.herokuapp.com/api";*/
const endpoint = "https://corona.lmao.ninja/v2/countries/gh";
export default function App(props) {
  const [data, setData] = useState(null);
  const [summary, setSummary] = useState(null);
  useEffect(() => {
    Axios.get(endpoint)
      .then((response) => {
        const CovidData = response.data;
        let Cases = CovidData.cases;
        let Deaths = CovidData.deaths;
        let Active = CovidData.active;
        let Recoveries = CovidData.recovered;

        setSummary([
          { title: "Total Cases", value: Cases },
          { title: "Recoveries", value: Recoveries },
          { title: "Deaths", value: Deaths },
          { title: "Active Cases", value: Active },
        ]);

        console.log(CovidData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Logo />
      <div>
        {summary !== null &&
          summary.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                value={item.value}
                indicator={require("./Assets/redarrow.png")}
              />
            );
          })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            borderWidth: "1px",
            borderColor: "#ff000",
            padding: "1px",
            /*width: "1000px",
            height: "600px",*/
            borderStyle: "solid",
            marginLeft: "20px",
            marginTop: "120px",
          }}
        >
          <Row
            hover={false}
            backgroundColor="rgb(228, 228, 228)"
            country="Country"
            active="Total Active"
            recoveries=" Total Recoveries"
            deaths="Total Deaths"
            cases="Total Cases"
          />
          <Row
            hover={true}
            backgroundColor="rgba(255, 0, 0,0.1)"
            country="Ghana"
            active="801"
            recoveries="43693"
            deaths="283"
            cases="44777"
          />
        </div>

        <div
          style={{
            marginLeft: "50px",
            marginRight: "40px",
            marginTop: "120px",
          }}
        >
          <Card2 title="Health Tips" />
          <Card2 title="News update" />
        </div>
      </div>
    </div>
  );
}
