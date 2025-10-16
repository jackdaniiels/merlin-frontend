import dayjs, { Dayjs } from 'dayjs';

export class DateAdapter {
    private date: Dayjs;

    constructor(date?: Dayjs | null, dateString?: string) {
        const today: Dayjs = dayjs(dateString || undefined);
        this.date = date ?? today;
    }

    format(formatString: string): string {
        return this.date.format(formatString);
    }

    add(amount: number, unit: dayjs.ManipulateType): DateAdapter {
        const newDate = this.date.add(amount, unit);
        return new DateAdapter(newDate);
    }

    subtract(amount: number, unit: dayjs.ManipulateType): DateAdapter {
        const newDate = this.date.subtract(amount, unit);
        return new DateAdapter(newDate);
    }

    isBefore(otherDate: Dayjs | null): boolean {
        if (!otherDate) return false;
        return this.date.isBefore(otherDate);
    }

    isAfter(otherDate: Dayjs | null): boolean {
        if (!otherDate) return false;
        return this.date.isAfter(otherDate);
    }

    toDate(): Date {
        return this.date.toDate();
    }

    static now(): DateAdapter {
        return new DateAdapter(dayjs());
    }
}
