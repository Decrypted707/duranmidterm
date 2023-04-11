const books =[
	{
		title: "House of the Dragon: Fire and Blood",
		characters: [
			{
				id: 1,
				name: "Rhaenyra Targaryen",
				house: "House Targaryen"
			},
			{
				id: 2,
				name: "Leanor Velaryon",
				house:"House Velaryon"
			}
	                ]
},
{
		title: "Game of Thrones: A song of Ice and Fire",
		characters: [
			{
				id: 3,
				name: "Cersei Lannister",
				house: "House of Lannister"
			},
			{
				id: 4,
				name: "Arya Stark",
				house: "House of Stark"
			}
		]
	}
];
const actors = books.map(books => {
if (books.title === "House of the Dragon: Fire and Blood") {
return [null, null];
}
const actor = books.characters.map(character => `${character.name} from ${character.house}`);
return actor;
});

if (actors[0][0] === null && actors[0][1] === null) {
actors[0] = null;
}

console.log(actors);
 