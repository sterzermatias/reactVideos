const FAKE_DELAY = 2000;
const RICKANDMORY_API='https://rickandmortyapi.com/api/character/';
const FAKE_DATA = [
	{	
		id:0,
		title:'驴Qu茅 es CodelyTV? 馃崉馃敐 - Formaci贸n para programadores y divulgaci贸n del mundo del desarrollo',
		url:'https://www.youtube.com/watch?v=rpMQd2DazTc',
		embed:'https://www.youtube.com/embed/rpMQd2DazTc',
		thumbnail:'https://img.youtube.com/vi/rpMQd2DazTc/maxresdefault.jpg',
	},
	{ 	
		id:1,
		title:'Introducci贸n a PHP: C贸mo configurar tu entorno de desarrollo 馃悩',
		url: 'https://www.youtube.com/embed/watch?v=v2IjMrpZog4',
		embed: 'https://www.youtube.com/embed/v2IjMrpZog4',
		thumbnail: 'https://img.youtube.com/vi/v2IjMrpZog4/maxresdefault.jpg',
	},
	{ 
		id:2,
		title:'Comunicaci贸n entre microservicios: 馃晪 Event-Driven Architecture',
		url: 'https://www.youtube.com/watch?v=V4mjxJ5czog',
		embed: 'https://www.youtube.com/embed/V4mjxJ5czog',
		thumbnail: 'https://img.youtube.com/vi/V4mjxJ5czog/maxresdefault.jpg',
	},
	{ 	
		id:3,
		title:'馃 Cu谩ndo usar #interfaces鈥? y cu谩ndo EVITARLAS',
		url: 'https://www.youtube.com/watch?v=uP1CoHtjALg',
		embed: 'https://www.youtube.com/embed/uP1CoHtjALg',
		thumbnail: 'https://img.youtube.com/vi/uP1CoHtjALg/maxresdefault.jpg',
	},
	{ 
		id:4,
		title:'Qu茅 es la "Composici贸n sobre herencia" 馃懆鈥嶐煈┾?嶐煈р?嶐煈︷煔? (#CompositionOverInheritance)',
		url: 'https://www.youtube.com/watch?v=OyTPDFyGWRc',
		embed: 'https://www.youtube.com/embed/OyTPDFyGWRc',
		thumbnail: 'https://img.youtube.com/vi/OyTPDFyGWRc/maxresdefault.jpg',
	},
	{ 
		id:5,
		title:'ReactJS vs VueJS vs Angular 6 鈿★笍| 1/5 Qu茅 aporta un framework y qu茅 es un componente',
		url: 'https://www.youtube.com/watch?v=lttZCIin4HM',
		embed: 'https://www.youtube.com/embed/lttZCIin4HM',
		thumbnail: 'https://img.youtube.com/vi/lttZCIin4HM/maxresdefault.jpg',
	}
]; 

export const addVideo = (newVideo) => new Promise((resolve, reject) => {	
	setTimeout(() => { 
		newVideo.id = FAKE_DATA.length + 1;
		FAKE_DATA.push(newVideo);
		return resolve({ok:1});
	},FAKE_DELAY);
});
 
export const getVideos = () => new Promise((resolve, reject) => {	
	setTimeout(() => { 
		return resolve(FAKE_DATA);
	},FAKE_DELAY);
});

export const getCharacters= () => new Promise((resolve, reject) => {	
	getRickAndMortyApi().then(data => { 
			const characters = data.results;
			FAKE_DATA.forEach((el,i) => {
				el.thumbnail = characters[i].image;
				el.title = "name: " +characters[i].name +" status: " +characters[i].status;
			})
			return resolve(FAKE_DATA)
		});
});

const getRickAndMortyApi = async () => {
	try{
		const resp = await fetch(RICKANDMORY_API);
		return resp.json();
	}catch(error){
		throw error;
	}
}

const getDescription = async () => {
	try{
		const resp = await fetch('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1');
		return resp.json();
	}catch(error){
		throw error;
	}
}

export const getVideoDetail = ({idVideo}) => new Promise((resolve, reject) => {	
	setTimeout(() => { 
		const video = FAKE_DATA.find((el) => parseInt(el.id) === parseInt(idVideo));
		// Something goes wrong
		if(!video) return reject({message:"No se ha encontrado el video ;("});
		// All is ok
		if(video.description) return resolve(video);
		//In case video don't have text description
		return getDescription().then(description => {
			video.description = description.join();
			return resolve(video);
		}).catch(console.error);
	},FAKE_DELAY);
});