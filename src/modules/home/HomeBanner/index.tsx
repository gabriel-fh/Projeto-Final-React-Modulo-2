import * as S from "../styles";

import { Banner } from "../../../types";
import Button from "../../../components/Button/Button";

type Props = {
  banner: Banner;
};

export const HomeBanner = ({ banner }: Props) => {
  return (
    <S.BannerInner>
      <S.BannerImage>
        <picture>
          <img
            alt={banner.title}
            aria-hidden="true"
            width="100%"
            src={banner.image}
          />
        </picture>
      </S.BannerImage>
      <S.BannerBackdrop />
      <S.BannerContent>
        <S.BannerContentImage src={banner.headline} alt="" />
        <div>
          <small>14</small> <strong>2021</strong>
        </div>
        <p>{banner.description}</p>
        <div>
          <Button variant="transparentFill">Go to Movie</Button>
        </div>
      </S.BannerContent>
    </S.BannerInner>
  );
};
