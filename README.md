# Server side Rijksmuseum Art Experience

In deze repo kun je de server side versie van de Rijksmuseum Art Experience vinden. Dit project heb ik eerst gemaakt met het van Web App From Scratch voor de Minor Web Design & Development en heb ik nu omgezet naar een server side versie, met Node.js en Express.

Je kunt de live versie van de app [hier](https://rijksmuseum-art-experience.cyclic.app) vinden.

Hier komt een afbeelding van mijn werk.

## Tabel of contents

- [Hoe installeer je dit project?](#hoe-installeer-je-dit-project)
- [Hoe gebruik je dit project?](#hoe-gebruik-je-dit-project)
- [Client-Server rendering](#client-server-rendering)
- [Activity diagram](#activity-diagram)
- [List of enhancements to optimize the critical render path](#list-of-enhancements-to-optimize-the-critical-render-path)
- [Wat heb ik allemaal gedaan?](#wat-heb-ik-allemaal-gedaan)
- [Bronnen](#bronnen)
- [License](#license)

## Hoe installeer je dit project?

Je kunt dit project installeren door een clone te maken van dit project. Hiervoor heb je Git nodig. Als je Git hebt geïnstalleerd, ga je eerst naar de map waar je dit project in wilt zetten. Daarna kun je het volgende commando's in je terminal typen:

1. `git clone https://github.com/Inevdhoven/PWA-Rijksmuseum-Art-Experience.git`

2. `cd PWA-Rijksmuseum-Art-Experience`

3. `npm install`

4. Maak een key aan om de [Rijksmuseum API](https://www.rijksmuseum.nl/nl/rijksstudio/) te kunnen gebruiken. Dit kun je doen door naar je profiel te gaan en dan naar instellingen daar kun je een key aanmaken.

5. Maak een .env bestand aan in de root van het project en voeg hier je key toe. Er moet het volgende in komen te staan: `API_KEY = 'YOUR_API_KEY'`

6. Zet het .env bestand in de gitignore.

7. `npm run start`

8. Nu kun je het project bekijken op `http://localhost:3000/`

## Hoe gebruik je dit project?

Deze versie van de Rijksmuseum Art Experience is een progressive web app, dit betekent dat de app server sitde wordt gerenderd. Dit betekent ook dat je de app kan downloaden op mobiel en desktop door op het download icoontje in de browserbalk te klikken of op telefoon op add to home screen te klikken.

Wanneer je de webapp opent kom je op de homepage. Hier kun je de top 10 kunstwerken bekijken, deze verander om de paar dagen. Hierdoor blijft het leuk om ernaar te kijken. Je kunt ook op onderwerp zoeken, zoals schilderijen, potten of meubels. Daarnaast kun je ook naar een specifiek kunstwerk zoeken, door bovenin op het zoek icoontje te klikken. Wanneer je op een kunstwerk klikt, kom je op een detailpagina waar je meer informatie over het kunstwerk kunt lezen.

## Client-Server rendering choices

## Activity diagram

## List of enhancements to optimize the critical render path

## Wat heb ik allemaal gedaan?

| TO DO                                                      | STATUS             |
| ---------------------------------------------------------- | ------------------ |
| Refactor WAFS to server side version met Node.js & Express | :white_check_mark: |
| App omzetten van client side naar server side              | :white_check_mark: |
| Tooling toevoegen                                          |                    |
| Manifest toevoegen                                         | :white_check_mark: |
| Service Worker toevoegen                                   | :white_check_mark: |
| Het maken van een activity diagram                         |                    |
| Performance optimaliseren                                  |                    |
| Instaleer app op een online web server                     |                    |
| Readme schrijven                                           |                    |

## Bronnen

## Credits

Ik wil graag de volgende mensen bedanken voor hun hulp:

- De docenten van het vak Progressive Web Apps
- Mijn medestudenten

## License

De license die voor de Rijksmuseum Art Experience word gebruikt is MIT. Meer informatie over de MIT license kun je [hier](https://github.com/Inevdhoven/PWA-Rijksmuseum-Art-Experience/blob/main/LICENSE) lezen.

<!-- Here are some hints for your project! -->

<!-- Start out with a title and a description -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- ☝️ replace this description with a description of your own work -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- ...you should implement an explanation of client- server rendering choices 🍽 -->

<!-- ...and an activity diagram including the Service Worker 📈 -->

<!-- This would be a good place for a list of enhancements to optimize the critical render path implemented your app  -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- We all stand on the shoulders of giants, please link all the sources you used in to create this project. -->

<!-- How about a license here? When in doubt use GNU GPL v3. 📜  -->
