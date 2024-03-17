import styled, { css } from "styled-components";

export const Avatar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AvatarImg = styled.img`
  height: 32px;
  width: 32px;
`;

export const Banner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  /* width: 100vw; */
  z-index: 1;
  margin-top: -80px;
  min-height: 70vh;
`;

export const BannerInner = styled.div`
  align-items: center;
  flex-direction: column;
  height: min(80vh, 450px);
  justify-content: end;
  min-height: 420px;
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  scroll-snap-align: start;
  /* width: 100vw; */

  align-items: flex-start;
  min-height: calc(42.1875vw);

  height: min(56.25vw, 87vh);
`;

export const BannerImage = styled.div`
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: -100;
`;

export const BannerBackdrop = styled.div`
  inset: 0px;
  position: absolute;
  background: linear-gradient(
      0deg,
      rgb(0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 30%,
      rgba(0, 0, 0, 0) 70%
    ),
    linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.25) 15%,
      rgba(0, 0, 0, 0) 50%
    );
`;

export const BannerContent = styled.div`
  bottom: calc(44px);
  position: absolute;
  left: 0px;
  right: 0px;
  /* margin: auto; */
  width: 458px;
  padding: 0px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 1.6rem;
  color: #fff;
  line-height: 1.5;
  & > p {
    overflow-wrap: break-word;
  }
`;

export const BannerContentImage = styled.img`
  aspect-ratio: 432 / 130;
  width: 100%;
  max-width: 365px;
`;

export const BannerVideo = styled.div`
  animation-direction: normal;
  animation-duration: 250ms;
  animation-fill-mode: forwards;
  animation-name: jBcSpD;
  animation-timing-function: linear;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
  z-index: -1;

  video {
    height: 100%;
    width: 100%;
    display: none;
  }

  @keyframes jBcSpD {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const BannerDots = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);

  span {
    background-color: rgba(134, 151, 206, 0.5);
    border-radius: 50%;
    height: 8px;
    width: 8px;
    cursor: pointer;

    &.active {
      background-color: #fff;
      transform: scale(1.2);
    }
  }
`;

export const Offers = styled.div`
  position: relative;
  padding: 0 32px 48px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-image: linear-gradient(
    0deg,
    hsl(245deg 76% 7%) 0%,
    hsl(245deg 97% 6%) 50%,
    hsl(0deg 0% 0%) 100%
  );
`;

export const Offer = styled.section`
  position: relative;
`;

export const OfferTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
`;

export const OfferList = styled.div`
  display: flex;
  gap: 16px;
`;

export const OfferListItem = styled.div`
  display: flex;
  border: 2px solid transparent;
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;

  aspect-ratio: 0.666667 / 1;

  &:hover {
    border-color: #fff;
  }
`;

export const OfferListItemSkeleton = styled.div`
  background-color: #aaa;
  width: 100%;
  height: 100%;
  aspect-ratio: 0.666667 / 1;
`;

export const DropDownMenu = styled.div`
  position: fixed;
  top: 0;
  right: 32px;
  width: 200px;
  /* background-color: rgba(0, 0, 0, 0.8); */
  z-index: 400;
  border-radius: 0 0 8px 8px;
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  overflow: hidden;
  text-overflow: ellipsis;

  @keyframes slide-top {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const DropDownMenuItem = styled.div<{
  $active?: boolean;
  $border?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #ddd;
  background-color: rgba(0, 0, 0, 0.8);

  &:hover {
    background-color: rgba(25, 25, 25, 0.9);
  }

  ${({ $border }) =>
    $border && `border-top: 1px solid rgba(255, 255, 255, 0.07);`}

  ${({ $active }) =>
    $active &&
    css`
      background-color: rgba(0, 0, 0, 1);

      &:hover {
        background-color: rgba(0, 0, 0, 1);
      }
    `}
`;

export const Language = styled.div<{ $hide: boolean }>`
  ${({ $hide }) =>
    !$hide
      ? css`
          position: absolute;
          right: -100%;
          display: none;
        `
      : css`
          position: static;
          right: 0;
          display: block;
        `}
`;

export const Options = styled.div<{ $hide: boolean }>`
  ${({ $hide }) =>
    $hide &&
    css`
      position: absolute;
      left: -100%;
    `}
`;
