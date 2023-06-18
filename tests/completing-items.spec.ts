import {test,expect} from '@playwright/test'

let newTodoField;
let displayedTodoItemsList;
let todoCount;

test.beforeEach(async ({page}) =>{
    await page.goto('https://todomvc.com/examples/emberjs/');

    newTodoField = page.locator('#new-todo');
    displayedTodoItemsList = page.locator('.todo-list label');
    todoCount = page.locator('#todo-count');

});

test.describe('When completing an item',async () => {

    test.beforeEach(async({page}) => {
     await newTodoField.fill('Walk the dog');
    await newTodoField.press('Enter');
    await newTodoField.fill('Feed the cats');
    await newTodoField.press('Enter');
    const feedTheCat = page.locator('.todo-list li', {hasText: 'Feed the cats'});
    await feedTheCat.locator('.toggle').check();

    });
    test('should show the remainig no of items',async({page}) =>{
        await expect(todoCount).toHaveText('1 item left');
    })
})