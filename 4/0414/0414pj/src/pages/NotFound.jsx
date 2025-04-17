import React from "react";
import { useRouteError } from "react-router-dom";
import DetailPage from "./DetailPage";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div>
      <p>
        {error.status === 404 ? "요청한 페이지가 없음" : <DetailPage />}
        {error.data || error.statusText}
      </p>
    </div>
  );
};

export default NotFound;
