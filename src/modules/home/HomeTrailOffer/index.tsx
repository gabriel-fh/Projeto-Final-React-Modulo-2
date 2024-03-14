import * as S from "../styles";

import { useEffect, useState } from "react";

import { TrailOffer } from "../../../types";
import { useGetOffer } from "../hooks/get-offer";
import { useInView } from "react-intersection-observer";

type Props = {
  trailOffer: TrailOffer;
};

const OfferSkeleton = () => {
  return [1, 2, 3, 4, 5, 6].map((i) => <S.OfferListItemSkeleton key={i} />);
};

export const HomeTrailOffer = ({ trailOffer }: Props) => {
  const { offerId } = trailOffer;
  const [startLoading, setStartLoading] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const { data } = useGetOffer(offerId, startLoading);

  useEffect(() => {
    if (inView) {
      setStartLoading(true);
    }
  }, [inView]);

  const render = () => {
    if (data?.offers?.length) {
      return data.offers.map((offer) => (
        <S.OfferListItem key={offer.id}>
          <img src={offer.image} alt={offer.title} />
        </S.OfferListItem>
      ));
    }
    return <OfferSkeleton />;
  };

  return (
    <S.Offer ref={ref}>
      <S.OfferTitle>{trailOffer.title}</S.OfferTitle>
      <S.OfferList>{render()}</S.OfferList>
    </S.Offer>
  );
};
