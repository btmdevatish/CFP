import { Component , AfterViewInit} from '@angular/core';
declare var $: any; // Declare $ as a global variable

@Component({
  selector: 'app-upcoming-mslider',
  templateUrl: './upcoming-mslider.component.html',
  styleUrls: ['./upcoming-mslider.component.scss']
})
export class UpcomingMSliderComponent  implements AfterViewInit {
  img1:string = "assets/img/team1.png"
  img2:string = "assets/img/team2.png"
  // matchStartTime: Date = new Date('2023-10-17T14:00:00');
  matches = [
    {
      "id": "ddd42a96-70c4-43c6-bc99-25d12e91ebfa",
      "name": "Ireland Women vs Scotland Women, 2nd T20I",
      "dateTimeGMT": "2023-10-18T14:00:00",
    },
    {
      "id": "ddd42a96-70c4-43c6-bc99-25d12e91ebfa",
      "name": "Ireland Women vs Scotland Women, 2nd T20I",
      "dateTimeGMT": "2023-10-18T13:30:00",
    },
    // Add more matches
  ];
    ngAfterViewInit() {
      $('.owl-carousel-upcoming').owlCarousel({
        items: 3,
        margin:20,
      });
    }
}
