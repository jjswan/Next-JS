import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// 동적인 제목을 갖는 홈페이지를 위해 존재함
// page component가 params에서 url의 id를 전달받는 것처럼 Dynamic MetaData에서도 params를 받음

type IParams = {
  params: { id: string };
};

export async function generateMetaData({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };

  // return {
  //   title: `${movie.title} | Next JS`,
  //   description: movie.description || "The best movies on the best framework",
  // };
}

// async function getMovie(id: string) {
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideos(id: string) {
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

export default async function MovieDetail({ params: { id } }: IParams) {
  // console.log(props); props는 대괄호에 지정한 id가 전해짐.
  // 여기서는 getMovie가 이뤄진 다음에야 getVideos가 이뤄질 수 있다.
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  // 두 함수가 동시에 이뤄지도록 병렬 처리한다(parallel)
  // 동시에 이뤄지는 것은 좋지만, 두 가지가 모두 처리될 때까지 또 기다려야 함.
  // getMovies와 getVideos를 분리하자
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  // return <h1>{movie.title}</h1>;

  return (
    <div>
      {/* suspense 덕분에 Loading.tsx 도 필요없음 */}
      <Suspense fallback={<h1>Loading MovieInfo</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading MovieVideos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
