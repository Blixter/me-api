INSERT INTO me (name, city, description) VALUES ("Robin Blixter", "Göteborg", "<p>Mitt namn är Robin Blixter. Född och uppvuxen i Göteborg. Jag har alltid varit intresserad av teknik, jag var runt 9 år första gången som vi fick en dator till familjen. Jag fastnade direkt, spelade datorspel framför allt. Vi hade inget bredband på den tiden så det fanns inte så mycket annat att göra. Längre fram när jag fick egna pengar började jag bygga mina egna datorer, främst i syftet att spela på dem.</p><p>Programmering upptäckte jag första gången på gymnasiet när jag läste kursen Programmering A. Då fick jag lära mig att programmera simpla spel i ren HTML-kod. Jag kom ihåg att jag gjorde ett ping pong-spel där man mötte datorn.</p><p>Jag läste alla IT-kurser som jag kunde på gymnasiet, olika omständigheter fick mig att hamna på andra väger. Jag började jobba som tidningsbud och sedan brevbärare, fick problem med knäna på grund av allt spring i trapporna. Kort därefter fick jag barn och började jobba som stödassistent i Lundby här i Göteborg. Jag fick vikariat och behövde utbilda mig för att få fortsätta jobba. Jag behövde en tillsvidare anställning och började plugga till undersköterska med fokus på psykiatri, utbildningen var i 3 terminer. Jag fick en tillsvidare anställning så fort jag var klar med utbildningen.</p><p>Nu några år senare känner jag att jag vill ta tag i mitt IT-intresse igen. Är tjänstledig från mitt jobb och pluggar på heltid.</p><p>Som hobby har jag även fiske, främst fiske i insjöar efter gädda och abborre. Fiskar från flytring eller polarens båt. Min största gädda hittils var 103 cm lång och vägde 7,4 kg, längar tills jag kommer över 10 kilogränsen. Största abborren som jag har fått upp vägde 1,1 kg. Jag och min familj brukar åka uppåt i landet på semester tillsammans med ett kompispar som har barn i liknande åldrar, för att campa och självklart fiska.</p>");

INSERT INTO reports (id, text) VALUES ("1", "# Jsramverk

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Github repo
Here's a link to the repo on GitHub: [https://github.com/Blixter/jsramverk](https://github.com/Blixter/jsramverk).");

INSERT INTO reports (id, text) VALUES ("2", "# Vecka 2

Vecka 2 och jag har nu arbetat med ett registreringsformulär samt en date-picker.
Jag valde att göra ungefär som Gmails date-picker för födelsedatum. Det blir det smidigaste sättet tycker jag. Eftersom man först kan välja månad i dropdown-menyn, sedan är det bara att tabba och skriva dag och år. Jag gjorde input-fältet för dagen lite mindre och året lite större, för att användaren skall förstå att året skall skrivas med fler siffror, alltså YYYY. Som input valde jag självklart 'number'. Det finns mer jobb att göra för att den skall stämma helt och hållet. Till exempel så går det att fylla i 1 - 31 dagar för varje månad. Jag har gjort så att det inte blir validerat om användaren skriver utanför 1 - 31 i dagar, samt om man inte håller sig innanför 1900 - nuvarande år.

![Gmail birtdaypicker](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/0fcc8342-0348-4e5d-ae39-7103035e9e0d/gmail-birthday-input-2-800w-opt.png 'Gmails version') Gmails version

Mitt registreringsformulär gjorde jag med mycket hjälp från en Youtuber och fick då även inspiration från honom kring utseendet. 

[![React form Validation](http://img.youtube.com/vi/4CeTFW4agRw/0.jpg)](http://www.youtube.com/watch?v=4CeTFW4agRw 'React Form Validation') 

Jag har valt att React/JavaScript skall styra över valideringen. Det går bara att klicka på submit-knappen om alla fält är ifyllda och valideras. När man sedan skickat iväg formuläret så händer det inte så mycket än. Däremot kan man se all data som skickas iväg i console-loggen. Jag tänker att den datan får jag ta hand om i nästa kursmoment, när vi börjar med backend.

## Github repo
Här är GitHub-repot: [https://github.com/Blixter/jsramverk](https://github.com/Blixter/jsramverk).");


