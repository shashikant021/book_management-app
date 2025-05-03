import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Oops!</h1>
      <h2>
        {err.status}--{err.statusText}
      </h2>
      <h3>{err.data}</h3>
      <p>Sorry, the page you're looking for does not exist.</p>
    </div>
  );
}
export default Error;
