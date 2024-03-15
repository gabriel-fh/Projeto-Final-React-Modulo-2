import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import * as PagesStyles from "../styles/styles";
import { useInView } from "react-intersection-observer";
import { useGetTmdbData } from "../../hooks/get-tmdb-data/get-tmdb-data";
import { useLocation } from "react-router-dom";

const Skeleton = () => {
  return [1, 2, 3, 4, 5].map((i) => (
    <PagesStyles.OfferListItemSkeleton key={i} style={{width: '253px', height: '380px'}}/> // Corrigido a altura
  ));
};

export const KidsFamily = () => {
  const [startLoading, setStartLoading] = useState(false);
  const [key, setKey] = useState(0); // Adicionado para forçar a re-renderização

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const location = useLocation(); 

  useEffect(() => {
    // Resetando o startLoading para reiniciar a requisição
    setStartLoading(false);
    setKey(prevKey => prevKey + 1); // Aumenta a chave para forçar re-fetch
    setTimeout(() => setStartLoading(true), 0); // Um pequeno delay para garantir a reativação
  }, [location.pathname]);

  const { data } = useGetTmdbData(key, 'movie', startLoading, 'discover');


  useEffect(() => {
    if (inView) {
      setStartLoading(true);
    }
  }, [inView]);

  const render = () => {
    if (data?.length) {
      return data.map((item) => (
        <PagesStyles.OfferListItem key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            width={"253"}
            height={"380"}
          />
        </PagesStyles.OfferListItem>
      ));
    }

    return <Skeleton />;
  };

  return (
    <PagesStyles.Container>
      <PagesStyles.Unscrollable>
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "3.2rem",
            overflow: "auto",
          }}
        >
          <PagesStyles.OfferList
            style={{ alignItems: "center", justifyContent: "center", gap: "1rem"}}
            ref={ref}
          >
            {render()}
          </PagesStyles.OfferList>
        </div>
      </PagesStyles.Unscrollable>
    </PagesStyles.Container>
  );
};
