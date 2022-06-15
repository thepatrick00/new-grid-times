import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Anchor href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Anchor>
  );
};

const Anchor = styled.a`
  &:not(:last-of-type) {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }

  @media ${QUERIES.tabletAndUp} {
    max-width: 172px;
    
    &:not(:last-of-type) {
      border-bottom: none;
    }
  }

  @media ${QUERIES.laptopAndUp} {
    max-width: revert;
    &:not(:last-of-type) {
      padding-bottom: 16px;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--color-gray-300);
    } 
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);

  
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  float: right;
  margin-left: 16px;

  @media ${QUERIES.tabletAndUp} {
    float: revert;
    display: block;
    margin: 0 0 8px;
  }

  @media ${QUERIES.laptopAndUp} {
    float: right;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 0px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
