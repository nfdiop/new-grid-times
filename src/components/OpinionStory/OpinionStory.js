import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </a>
  );
};

const Link = styled.a`
  background: var(--color-gray-100);

  &:not(::first-child) {
    color: red;
  }

  &::first-of-type {
    padding-bottom: 16px;
  }

  &::not(:first-of-type) {
    padding-top: 16px;
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  gap: 16px;

  @media ${QUERIES.tabletOnly} {
    display: revert;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);

  @media ${QUERIES.tabletOnly} {
    margin-bottom: 4px;
  }
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
