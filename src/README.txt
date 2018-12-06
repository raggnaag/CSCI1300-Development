README.txt

To begin:

NOTE: Make sure you have node --version in your terminal.
if you don't, download it here: https://nodejs.org/en/download/

You also need to run the command: sudo npm install -g create-react-app
If you do not have react app already downloaded.

Then we can begin.

Download the code
cd into the directory: cd my-app
And then run npm start

In your browser, go to http://localhost:3000/ to see the App.

About:
This is an application to buy boats online.
In particular you can buy, motorboats and sailboats.The interface
relates to design principles in class because it uses the grid system/
flex box system we have discussed in class. The grid is responsive and "flexes:
based on browser size. In addition I am using a universal typeface, it enforces one 
design -> same font, text and color scheme throughout the app.

The data is passed through components.
I created a list of boats, with their names, prices and type of boat. Then,
these boats were passed into its own boat component, which renders
and prints out the boats, images and their text.
I created another component, a FilteredList, which handles the filtering on 
search and on the drop down menu. This references to the state of the boats 
from my app.js class.There is also another component, List which takes care 
of the sorting based onprice. This component is being passed on in FilteredList, 
which now makes it possible to sort a filtered list.

How user interaction can trigger components.
There are buttons on the website which allows us to filter based on type of boat,
search which filters based on name/brand name and then sort based on price as well.
This will trigger all filters in various ways, and it is even possible to do
them at the same time.


