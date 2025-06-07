import  { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Box, Typography, Paper } from "@mui/material";

const initialData = {
  todo: [
    { id: "1", content: "Design Homepage" },
    { id: "2", content: "Set up Auth" },
  ],
  inProgress: [
    { id: "3", content: "Build Dashboard UI" },
  ],
  done: [
    { id: "4", content: "Create Repo" },
  ],
};

export default function KanbanPage() {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    const sourceItems = Array.from(columns[sourceCol]);
    const destItems = Array.from(columns[destCol]);
    const [movedItem] = sourceItems.splice(source.index, 1);

    if (sourceCol === destCol) {
      sourceItems.splice(destination.index, 0, movedItem);
      setColumns({ ...columns, [sourceCol]: sourceItems });
    } else {
      destItems.splice(destination.index, 0, movedItem);
      setColumns({
        ...columns,
        [sourceCol]: sourceItems,
        [destCol]: destItems,
      });
    }
  };

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>Kanban Board</Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <Box display="flex" gap={3}>
          {Object.entries(columns).map(([columnId, tasks]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  sx={{
                    minWidth: "250px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "8px",
                    padding: 2,
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="h6" gutterBottom textTransform="capitalize">
                    {columnId}
                  </Typography>
                  {tasks.map((task, index) => (
                    <Draggable draggableId={task.id} index={index} key={task.id}>
                      {(provided) => (
                        <Paper
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          sx={{ padding: 2, marginBottom: 2 }}
                        >
                          {task.content}
                        </Paper>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          ))}
        </Box>
      </DragDropContext>
    </Box>
  );
}
