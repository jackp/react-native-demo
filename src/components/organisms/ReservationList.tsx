/**
 * <ReservationList />
 * - Display list of reservations
 */

import React from "react";
import { List, ListItem } from "native-base";

import Reservation from "./Reservation";

import { Reservation as ReservationType } from "../../types/Reservation";

interface IProps {
  reservations: ReservationType[];
}

const ReservationList: React.FunctionComponent<IProps> = ({ reservations }) => (
  <List>
    {reservations.map(reservation => (
      <ListItem key={reservation.id}>
        <Reservation reservation={reservation} />
      </ListItem>
    ))}
  </List>
);

export default ReservationList;
