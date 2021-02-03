import {Controller, Get} from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    async findAll() {
        return 'this is controller ok'
    }

}
