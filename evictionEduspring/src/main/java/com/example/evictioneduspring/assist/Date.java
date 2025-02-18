package com.example.evictioneduspring.assist;

public class Date {

    private Integer day;
    private Integer month;
    private Integer year;

    protected Date() {}

    public Date(Integer p_day, Integer p_month, Integer p_year) {
        this.day = p_day;
        this.month = p_month;
        this.year = p_year;
    }

    @Override
    public String toString() {
        return String.format(
            "Date[%d/%d/%d]",
            month, day, year
        );
    }

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer new_day) {
        this.day = new_day;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer new_month) {
        this.month = new_month;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer new_year) {
        this.year = new_year;
    }
}