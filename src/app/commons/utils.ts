import * as moment from 'moment';

export class AlgaDate {
    date: Date;
    
    constructor(date: Date) {
        this.date = date;
    }

    formatted(): String {
        return moment(this.date).format('DD/MM/yyyy');
    }
}

export default class Utils {

    static readonly MONDAY_INDEX = 1;
    static readonly FRIDAY_INDEX = 5;

    static currentMonday(): AlgaDate {
        return new AlgaDate(this.currentWeekDate(Utils.MONDAY_INDEX));
    }

    static currentFriday(): AlgaDate {
        return new AlgaDate(this.currentWeekDate(Utils.FRIDAY_INDEX));
    }

    private static currentWeekDate(dayOfTheWeek: number): Date {
        const currDate = new Date();
        const calc = currDate.getDate() - currDate.getDay() + dayOfTheWeek;
        
        currDate.setDate(calc);

        return currDate;
    }
}