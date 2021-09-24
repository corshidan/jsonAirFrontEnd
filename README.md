The Get Me There app has been designed with the user's urgent travel needs in mind. If your flight is cancelled or rearranged and you need to get to your destination ASAP, Get Me There will find you the next available flights to your location. It utilises information from the OAG API, which is updated constantly with current flight details.
This front end has been built using React and is connected to a back-end server, which is used to communicate with the API and update a database containing global airport + airline data.
This React UI uses React version 17.0.2. There is a AMCHARTS4 dependency included which is used to generate the globe which is shown on the front page. JEST testing software has also been included to test and debug the app.
The app has been split into smaller components, which are stored under their respective named folders.

## Homepage

This is the main homepage of the APP. The page contains the standard imports for React and renders onto our page the App component. More details on the <App /> component is listed below
HomePage folder

---

The HomePage folder contains our homepage components, which renders the main home page that the user sees when they access the page. The index.js folder contains the functionality to handle any 'event' actions taken by the user, and deploys the Usestate hook to update the page without the need to rerender.
The HomePage function takes in the information regarding the change of state on our page and processes actions to be taken when this occurs. If a user changes either the Departing or Arrival airport, this function registers the change of state and updates the usestate to the value specified by the user input.
The handlesubmit function checks for any 'event' processed by the user, in this case, it is run when the user clicks the submit button on the home page. This function applys a method on the information supplied by the user to retrive the departing/arrival airport and send this to our API for results
The handlechangeDeparting/arrival is called when the user changes the drop down options listed on the home page. When these are changed, the options chosen by the user is set as the usestate and that is sent on to the API.
The function returns and renders our main home page which features the company logo, tagline and introduction. It also includes a form container with two drop down options for the user to select the departing/arrival airport.
The CSS connected to this folder contains styling for our page and the specific component.

Public - Index.html

---

This page contains the static HTML page rendered to our homepage. This is a standard HTML template. However, it also contains scripts that link directly to our Globe feature seen on our home page. These scripts provide the image, the animation and the ''core.js'' mandatory requirement to use AMCHARTS4.
About Folder

---

This page renders the 'About us' page on our App. The About us page has a header showing some general detail about the team, along with 4 different cards containing contact details on each team member.
This component renders HTML only along with the relevant CSS for that page.
Footer Folder

---

This is the footer that runs across all pages listed on our App. This contains a banner which includes details on the API source and the team name.
This component renders HTML only along with the relevant CSS for that page.
Result Folder

---

## Results Folder

## Specific Search Page Folder

## Weather Page Folder

The code on this page renders local weather data for the arrival airport requested by the user. It uses information from OPEN WEATHER API to provide up to date weather information directly to the user, along with a small icon demonstrating the weather type.
Globe Folder

---

The Globe folder contains the code for the earth 'globe' design feature seen on the homepage. This utilises a Javascript library called AMCHARTS4 which can be downloaded via node using 'npm i @amcharts/amcharts4'.
The component uses an inbuilt library from AMCHARTS to obtain the earth image and set it in a spin motion.
There are annotated notes and comments left to explain each relevant stage of the code in the main.js file, please refer to these comments for further details on using this feature. There is also a CSS page attached for styling of the globe.Please note, the AMCHARTS globe will not work unless scripts are placed within the App component that is rendered via the APP folder.
