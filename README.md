<pre> #[Netlify Live Link](https://tengo-que-catch-em-all.netlify.app/) 

###Tools
	API: 
  	#[PokéAPI](https://pokeapi.co/)

Color: 
	Some hex codes were retrieved from #[Mdigi](https://mdigi.tools/random-pastel-color/)
 
Fonts: 
	PokemonSolid: #[CDN Fonts](https://www.cdnfonts.com/pokemon-solid.font)
	VT323: #[Peter Hull](https://fonts.google.com/specimen/VT323/about)

Icons: 
	Pokemon: 
		#[Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Main_Page) 
		#[Pokemon Go fandom](https://pokemongo.fandom.com/wiki/Pok%C3%A9mon_GO_Wiki)
	
	Heart 1: #[Png Tree](https://pngtree.com/freepng/clipart-heart-png_6581866.html)
 
	Heart 2: #[Png Wing](https://www.pngwing.com/en/free-png-dxyfr)
	
React libraries & tools used:
	"axios”	
 
	“react” 
		React
 		useEffect
		useState
		useRef
  
	"react-beautiful-dnd"
		DragDropContext
		Draggable
		Droppable
  
	“react-bootstrap”
		Button
		Modal
  
	"react-card-flip"
		CardFlip
  
	“react-responsive-carousel”
		Carousel
  
	"react-router-dom"
		Link
		Route
		Routes
  
	"react-slider"	
		Slider
  
	"styled-components"
		createGlobalStyle
		Styled

### Framework

I wanted a home page, about page, and five differently themed Pokemon pages.  All the Pokemon pages show the Pokemon’s name and picture as well as some of their data when the mouse hovers over the picture.

### Issues (that were eventually fixed before push) & Revision

Issues:
	Berries component: 
		Getting the berries to move at a certain speed
		Getting the slider to work
		Getting the berries to be the same size
		Getting the berries to disappear from page
		Getting the berries not to continue filling the page
	
	Missing component:
		Carousel was showing up, but Pokemon weren’t
		Pokemon were displayed in a column when a region was clicked
		When Pokemon did show up in the carousel, they were mixed sizes
		Pokemon flicked passed the carousel 
		Carousel was unresponsive 
		PokemonInfo was not displayed when mouse hovered
	
	Gym component: 
		Using different css styles to get the Pokemon to rotate at once
		Hovering function not working when the pokemon were rotating

Revision:
		Use a module.css or css for Nav component instead of styled components
		Make Nav component toggle
		Use a different carousel library for the Missing component & region components
		Maybe use axios in PokemonName&Pic component
		Do something more than just hover and click when it came to the Pokemon
		Style pages to look more like a Pokemon trading card

### Groundwork

Created the App, Index, PokemonName&Pic, & PokemonInfo components. PokemonName&Pic fetched the Pokemon’s name and front-default picture. PokemonInfo fetched the Pokemon’s type, ability, stats, and moves. Created emptied page components(About, Favorite, Gym, Home, Menaces, Missing, & Trouble). Created emptied folders (fonts, icons, region & style).

### Home page & other styling

Designed to look like the Pokemon are in an electric Pokemon trading card. Styled with solely styled-components since it is very small code. Added the Berries component to it. Berries and Nav components were created. Added the fonts and icons to their respective folders. Berries component used the "react-slider" to make a Slider that shuts on and off the berries. Please shut it off, so you can see the gif I made.

### About page & other styling

Summary of what the app is about. Designed to look like the Pokemon are in a psychic Pokemon trading card. Styled through module.css and styled-components.

### Favorite page & styling

Seven of my favorite Pokemon styled to have borders and be two to a row. Designed to look like the Pokemon are in a fairy Pokemon trading card. Styled through module.css and styled-components. 

### Gym page & styling

The six Pokemon I use to take over gyms in Pokemon Go. Designed to look like the Pokemon are in a water Pokemon trading card. Styled through module.css and styled-components. Used useRef and useEffect to get it to rotate like a carousel. 

### Missing page & styling 

This was an absolute challenge. This page displayed all the missing Pokemon from my Pokedex in Pokemon Go via the Missing component.  Designed to look like the Pokemon are in a fighting Pokemon trading card. Styled through module.css and styled-components. I used the “react-bootstrap” to make a button and modal that gives the users instructions on what to do; i.e click on a region and you can hover the pokemon to get its stats. Additionally, I used the “react-responsive-carousel”. 
 
The regions folder contained all the 11 regions (Aloha, Galar, Hisui, Hoenn, Johto, Kalos, Kanto, Paldea, Sinnoh, Unknown, & Unova) from Pokemon Go. I added a module.css to these regions that made the hovering PokemonInfo more visible. The regions all used “react-responsive-carousel” because I wanted the Pokemon to be displayed and moved with the carousel format. 

### Trouble page & styling 

These are the ten Pokemon that I have a hard time catching. Designed to look like the Pokemon are in a fire Pokemon trading card. Styled through module.css and styled-components. Used "react-card-flip" to make Pokemon  flip to the next Pokemon.

### Menaces page & styling 

Users can rank ten Pokemon (that lowkey are menacing) in whatever order they want. Designed to look like the Pokemon are in a grass Pokemon trading card. Styled through module.css and styled-components. Used “react-beautiful-dnd" to make the Pokemon draggable and droppable. </pre> 

