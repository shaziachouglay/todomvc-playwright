import {test, expect} from '@playwright/test'
import { TodoForm } from './page-objects/todo-form';
import { TodoList } from './page-objects/todo-list';
import { Navigate } from './page-objects/navigate';

let todoList;
let todoForm;
let navigate;

test.beforeEach(async ({page}) =>{
     
    todoForm = new TodoForm(page);
    todoList = new TodoList(page);
    navigate = new Navigate(page);
   await  navigate.toHomePage();
})

test('todo input field should display a helpful prompt',async ({page}) =>
{
  
  await expect(todoForm.newTodoField)
  .toHaveAttribute('placeholder','What needs to be done?');
}
);

test('should be able to add single items',async ({page}) =>
{
    await todoForm.addItem('Walk the dog');
    await expect(todoList.displayedTodoItems).toHaveText('Walk the dog');
}
);

test('should be able to add multiple items in the list',async ({page}) =>
{
    
    
    await todoForm.addItem('Walk the dog');
    await todoForm.addItem('Feed the cats');
    await expect(todoList.displayedTodoItems).toHaveText(['Walk the dog','Feed the cats']);
    await expect(todoList.displayedTodoItems).toHaveCount(2);

}
);


test.describe('When adding 2 items',async() =>{

    test.beforeEach(async ({page}) =>{
        await todoForm.addItem('Walk the dog');
        await todoForm.addItem('Feed the cats');
    })
    test('should be able to add two items',async({page}) =>
    {
       
        await expect(todoList.displayedTodoItems).toHaveText(['Walk the dog','Feed the cats']);
});

test('should show number of remaining items',async({page}) =>
{
   
    await expect(todoList.todoCount).toHaveText('2 items left');
});

});