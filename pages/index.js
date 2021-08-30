import Head from "next/head";
import Content from "../components/Content";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import requests from "../utils/requests";

export default function Home({results}) {
  return (
    <div>
      <Meta keywords="hulu, delta, mohab, movies, movie, trending, web devlopment, programming, muhab"
      />
      <Header />
      <Nav />
      <Content results={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props:{
      results:request.results
    }
  }
}
