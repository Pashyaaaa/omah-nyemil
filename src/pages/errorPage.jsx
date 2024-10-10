import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="w-full min-h-screen flex justify-center items-center gap-5 flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl font-semibold">Sorry, Unexpected Error.</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};
export default ErrorPage;
