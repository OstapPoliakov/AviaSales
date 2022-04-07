import React from "react";
import pageNotFound from "../../img/Page_not_found.png";
import s from "./PageNotFound404.module.css";

export default function PageNotFound() {
  return (
    <div className={s.img_container}>
      <img src={pageNotFound} alt="error 404, page not found" />
    </div>
  );
}
