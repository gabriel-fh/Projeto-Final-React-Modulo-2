import * as S from "./styles";
import * as PagesStyles from "../styles/styles";

import { HomeBanner } from "./HomeBanner";
import { HomeTrailOffer } from "./HomeTrailOffer";
import clsx from "clsx";
import { useGetBanners } from "./hooks/get-banners";
import { useGetTrailOffers } from "./hooks/get-trail-offers";
import { useEffect, useState } from "react";
import Header  from "../../components/Header/Header";

export const Home = () => {
  const { data: banners } = useGetBanners();
  const { data: trailOffers } = useGetTrailOffers();
  const [index, setIndex] = useState(0);
  const banner = banners?.[index] || null;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (banners?.length || 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PagesStyles.Container>
        <PagesStyles.Unscrollable />
        <Header />
        <S.Banner>
          {banner ? <HomeBanner banner={banner} /> : null}
          <S.BannerDots>
            {banners?.map((banner, idx) => (
              <span
                key={banner.id}
                onClick={() => setIndex(idx)}
                className={clsx({
                  active: idx === index,
                })}
              ></span>
            ))}
          </S.BannerDots>
        </S.Banner>
        <S.Offers>
          {trailOffers?.map((trailOffer) => {
            return (
              <HomeTrailOffer
                key={trailOffer.offerId}
                trailOffer={trailOffer}
              />
            );
          })}
        </S.Offers>
      </PagesStyles.Container>
    </>
  );
};
