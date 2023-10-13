import { Controller, Get, Put, Body } from '@nestjs/common';
import { PageService } from './page.service';

@Controller('page')
export class PageController {
  constructor(private readonly PageService: PageService) {}

  @Get()
  getPage(): any {
    return this.PageService.getPageData();
  }

  @Put()
  updatePageContent(@Body() body: { content: string }): void {
    const { content } = body;
    this.PageService.updatePageContent(content);
  }
}
