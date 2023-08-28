import { gql } from '@apollo/client';

export const CONTACT_US_DOCUMENT = gql`
  mutation contactUs($firstName: String!, $lastName: String!, $email: String!, $jobTitle: String!, $company: String!, $headcount: String!, $message: String!) {
    contactUs(input: { firstName: $firstName, lastName: $lastName, email: $email, jobTitle: $jobTitle, company: $company, headcount: $headcount, message: $message })
  }
`;
