import Axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../NavBarAdmin";

/**
* @author
* @function Article

**/

const Article = (props) => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    axios
      .get("/westaArticle")
      .then((res) => {
        console.log(res.data);
        setAllArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <div>Article</div>;
};

export default Article;
