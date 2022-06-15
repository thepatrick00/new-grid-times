import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants'

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 48px 0;
    grid-template-columns: 5fr 3fr;
    grid-template-areas:
    'main-story secondary-stories'
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 6fr 360px 300px;
    grid-template-rows: 1fr 168px;
    gap: 0;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement'
    ;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-300);  
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

`;

const SecondaryStoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletAndUp} {
    justify-content: space-between;
    flex-direction: row;
    gap: 32px;
  }

  @media ${QUERIES.laptopAndUp} {
    flex-direction: column;
    gap: 0;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.laptopAndUp} {
    flex-direction: column;
    border-left: 1px solid var(--color-gray-300);
    padding-left: 16px;
    margin-left: 16px;

    margin-top: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
    margin-top: 16px;
  }
`;

export default MainStoryGrid;
