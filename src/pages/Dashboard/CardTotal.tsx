import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import cardTotalStyles from '@styles/card_total.module.scss';

const CardTotal = () => {

    const { statics } = useSelector((state: RootState) => state.historic);
    const { value, spendTotal } = statics[0] || { value: '0', spendTotal: '0' };

    return (
        <>
            {
                value !== '0' && <div className={cardTotalStyles.card_total}>
                    <h6 className={cardTotalStyles.card_total__title}>
                        Gasto total <span className={cardTotalStyles.card_total__filter}>{value}</span>:
                    </h6>
                    <span className={cardTotalStyles.card_total__amount}>{spendTotal}</span>
                </div>
            }
        </>
    )
}

export default CardTotal