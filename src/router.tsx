import { Route, Routes } from "react-router-dom";

import { Event } from "./pages/Event";
import { Subscribe } from "./components/Subscribe";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Subscribe />} />
    <Route path="/event" element={<Event />} />
    <Route path="/event/lesson/:slug" element={<Event />} />
  </Routes>
)
