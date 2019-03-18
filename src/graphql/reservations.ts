import gql from "graphql-tag";

export const GET_RESERVATIONS = gql`
  query {
    reservations {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;
