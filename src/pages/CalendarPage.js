import  { useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Typography, Box } from "@mui/material";

export default function CalendarPage() {
  const [events, setEvents] = useState([
    { title: "Team Meeting", date: "2025-06-10" },
    { title: "Release Launch", date: "2025-06-14" },
  ]);

  const handleDateClick = (info) => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
    }
  };

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Calendar
      </Typography>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        editable={true}
        selectable={true}
        height="auto"
      />
    </Box>
  );
}
