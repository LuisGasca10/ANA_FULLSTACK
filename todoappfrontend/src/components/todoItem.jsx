import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from './checkbox';
import IconButton from '@mui/material/IconButton';
import { CiEdit } from "react-icons/ci";
import { Button, Grid } from '@mui/material';

const TodoItem = props => {
    const { list, setList } = props;

    const onChangeStatus = e => {
        const { name, checked } = e.target;

        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };

    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };

    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));

    return (
        <Grid>
            <List sx={{ backgroundColor: 'gray' }}>
                {list.length ? chk : "No tasks"}
                {list.length ? (
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <CiEdit />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={`Line item`} />
                    </ListItem>
                ) : null}
            </List>
            <Button onClick={onClickRemoveItem}>Eliminar tareas marcadas</Button>
        </Grid>

    );
};
export default TodoItem;