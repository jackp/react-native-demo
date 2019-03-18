import gql from "graphql-tag";
import { Reservation } from "../types/Reservation";

export const GET_RESERVATIONS = gql`
  query GetReservations {
    reservations {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export const ADD_RESERVATION = gql`
  mutation AddReservation($data: ReservationCreateInput!) {
    createReservation(data: $data) {
      id
    }
  }
`;
