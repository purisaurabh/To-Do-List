const form = document.querySelector("form")
const input =  document.querySelector("input")
const list = document.querySelector("ul")


form.addEventListener("submit", function(e)
{
    e.preventDefault();
    toDo();
    input.value = "";
});




function toDo() 
{
    if (input.value === '') 
    {
        alert('The value is empty')
    }

    else 
    {
        const value = input.value;

        /* Creating li element each time we submit */
        const newList = document.createElement("li");

        /* Adding the value of the input ti the li */
        newList.textContent = value;

        /* Adding the delete button */
        const deleteBtn = document.createElement("button");

        /* Changing the content of the button */
        deleteBtn.textContent = "Delete";

        /* Adding the li inside the ul */
        list.append(newList);

        /* Adding the delete button */
        newList.append(' ', deleteBtn)

    }
}


// For deleting:
list.addEventListener('click', function(e) 
{
    if (e.target.nodeName === 'BUTTON') 
    {
        e.target.closest('LI').remove();
    }
})