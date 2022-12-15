import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import { COLORS, QUERIES } from "../../constants";
import Advertisement from "../Advertisement";
import MainStory from "../MainStory";
import OpinionStory from "../OpinionStory";
import SecondaryStory from "../SecondaryStory";
import SectionTitle from "../SectionTitle";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <VerticalStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <>
              <SecondaryStory key={story.id} {...story} />
            </>
          ))}
        </VerticalStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <FlexibleStoryList>
          {OPINION_STORIES.map((story, index) => (
            <>
              <OpinionStory key={story.id} {...story} />
            </>
          ))}
        </FlexibleStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --gap: 48px;
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: var(--gap);
  margin-bottom: var(--gap);

  @media ${QUERIES.tabletAndUp} {
    gap: 0px;
    grid-template-areas:
      "main-story main-story main-story secondary-stories"
      "advertisement advertisement advertisement advertisement"
      "opinion-stories opinion-stories opinion-stories opinion-stories";
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      "main-story main-story main-story main-story secondary-stories secondary-stories secondary-stories opinion-stories opinion-stories"
      "main-story main-story main-story main-story advertisement advertisement advertisement advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    border-right: solid 1px var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: solid 1px var(--color-gray-300);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: var(--color-gray-300);

  > * {
    background: var(--color-gray-100);
  }

  > *:not(:last-child) {
    padding-bottom: 16px;
  }

  > *:not(:first-child) {
    padding-top: 16px;
  }
`;

const VerticalStoryList = styled(StoryList)``;

const FlexibleStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    display: grid;
    gap: 32px;
    background-color: revert;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    margin-left: 16px;
    padding-top: 16px;
    margin-top: 16px;
    border-top: solid 1px var(--color-gray-300);
  }
`;

export default MainStoryGrid;
