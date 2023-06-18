import { Page } from "@playwright/test";


export class Navigate{
    readonly page: Page;

    constructor(page:Page){
        this.page = page;
        
    }

    async toHomePage(){
        this.page.goto('https://todomvc.com/examples/emberjs/');
    }
}