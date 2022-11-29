import React from "react";
import requests from "../Requests";
import "../styles/HomeScreen.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetfixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomance} />
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentary} />
    </div>
  );
}

export default HomeScreen;
