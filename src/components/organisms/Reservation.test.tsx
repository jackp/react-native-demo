import "react-native";
import React from "react";
import { mount } from "enzyme";

import { Reservation as ReservationType } from "../../types/Reservation";
import Reservation from "./Reservation";

const reservation: ReservationType = {
  id: "1",
  name: "Jack Parker",
  hotelName: "Hilton PVD",
  arrivalDate: "3/7/2019",
  departureDate: "3/17/2019"
};

describe("<Reservation />", () => {
  it("displays all relevant data", () => {
    const wrapper = mount(<Reservation reservation={reservation} />);
    expect(wrapper).toMatchSnapshot();

    expect(
      wrapper.findWhere(node => node.prop("testID") === "name").first()
    ).toIncludeText(reservation.name);
    expect(
      wrapper.findWhere(node => node.prop("testID") === "hotelName").first()
    ).toIncludeText(reservation.hotelName);
    expect(
      wrapper.findWhere(node => node.prop("testID") === "arrivalDate").first()
    ).toIncludeText(reservation.arrivalDate);
    expect(
      wrapper.findWhere(node => node.prop("testID") === "departureDate").first()
    ).toIncludeText(reservation.departureDate);
  });
});
