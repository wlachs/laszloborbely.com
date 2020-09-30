import { gql } from '@apollo/client';

export const PROJECTS = gql`
query {
  projects {
    name
    description
    imageLink
    pageLink
  }
}`;
