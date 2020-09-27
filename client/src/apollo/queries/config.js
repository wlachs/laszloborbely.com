import { gql } from '@apollo/client';

export const PAGE_TITLE = gql`
      query {
        config {
          pageTitle
        }
      }
    `;
