import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: 0;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(
    180deg,
    hsl(235deg 83% 16%) 0%,
    hsl(235deg 79% 15%) 23%,
    hsl(237deg 74% 14%) 33%,
    hsl(239deg 68% 13%) 41%,
    hsl(244deg 68% 12%) 49%,
    hsl(248deg 70% 10%) 56%,
    hsl(251deg 72% 9%) 63%,
    hsl(254deg 75% 8%) 71%,
    hsl(254deg 78% 6%) 80%,
    hsl(251deg 84% 5%) 100%
  );
`;

export const Unscrollable = styled.div`
  animation-duration: 50ms;
  animation-fill-mode: forwards;
  animation-name: anime;
  animation-timing-function: ease-out;
  background: linear-gradient(
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.5) 25%,
    rgba(0, 0, 0, 0.45) 50%,
    rgba(0, 0, 0, 0.25) 75%,
    rgba(0, 0, 0, 0) 100%
  );
  inset: 0px;
  height: auto;
  /* position: fixed; */

  @keyframes anime {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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

export const OfferListItemSkeleton = styled.div`
  background-color: #aaa;
  width: 100%;
  height: 100%;
  aspect-ratio: 0.666667 / 1;
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

export const OfferList = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;