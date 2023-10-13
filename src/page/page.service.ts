import { Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
  private PageData: any = {
    // Sample data for Page
    title: 'Welcome to  Page',
    content: 'This is a custom page created with Nest.js and React.',
  };

  getPageData(): any {
    return this.PageData;
  }

  updatePageContent(newContent: string): void {
    this.PageData.content = newContent;
  }
}
