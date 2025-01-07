import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) { }

    @Get()
    async getCourses() {
        const courses = await this.coursesService.getCourses();
        return courses;
    }

    @Get(':courseId')   //  Depois da nossa rota /courses , tera outra barro com ID -> localhost:3000/courses/2   
    async getCourse(@Param('courseId') courseId) {
        const courses = await this.coursesService.getCourse(courseId);
        return courses;
    }
    @Post()
    async addCourse(@Body() createCourseDto: CreateCourseDto) {
        const courses = await this.coursesService.addCourse(createCourseDto);
        return courses;
    }

    @Query
    async deleteCourse(@Query() query ) {
        const courses = await this.coursesService.deleteCourse(query.courseId);
        return courses;
    }

}

