import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        defaultView='agendaWeek'
        plugins={[dayGridPlugin]}
        eventContent={renderEventContent}
      />
    );
  }
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
