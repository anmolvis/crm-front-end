import {
  Box,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// CSS
import "./DateDropDown.scss";
import CustomButton from "../Button/Button";

const DateDropDown = ({ handleChange }) => {
  // handleChange should take two value of type Date (startDate, endDate)
  const [value, setValue] = useState("today");
  const [showRange, setShowRange] = useState(true);
  const [dateRange, setDateRange] = useState({
    startDate: dayjs(),
    endDate: dayjs(),
  });

  const changeHandler = (e) => {
    setValue(e.target.value);
    const today = dayjs();

    switch (e.target.value) {
      case "today":
        console.log(dayjs(today.startOf("D")).format("YYYY-MM-DD hh:mm:ss"));
        console.log(dayjs(today.endOf("D")).format("YYYY-MM-DD hh:mm:ss"));
        break;
      case "yesterday":
        console.log(today.add(-1, "day")).startOf("D");
        console.log(today.add(-1, "day")).endOf("D");
        break;
      case "this_week":
        console.log(today.startOf("week"));
        break;
      case "this_month":
        console.log(today.startOf("month"));
        break;
      case "last_month":
        console.log(today.add(-1, "M").startOf("month"));
        break;
      case "custom_range":
        setShowRange(true);
    }
  };

  const customRangeHandler = () => {
    // TODO
  };

  return (
    <div className="date-dropdown">
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="date-selelct">Select Date</InputLabel>
        <Select
          labelId="date-selelct"
          id="date-selelct"
          value={value}
          label="Select Date"
          onChange={changeHandler}
          size="small"
        >
          <MenuItem value={"today"}>Today</MenuItem>
          <MenuItem value={"yesterday"}>Yesterday</MenuItem>
          <MenuItem value={"this_week"}>This week</MenuItem>
          <MenuItem value={"this_month"}>This month</MenuItem>
          <MenuItem value={"last_month"}>Last month</MenuItem>
          <MenuItem value={"custom_range"}>Custom Range</MenuItem>
        </Select>
      </FormControl>

      <Dialog onClose={() => setShowRange(false)} open={showRange} fullWidth>
        <Box sx={{ p: 2 }}>
          <DialogTitle>Select start & end date</DialogTitle>
          <div className="date-picker-container">
            <div className="start-date">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Start date"
                  value={dateRange.startDate}
                  onChange={(newValue) =>
                    setDateRange({
                      startDate: dayjs(newValue),
                      endDate: dayjs(newValue),
                    })
                  }
                />
              </LocalizationProvider>
            </div>
            <div className="end-date">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="End date"
                  value={dateRange.endDate}
                  onChange={(newValue) =>
                    setDateRange({
                      ...dateRange,
                      endDate: dayjs(newValue),
                    })
                  }
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="submit-button">
            <CustomButton
              buttonText={"Submit"}
              clickHandler={customRangeHandler}
            />
          </div>
        </Box>
      </Dialog>
    </div>
  );
};

export default DateDropDown;
