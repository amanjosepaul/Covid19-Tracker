import React, { useEffect, useState } from "react";
import India from ".//images/India.jpg";
import CovidImg from ".//images/covid19.jpeg";
import CovidImg2 from ".//images/covid19-2.jpeg";
import TotallRecover from ".//images/TotallRecover.jpeg";
import Totaldeath from ".//images/Totaldeath.jpeg";
import covidupdate from ".//images/covidupdate.jpeg";
import Cardcovid from "./Cardcovid";

function Covid(props) {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      // console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container">
        <hr style={{ color: "black" }} />
        <div className="row">
          <Cardcovid image={India} title="India" details="Covid-19 Cases" />
          <Cardcovid
            image={CovidImg}
            title="Active Cases:"
            details={data.active}
          />
          <Cardcovid
            image={CovidImg2}
            title="Confirmed Cases:"
            details={data.confirmed}
          />
          <Cardcovid
            image={TotallRecover}
            title="Totall Recovered:"
            details={data.recovered}
          />
          <Cardcovid
            image={Totaldeath}
            title="Totall Deaths:"
            details={data.deaths}
          />
          <Cardcovid
            image={covidupdate}
            title="Last Updated:"
            details={data.lastupdatedtime}
          />
        </div>
      </div>
    </>
  );
}

export default Covid;
