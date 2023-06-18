import { Locator, Page } from "@playwright/test";

export class TodoList{
  readonly page : Page;
  readonly displayedTodoItems: Locator; 
  readonly todoCount: Locator;

  constructor(page: Page){
    this.page = page;
    this.displayedTodoItems = page.locator('.todo-list label');
    this.todoCount =  page.locator('#todo-count');

}
}