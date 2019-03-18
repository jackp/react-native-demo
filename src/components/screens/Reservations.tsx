/**
 * <ReservationsScreen />
 * - Display existing reservations
 */

import React from "react";
import { Query } from "react-apollo";
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

import { GET_RESERVATIONS } from "../../graphql/reservations";

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
            <Title>Current Reservations</Title>
          </Body>
        </Header>
        <Content>
          <Query query={GET_RESERVATIONS}>
            {({ data, loading, error }) => {
              if (loading) return <Title>Loading....</Title>;
              if (error) return `Error! ${error.message}`;

              return <ReservationList reservations={data.reservations} />;
            }}
          </Query>
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
