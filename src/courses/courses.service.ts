import { Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {
    courses = COURSES;

    getCourses(): Promise<any> {             // Promete que irá retornar algo
        return new Promise(resolve => {     // Nome do método que iremos retornar algo 'resolve'
            resolve(this.courses);
        })
    }


}
