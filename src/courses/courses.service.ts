import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';
import { resolve } from 'path';
@Injectable()
export class CoursesService {
    courses = COURSES;

    getCourses(): Promise<any> {             // Promete que irá retornar algo
        return new Promise(resolve => {     // Nome do método que iremos retornar algo 'resolve'
            resolve(this.courses);
        })
    }

    getCourse(courseId): Promise<any> {
        let id = Number(courseId);       // Cria variavel
        return new Promise(resolve => {     // Nome do método que iremos retornar algo 'resolve'
            const course = this.courses.find(course => course.id === id)
            if (!course) {
                throw new HttpException('O curso com esse id não existe', 404);
            }
            resolve(course); // Ajusta para ser o curso escolhido
        })
    }

    addCourse(course): Promise<any> {             // passando o curso que ia passar pela validação Dto
        return new Promise(resolve => {     // Nome do método que iremos retornar algo 'resolve'
            this.courses.push(course);     // Adiciona o novo course na lista de courses
            resolve(this.courses);
        })
    }
    
    deleteCourse(courseId): Promise<any> {
        let id = Number(courseId);
        return new Promise((resolve) => {
            let index = this.courses.findIndex(course => course.id === id);
            if(index === -1){
                throw new HttpException('O curso com esse ID não existe',404);
            }
            this.courses.splice(index, 1);
            resolve(this.courses);
        })
    }

}
