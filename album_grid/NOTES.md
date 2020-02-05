Event Listeners and Event Handlers with an eye towards how they apply to forms.
- State (data we need to display what the user should see)
- Templates (html markup that we use to display certain data)
- User Actions (Events that users can trigger, and functions that can handle those events)

Here's the plan
1. Create a variable that will store the data (we'll call it `albums`)
2. We'll create a function that will render the albums (insert HTML for the albums into our index.html)
3. Add a function that will insert the html into the page
4. We will create a form that uses javascript events to create a new album from form data and add it to our albums array and then also display it. To do this we also needed to use the `event.preventDefault()` method to prevent the page from refreshing after the form submission.
