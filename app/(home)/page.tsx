// "use client";
// import { useEffect, useState } from "react";

import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

// 동적인 타이틀
export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// server 컴포넌트에서는 브라우저를 통해 API를 사용하지 않는다. 백엔드에서 데이터를 가져온다.
// 첫 번째 fectch를 위해 API에 요청하고 나면 그 다음부터는 데이터가 캐싱되어 fetch할 필요 없음.
// 또한 백엔드에서 데이터를 가져오기 때문에 코드가 안전하며 API키를 사용할 수 있고, 데이터베이스와 소통할 수도 있다.
async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
  // return fetch(URL).then((response) => response.json());
}

export default async function HomePage() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const getMovies = async () => {
  // fetch는 client에서 일어난다. 이는 브라우저가 API에 요청을 보낸다는 것.
  // 네트워크 탭에서 API가 보이기 때문에 API 키 같은 보안 정보를 넣을 수 없음.DB와의 통신도 함부로 할 수 없음
  // 기존의 통신: React App <==> API <==> DB
  // sever에서 fetch를 하면 useState를 사용하지 않아도 된다.
  //   const response = await fetch(
  //     "https://nomad-movies.nomadcoders.workers.dev/movies"
  //   );
  //   const json = await response.json();
  //   setMovies(json);
  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   getMovies();
  // }, []);
  // return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
  const movies = await getMovies();
  // return <div>{JSON.stringify(movies)}</div>;
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        // <li key={movie.id}>
        //   <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        // </li>
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
