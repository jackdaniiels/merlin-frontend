

import dateRangeStyles from '@styles/date_range.module.scss';
import InputDate from './InputDate';
import { Button } from './Button';
export const DateRange = () => {

    const handleApplyRange = () => {
        console.log('ok apply range');
    }

    return (
        <div className={dateRangeStyles.date_range}>
            <div className={dateRangeStyles.date_range__controls}>
                <InputDate label='Fecha inicial' />
                <InputDate label='Fecha final' />
                <Button onClick={handleApplyRange}>Aplicar</Button>
            </div>
        </div>
    )
}
