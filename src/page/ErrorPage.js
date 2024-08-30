import { useRouteError, NavLink } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <NavLink className="nav-link" to='test-market' >Главная - test-market</NavLink>
      <br />
      <NavLink className="nav-link" to='/' >Главная - "/"</NavLink>
    </div>
  );
}
