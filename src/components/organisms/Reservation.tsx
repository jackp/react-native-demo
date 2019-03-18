/**
 * <Reservation />
 * - Display reservation information
 */

import React from "react";
import { Card, CardItem, Text, Title, Body } from "native-base";

import { Reservation as ReservationType } from "../../types/Reservation";

interface IProps {
  reservation: ReservationType;
}

const Reservation: React.FunctionComponent<IProps> = ({ reservation }) => (
  <Card transparent={true} style={{ flex: 1 }}>
    <CardItem header={true}>
      <Title testID="name">{reservation.name}</Title>
    </CardItem>
    <CardItem>
      <Body>
        <Text testID="hotelName">Hotel: {reservation.hotelName}</Text>
        <Text testID="arrivalDate">
          Arrival Date: {reservation.arrivalDate}
        </Text>
        <Text testID="departureDate">
          Departure Date: {reservation.departureDate}
        </Text>
      </Body>
    </CardItem>
  </Card>
);

export default Reservation;
