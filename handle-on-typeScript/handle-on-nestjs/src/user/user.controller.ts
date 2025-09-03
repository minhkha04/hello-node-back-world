import { Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiProperty } from '@nestjs/swagger';
import { diskStorage } from 'multer';


class FileUploadDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    file: any
}

@Controller('/user')
export class UserController {

    @Get()
    getUser(): string {
        return 'This is user controller';
    }

    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage ({
            destination: process.cwd() + '/public/img',
            filename: (req, file, cb) => {cb(null, new Date().getTime() + '_' + file.originalname)}
        })
    }))
    @ApiBody({ type: FileUploadDto })
    @ApiConsumes('multipart/form-data')
    @Post("upload-avatar/:id")
    uploadAvatar(@UploadedFile() file: Express.Multer.File, @Param('id') id: string) {
        return file;
    }

}
