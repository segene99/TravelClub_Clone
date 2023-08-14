class DateUtil{

    static today(): string{
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDay();

        return `${year}.${this.formatNum(month)}.${this.formatNum(day)}`;
    }

    private static formatNum(n: number){
        return n<10 ? `0${n}` : n;
    }

}
export default DateUtil