import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FormattedDate(props) {

    console.log(props.currentDate);
    
    Date.prototype.addSecs = function(s) {
        this.setTime(this.getTime() + (s * 1000));
        return this;
      }

    let todayDate = new Date(props.currentDate *1000);
    
    if(props.timezone !== 0) {
        todayDate = todayDate.addSecs(props.timezone)}

    console.log(props.todayDate);

    let day = todayDate.getDay();
    let hour = todayDate.getHours();
    let mins = todayDate.getMinutes();
    let year = todayDate.getFullYear();
    let dateNow = todayDate.getDate();
    let month = todayDate.getMonth();
    let dateApend = "th";
    let mornAft = "AM";

    if (dateNow === 1 || dateNow === 21 || dateNow === 31) {
        dateApend = "st";
      } else {
        if (dateNow === 2 || dateNow === 22) {
          dateApend = "nd";
        } else {
          if (dateNow === 3 || dateNow === 22) {
            dateApend = "rd";
          }
        }
      }
    
      if (hour >= 12) {
        mornAft = "PM";
      }

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      day = days[day];

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
       ];
       month = months[month];

    if (mins < 10) {
        mins = `0${mins}`;
      };
    
    return `${day} ${dateNow}${dateApend} ${month} ${year} ${hour}:${mins}`
}