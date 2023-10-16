import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(student: any): string {
    if (!student) return ''; // Handle null or undefined input

    // Concatenate the name and lastName properties with a space in between
    return `${student.lastName}, ${student.name}`;
  }

}
