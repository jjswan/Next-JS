import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

// parallel에서 분리하여 영화 정보만 가져옴.
async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>{movie.vote_average}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
