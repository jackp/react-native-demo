/**
 * <AddReservationModal />
 * - Add new reservation
 */

import React from "react";
import { Modal, View, Text } from "react-native";
import { Header, Body, Title, Left, Right, Button, Icon } from "native-base";

interface IProps {
  visible: boolean;
  onClose: () => void;
  onCancel: () => void;
}

const AddReservationModal: React.FunctionComponent<IProps> = ({
  visible,
  onClose,
  onCancel
}) => (
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
      <Text>Modal</Text>
    </Modal>
  </View>
);

export default AddReservationModal;
