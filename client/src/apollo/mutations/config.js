import { gql } from '@apollo/client';

export const CHANGE_ADMIN_EMAIL = gql`
mutation ModifyUserName($adminUserName: String!) {
  modifyUserName(adminUserName: $adminUserName) {
    adminPassword
    adminUserName
  }
}
`;
