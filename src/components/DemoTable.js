import {
    Card,
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useState } from 'react';

import { tableHeaders, dropDownValues } from '../constants';

function DemoTable() {
    const [fruitDropdown, setFruitDropdown] = useState(dropDownValues[0].value);
    const [fruitTextfield, setFruitTextField] = useState('');
    const [fruitsList, setFruitsList] = useState([dropDownValues[0]]);
    const [fruitListInput, setFruitListInput] = useState('');
    
    const handleSelectChange = event => {
        setFruitDropdown(event.target.value);
    };

    const handleChipChange = (event, newValue) => {
        setFruitsList(newValue);
    };

    const handleChipInputChange = (event, newInputValue) => {
        setFruitListInput(newInputValue);
    };

    const handleTextChange = event => {
        setFruitTextField(event.target.value);
    };

    return (
        <Card>
            <CardContent>
                <Table>
                    <TableHead>
                        <TableRow>
                            {tableHeaders.map(item => (
                                <TableCell
                                    key={item.id}
                                    align={item.align}
                                    style={{ fontWeight: 'bold' }}
                                >
                                    {item.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel htmlFor="outlined-select">Select Fruit</InputLabel>
                                    <Select
                                        value={fruitDropdown}
                                        onChange={handleSelectChange}
                                        label="Select Fruit"
                                        inputProps={{
                                            name: 'fruit',
                                            id: 'outlined-select'
                                        }}
                                    >
                                        {dropDownValues.map(fruit => (
                                            <MenuItem key={fruit.value} value={fruit.value}>{fruit.label}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell style={{ width: 449 }}>
                            <Autocomplete
                                fullWidth
                                multiple
                                id="fruitsList"
                                value={fruitsList}
                                options={dropDownValues}
                                onChange={handleChipChange}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => {
                                    return <TextField
                                        {...params}
                                        value={fruitListInput}
                                        onChange={handleChipInputChange}
                                        variant="outlined"
                                        label="Select Multiple Fruits"
                                    />
                                }}
                            />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    id="fruits"
                                    value={fruitTextfield}
                                    label="Enter Fruit"
                                    variant="outlined"
                                    onChange={handleTextChange}
                                    fullWidth
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default DemoTable;