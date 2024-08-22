export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // console.log(props); props는 대괄호에 지정한 id가 전해짐.
  return <h1>Movie {id}</h1>;
}
