# tutteo-frontend-technical-test

## Project documentation

1. **Overview**

This application allows users to search for songs and play them directly in a built-in player. It follows the Screaming Architecture principles to ensure a clean separation of concerns and a clear reflection of the business domain.

2. **Architecture**

The application implements Screaming Architecture by organizing the code around domain concerns rather than technical aspects. The focus is on making the domain of the application (searching and playing songs) explicit through the structure, keeping the application maintainable and scalable.

3. **Project Structure**

The application is divided into three core modules, located in the /modules directory:

```
modules/
│
├── common/
│
├── searcher/
│
└── player/
```

4. **Modules**

a. Common module
This module contains shared components, utilities, interfaces and the index view. The interface Audio contains the data must have a song.

b. Searcher module
This module contains the component of search(SongSearcher.vue) and the fake db (dataSongs.ts) with the songs. The searcher only search per title.

c. Player module
This module handles the audio playback functionality. This includes:

* Playing, pausing, backward, forward and stopping songs.
* Displaying the song's current progress, data of the song and controls.

The module is divided into three parts: components, stores, and views.

* Stores: In this folder, we have a store built with Pinia that contains the logic for song playback (stop, start playback, load song, etc.). This was done, first, to separate the logic, and second, because the goal was to be able to share the player across different views, but I ran out of time.

* Components: Here you'll find the component (MusicPlayer) that contains the visual representation of the player, the slider function, and the connection to the Pinia store. There is another component labeled "OLD," which demonstrates how to implement the player without using Pinia.

* Views: The view contains the component and a link to go back. It also receives the selected song as a parameter.

5. **Technologies**

Frameworks: Vue.js
CSS: Tailwind CSS for styling, scss, and css modules (for the components)
State Management: Pinia
Router: Vue Router

6. **Project Setup**

```sh
npm install
```

a. Compile and Hot-Reload for Development

```sh
npm run dev
```

b. Type-Check, Compile and Minify for Production

```sh
npm run build
```

c. Preview production version

```sh
npm run preview
```

c. Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Deviations
### CSS Modules
The use of CSS Modules has been applied only to the components, while scoped styling with Tailwind has been used for the views to make their creation easier. I do it this way because I understand that components can be reused, but the views cannot.
