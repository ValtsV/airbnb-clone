import React, { useState } from "react";
import "./Search.scss";
import moment from "moment";
import "moment/locale/es";

import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const Search = () => {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add(7, "days"));
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="search">
      <div className="search-date-picker">
        <DateRangePicker
          startDate={startDate}
          startDateId="your_unique_start_date_id"
          endDate={endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
          //   readOnly
          //   verticalHeight={370}
          //   orientation="vertical"
          //   numberOfMonths={1}
        />
      </div>
      <h4>
        <PeopleIcon />
        <span className="pl-1">Numero de huespedes</span>
      </h4>
      <input min={0} defaultValue={2} type="number" className="search-input" />
      <Button className="search-button">Buscar Airbnb</Button>
    </div>
  );
};

export default Search;
