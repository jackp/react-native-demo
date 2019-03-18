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
  List,
  ListItem,
  Text,
  Fab,
  Icon
} from "native-base";

import AddReservationModal from "../modals/AddReservation";

interface IState {
  showAddReservationModel: boolean;
}

class ReservationsScreen extends React.Component<{}, IState> {
  public state: IState = {
    showAddReservationModel: false
  };

  public render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>My Reservations</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>Reservation 1</Text>
            </ListItem>
            <ListItem>
              <Text>Reservation 2</Text>
            </ListItem>
            <ListItem>
              <Text>Reservation 3</Text>
            </ListItem>
          </List>
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
