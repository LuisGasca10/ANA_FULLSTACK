import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

const TodoList = props => {
    const {handleAddItem} = props;
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(description);
        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description
        });
        setDescription("");
    };
    return (
        <Grid display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography>Agregar Tarea</Typography>
            <Grid display={"flex"}>
                <TextField
                    label="¿Qué hay que hacer?"
                    variant="outlined"
                    value={description}
                    onChange={e => setDescription(e.target.value)}></TextField>
                <Button
                    disabled={description ? "" : "disabled"}
                    onClick={handleSubmit}>Agregar</Button>
            </Grid>
        </Grid>
    );
};
export default TodoList;