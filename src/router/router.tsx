import React from "react";
import { Route, Routes } from "react-router-dom";
import Reservation from "../pages/reservation/reservation";
import Main from "../pages/main/main";
import Check from "../pages/check/check";
import BusInfo from "../pages/busInfo/busInfo";
import Announcement from "../pages/announcement/announcement";
import Order from "../pages/order/order";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/check" element={<Check />} />
        <Route path="/businfo" element={<BusInfo />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}
