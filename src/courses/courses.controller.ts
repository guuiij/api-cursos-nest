import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) { }

    @Get()
    @ApiOkResponse({description: 'List of all Courses'})   // Criando coumentação de API 
    async getCourses() {
        const courses = await this.coursesService.getCourses();
        return courses;
    }

    @Get(':courseId')   //  Depois da nossa rota /courses , tera outra barro com ID -> localhost:3000/courses/2   
    @ApiOkResponse({description: 'List of 1 Course'})  //
    async getCourse(@Param('courseId') courseId) {
        const courses = await this.coursesService.getCourse(courseId);
        return courses;
    }
    @Post()
    @ApiCreatedResponse({description: 'Added a Course'})   // Aqui por ser POST ja usamos dessa forma
    async addCourse(@Body() createCourseDto: CreateCourseDto) {
        const courses = await this.coursesService.addCourse(createCourseDto);
        return courses;
    }

    @Delete()
    @ApiOkResponse({description: 'Remove a Course'})  // Ao deletar ele retonar os outros curso entao é ApiOKResponse
    async deleteCourse(@Query() query ) {
        const courses = await this.coursesService.deleteCourse(query.courseId);
        return courses;
    }

}

