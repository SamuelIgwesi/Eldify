import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  let errorObj: { statusText?: string; message?: string } = {};
  if (error instanceof Error) {
    errorObj.message = error.message;
  } else if (typeof error === "object" && error !== null) {
    errorObj = error as { statusText?: string; message?: string };
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorObj.message}</i>
      </p>
    </div>
  );
}
