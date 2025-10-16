
import dayjs, { Dayjs } from 'dayjs';
import dateRangeStyles from '@styles/date_range.module.scss';
import InputDate from './InputDate';
import { Button } from './Button';
import { useState } from 'react';
import { SelectFilter } from './SelectFilter';

interface DateRangeProps {
    min: string;
    max: string;
}

export const DateRange = ({ min, max }: DateRangeProps) => {

    const minDate = dayjs(min);
    const maxDate = dayjs(max);
    const [startDate, setStartDate] = useState<Dayjs | null>(minDate);
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(maxDate));

    const handleApplyRange = () => {
        console.log('ok apply range');
    }

    return (
        <div className={dateRangeStyles.date_range}>
            <div className={dateRangeStyles.date_range__controls}>
                <SelectFilter
                    cleanValue={false}
                    label='Periodo'
                    name='type'
                    options={['Semestre', 'Trimestre', 'Mensual', 'Semanal', 'Diario']}
                    handleOnChange={(value) => { console.log(value) }}
                    value={'Semestre'} />
                <InputDate label='Fecha inicial' value={startDate} setValue={setStartDate} />
                <InputDate label='Fecha final' value={endDate} setValue={setEndDate} />
                {/* <Button onClick={handleApplyRange} disabled={(!startDate || !endDate ? true : false)}>Filtrar</Button> */}
                <Button onClick={handleApplyRange} disabled={true}>Filtrar</Button>
            </div>
        </div>
    )
}
