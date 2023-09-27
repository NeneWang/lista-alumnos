import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lista-alumnos';
  students = [
    {
      "name": "John Doe",
      "average": "9.2",
      "major": "Computer Science",
      "minor": "Mathematics",
      "credits": "120"
    },
    {
      "name": "Jane Smith",
      "average": "8.7",
      "major": "Biology",
      "minor": "Chemistry",
      "credits": "90"
    },
    {
      "name": "Michael Johnson",
      "average": "7.5",
      "major": "History",
      "minor": "Political Science",
      "credits": "75"
    },
    {
      "name": "Emily Williams",
      "average": "9.0",
      "major": "Psychology",
      "minor": "Sociology",
      "credits": "105"
    },
    {
      "name": "David Brown",
      "average": "8.3",
      "major": "English Literature",
      "minor": "Creative Writing",
      "credits": "80"
    },
    {
      "name": "Sarah Davis",
      "average": "9.8",
      "major": "Physics",
      "minor": "Mathematics",
      "credits": "135"
    },
    {
      "name": "Daniel Martinez",
      "average": "7.9",
      "major": "Economics",
      "minor": "Business Administration",
      "credits": "95"
    },
    {
      "name": "Olivia Miller",
      "average": "9.6",
      "major": "Chemical Engineering",
      "minor": "Biology",
      "credits": "130"
    },
    {
      "name": "Matthew Wilson",
      "average": "8.1",
      "major": "Political Science",
      "minor": "International Relations",
      "credits": "85"
    },
    {
      "name": "Sophia Taylor",
      "average": "9.4",
      "major": "Computer Science",
      "minor": "Mathematics",
      "credits": "125"
    },
    {
      "name": "Andrew Anderson",
      "average": "7.2",
      "major": "History",
      "minor": "Anthropology",
      "credits": "70"
    },
    {
      "name": "Ava Thomas",
      "average": "9.7",
      "major": "Psychology",
      "minor": "Sociology",
      "credits": "140"
    },
    {
      "name": "William Jackson",
      "average": "8.5",
      "major": "English Literature",
      "minor": "Creative Writing",
      "credits": "100"
    },
    {
      "name": "Isabella White",
      "average": "9.1",
      "major": "Physics",
      "minor": "Mathematics",
      "credits": "115"
    },
    {
      "name": "Joseph Thompson",
      "average": "7.7",
      "major": "Economics",
      "minor": "Business Administration",
      "credits": "90"
    }
  ]
}
