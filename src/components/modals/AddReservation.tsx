/**
 * <AddReservationModal />
 * - Add new reservation
 */

import React from "react";
import { Modal, View, Text } from "react-native";
import { Mutation } from "react-apollo";
import DatePicker, { DatePickerProps } from "react-native-datepicker";
import {
  Header,
  Body,
  Title,
  Left,
  Right,
  Button,
  Icon,
  Content,
  Form,
  Item,
  Input
} from "native-base";

import { Reservation } from "../../types/Reservation";
import { ADD_RESERVATION } from "../../graphql/reservations";

interface IProps {
  visible: boolean;
  onClose: () => void;
  onCancel: () => void;
}

interface IState extends Partial<Reservation> {}

const datePickerOptions: DatePickerProps = {
  style: {
    flex: 1
  },
  format: "MM/DD/YYYY",
  confirmBtnText: "Confirm",
  cancelBtnText: "Cancel"
};
class AddReservationModal extends React.Component<IProps, IState> {
  public state: IState = {
    name: "",
    hotelName: "",
    arrivalDate: "",
    departureDate: ""
  };

  public render() {
    const { visible, onClose, onCancel } = this.props;

    return (
      <View>
        <Modal visible={visible} animationType="slide">
          <Header>
            <Left>
              <Button transparent={true} onPress={onClose}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Add New</Title>
            </Body>
            <Right>
              <Button transparent={true} onPress={onCancel}>
                <Text>Cancel</Text>
              </Button>
            </Right>
          </Header>
          <Content>
            <Form>
              <Item>
                <Input
                  placeholder="Name"
                  onChangeText={text => this.setState({ name: text })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="Hotel"
                  onChangeText={text => this.setState({ hotelName: text })}
                />
              </Item>
              <Item>
                <DatePicker
                  date={this.state.arrivalDate}
                  placeholder="Arrival Date"
                  {...datePickerOptions}
                  onDateChange={date => this.setState({ arrivalDate: date })}
                />
              </Item>
              <Item last={true}>
                <DatePicker
                  date={this.state.departureDate}
                  placeholder="Departure Date"
                  {...datePickerOptions}
                  onDateChange={date => this.setState({ departureDate: date })}
                />
              </Item>
              <Mutation
                mutation={ADD_RESERVATION}
                refetchQueries={["GetReservations"]}
              >
                {addReservation => (
                  <Button
                    full={true}
                    onPress={() =>
                      addReservation({ variables: { data: this.state } }).then(
                        this.props.onClose
                      )
                    }
                  >
                    <Text>Add New Reservation</Text>
                  </Button>
                )}
              </Mutation>
            </Form>
          </Content>
        </Modal>
      </View>
    );
  }
}

export default AddReservationModal;
