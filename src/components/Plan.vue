<template>
  <div class="container">
        <div class="row">
            <div class="jumbotron col-md-12">
                <h1>Plan</h1>
                <p>Here is some information. This is the Plan page</p>
                <div style="display: inline-block; padding: 10px; border: solid 1px black;" v-for="day in 7">{{moment().add(date, "day")}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Contact',
  data(){
    return {
      email: 'test',
      web: 'test',
      days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
      ],
    }
  }
}
</script>