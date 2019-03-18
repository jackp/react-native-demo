/**
 * <ReservationsScreen />
 * - Display existing reservations
 */

import React from "react";
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Fab,
  Icon
} from "native-base";

import AddReservationModal from "../modals/AddReservation";
import ReservationList from "../organisms/ReservationList";
import { Reservation } from "../../types/Reservation";

interface IState {
  showAddReservationModel: boolean;
}

const reservations: Reservation[] = [
  {
    id: "1",
    name: "Jack Parker",
    hotelName: "Hilton PVD",
    arrivalDate: "3/7/2019",
    departureDate: "3/17/2019"
  },
  {
    id: "2",
    name: "Bob Barker",
    hotelName: "Hilton Las Vegas",
    arrivalDate: "3/17/2019",
    departureDate: "6/17/2019"
  },
  {
    id: "3",
    name: "George Costanza",
    hotelName: "Hilton NYC",
    arrivalDate: "4/7/2019",
    departureDate: "4/17/2019"
  }
];

class ReservationsScreen extends React.Component<{}, IState> {
  public state: IState = {
    showAddReservationModel: false
  };

  public render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Current Reservations</Title>
          </Body>
        </Header>
        <Content>
          <ReservationList reservations={reservations} />
        </Content>
        <Fab position="bottomRight" onPress={this.toggleAddReservationModal}>
          <Icon name="add" />
        </Fab>
        <AddReservationModal
          visible={this.state.showAddReservationModel}
          onClose={this.toggleAddReservationModal}
          onCancel={this.toggleAddReservationModal}
        />
      </Container>
    );
  }

  private toggleAddReservationModal = () => {
    this.setState({
      showAddReservationModel: !this.state.showAddReservationModel
    });
  };
}

export default ReservationsScreen;
