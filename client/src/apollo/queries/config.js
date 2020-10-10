import { gql } from '@apollo/client';

export const ADMIN_DATA = gql`
query {
  adminData {
    adminUserName
    adminPassword
  }
}
`;
