import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';

interface InputDateProps {
    label?: string;
}

export default function InputDate({ label }: InputDateProps) {
    const [value, setValue] = React.useState<Dayjs | null>(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                value={value}
                enableAccessibleFieldDOMStructure={false}
                onChange={(newValue) => setValue(newValue)}
                slots={{ textField: TextField }}
                slotProps={{
                    textField: {
                        variant: 'standard',
                        fullWidth: true,
                    },
                }}
            />
        </LocalizationProvider>
    );
}
