import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  maxDate: Date;
  dateForm: FormGroup;
  dateRangeFromTo: Date;

  ngOnInit() {
    this.dateForm = new FormGroup({
      email: new FormControl(null),
      dateRange: new FormControl(null),
    });
    this.maxDate = new Date();
  }

  onValueChange(dateValue: Date) {
    if (dateValue) {
      this.dateRangeFromTo = dateValue;
      console.log(this.dateRangeFromTo);
      this.changeDateFormat(this.dateRangeFromTo);
    }
  }

  changeDateFormat(dateRange: Date) {
    let fromDateFormatted = formatDate(dateRange[0], "yyyy-MM-dd", "en-us");
    let toDateFormatted = formatDate(dateRange[1], "yyyy-MM-dd", "en-us");
    console.log("From date: ", fromDateFormatted);
    console.log("To date: ", toDateFormatted);
  }

  clearForm() {
    this.dateForm.reset();
  }
}
