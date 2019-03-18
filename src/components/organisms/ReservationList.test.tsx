import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { Reservation as ReservationType } from "../../types/Reservation";
import ReservationList from "./ReservationList";

const reservations: ReservationType[] = [
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

describe("<ReservationList />", () => {
  it("renders a null state if there are no reservations", () => {
    const wrapper = shallow(<ReservationList reservations={[]} />);

    expect(wrapper.render());
  });

  it("renders all reservations", () => {
    const wrapper = shallow(<ReservationList reservations={reservations} />);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper).toContainMatchingElements(3, "Reservation");
  });
});
