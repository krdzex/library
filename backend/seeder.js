import Author from "./src/models/authors.model"

const authors = [
	{
		_id: "",
		name: 'Chloe Hopper',
		img: 'chloehopper.jpg',
		biography: "Australian author Chloe Hooper, 39, is creating a singularly diverse literary career. Her 2002 debut novel, A Child's Book of True Crime, made the Orange prize shortlist, while The Tall Man (2009), a nonfiction investigation into the death of an Aboriginal man in police custody, earned praise from Philip Roth and Peter Carey. Her new novel is a gothic thriller, The Engagement.",
		birthDate: "5/23/1950",
		email: "chloehopper@school.com"
	},
	{
		name: 'David Remnick',
		img: 'davidremnick.jpg',
		biography: "My earliest memory is the Kennedy assassination. I was in kindergarten and the headmaster intoned the dramatic news over the loudspeaker. Then we were told, weirdly, to take a nap until our parents cameLanguage is the great human invention and to be a master of that, a real master, is to me an astonishing thing.Like every non- fiction writer, I started out thinking I'd write fiction. But I grew up with disabled parents and knew I had to make a living. I didn't have the notion that I would take two or three years on the largesse of home and see if I could become Philip Roth.",
		birthDate: "6/18/1955",
		email: "davidremnick@school.com"
	},
	{
		name: 'Joanna Kavena',
		img: 'joannakavena.jpg',
		biography: "Joanna Kavenna is a novelist and travel writer. She is the author of four novels, including Inglorious, which won the Orange award for new writers, and The Birth of Love, which was longlisted for the Orange prize. In 2013, she was named as one of Granta’s best young British novelists. Your new novel, A Field Guide to Reality, has your narrator on a quest to find the missing manuscript of a deceased professor. What did you want the novel to say about the notion of reality? I had this idea for years of a manual for fixing existential angst. I think we all ask ourselves these recurring philosophical questions: what is the meaning of life? Why does the universe exist? What is reality? Why am I here? So I made up a parallel version of Oxford and invented this professor who’d spent his entire life trying to compile this field guide to reality.",
		birthDate: "1/12/1967",
		email: "joannakavena@school.com"
	},
	{
		name: 'John Cheever',
		img: 'johncheever.jpg',
		biography: "During the late 1940s, John Cheever worked to an unconventional routine. In the morning he would put on his business suit, leave his apartment, and catch the lift downstairs with any commuters. Then, when they reached the ground floor, he would keep going, down to the basement, where he'd walk to his favourite storage room, strip down to his boxer shorts and spend the morning writing. At noon he put his suit back on and headed back upstairs. Lunch followed, then a leisurely afternoon. It worked for him. Or rather, it worked for his work. Despite their drudging reputation, fixed routines have proved an indispensable tool to artists of all kinds, from George Sand (who wrote through the night supported by chocolate and tobacco) to David Lynch (who no longer has a daily milkshake but still meditates twice a day). Daily Rituals, a print successor to Mason Currey's Daily Routines blog, is a compendium of these beguiling monotonies, a chance to see what great lives look like when the triumphs, dramas, disruptions and divorces have been all but boiled away. It will fascinate anyone who wonders how a day might best be spent, especially those who have wondered of their artistic heroes, as a baffled Colette once did of George Sand: how the devil did they manage?",
		birthDate: "5/27/1912",
		email: "johncheever@school.com"
	},
	{
		name: 'Joshua Cohen',
		img: 'joshuacohen.jpg',
		biography: "Still in his 30s, the brilliant American novelist Joshua Cohen has already published several novels, books of short stories and a masterpiece, Witz (2010), which is basically two-thirds David Foster Wallace to one third Philip Roth, but somehow adds up to considerably more than the sum of its parts. Moving Kings, his latest novel, combines the same ingredients, but perhaps adds up to rather less. The book begins as the story of David King, the middle-aged proprietor of King’s Moving in the New York Tri-state area: “David King the Moving King Will Move Your Mothertrucking Everything”. David is a kind of Jewish Tony Soprano, entirely vivid, his politics “aspirational, inferior: he was in favour of contacts, contracts, the right not to diet, and the right to jump lines at dessert stations”. David has got a lot of baggage – literally and metaphorically (David King = King, David, King David, yes?). The son of Holocaust survivors, he is divorced from his wife Bonnie, and his daughter Tammy has decided that Israel is a “criminal regime”: “What I learned at NYU was just how psycho Jews are,” she tells him.",
		birthDate: "9/6/1980",
		email: "joshuacohen@school.com"
	},
	{
		name: 'Patrick Ness',
		img: 'patrickness.jpg',
		biography: "The turbulent Saturday chronicled in Patrick Ness’s passionate and disturbing novel is like a day spent by many 17-year-olds in semi-rural America: going for a run, working in a superstore, feeling nervous about meeting their ex at a party, grabbing opportunities for clandestine afternoon sex. But for Adam, nothing is simple. His home life as the son of an insecure and unsuccessful evangelist preacher colours all his experience. His parents would rather share their house with a herd of pink elephants than accept that he is gay and the family rule (“the Yoke”, as father Brian calls it) is built on denial and hypocrisy. As Adam inches closer to freeing himself from the Yoke by accepting himself as worthy of love, a parallel drama is unfolding. A local girl, Katie, was recently murdered, and her spirit is roaming the neighbourhood. Adam crosses Katie’s path in the local forest, already notorious for meth factories and about to unleash its demons. He draws strength from their mutual desperation, just as he found his childhood best friend through a shared near-death experience.",
		birthDate: "10/17/1971",
		email: "patrickness@school.com"
	},
	{
		name: 'Rebecca Swift',
		img: 'rebeccaswift.jpg',
		biography: "Rebecca Swift, who has died aged 53 of cancer, believed that anyone who writes and wishes to be edited and advised constructively and professionally should be given that opportunity. To this end, in 1996 she founded The Literary Consultancy (TLC) with Hannah Griffiths. It was the first of its kind – a manuscript assessment agency offering detailed editorial feedback to anyone writing in English anywhere in the world. Set up in Becky’s north London flat on a capital sum of £600, TLC never borrowed another penny. From 1989 to 1995, Becky had been a junior editor at Virago Press. At that time, the “slush pile” – that mountain of unsolicited manuscripts – was one of the first casualties of the editorial department: publishers no longer had the resources to read unsolicited manuscripts, which were returned to the writer with a standard note.",
		birthDate: "8/16/1975",
		email: "rebeccaswift@school.com"
	},
	{
		name: 'Sarah Perry',
		img: 'sarahperry.jpg',
		biography: "Born in Chelmsford, Essex, Sarah Perry grew up in a strict Baptist family immersed in classic literature, Victorian hymns and the King James Bible. She has a PhD in creative writing from Royal Holloway, London, where she was supervised by Andrew Motion; she has been the writer in residence at Gladstone’s Library and the Unesco World City of Literature writer in residence in Prague. Her debut novel, After Me Comes the Flood, was published in 2014, followed in 2016 by The Essex Serpent. Inspired by the myth of a sea serpent on the Essex coast, the novel was named book of the year 2017 at the British Book awards and is out now in paperback.",
		birthDate: "11/28/1979",
		email: "sarahperry@school.com"
	},
	{
		name: 'Simon Mawer',
		img: 'simonmawer.jpg',
		biography: "The name’s Sutro. Marian Sutro. Alas, the temptation to write that is just too strong, even after a conversation with Simon Mawer about his new novel, Tightrope, and its lead character reveals a good-natured frustration with the fixations of the press. Reviews of Tightrope have been good. They have also evinced a fascination with the parts of Mawer’s story that deal with spies and spying. One critic – rather close to home – went further, declaring that Mawer has created “the female James Bond”. “I’m glad you came back to that because I’d almost forgotten it,” Mawer says with a dry laugh, after a dinner given by his American publisher in Cambridge, Massachusetts. “I’m a fairly easygoing chap, I don’t get excited about things. But there’s no way that’s a reasonable comment about Marian Sutro.” It may be an explicable comment. Mawer’s novel does not only, thanks to its striking jacket, look like a spy thriller. It is a spy thriller – a literary one for sure, but still a thrilling read about a spy.",
		birthDate: "12/26/1948",
		email: "simonmawer@school.com"
	},
	{
		name: 'Tom Winton',
		img: 'tomwinton.jpg',
		biography: "A friend recommended this as an antidote to my temporary inability to read anything over 100 pages. I’d never read Winton before and became an instant fan. The most startling piece is one in which he recounts catastrophic accidents that have marked his life. I’m the most appalling ghoul and tell myself that as a writer I’m not only entitled but almost obliged to peer at the wreckage of road accidents and so on. Winton offers a masterclass in turning appalling incidents into meditations on mortality, fatherhood and responsibility.",
		birthDate: "8/4/1960",
		email: "tomwinton@school.com"
	},
];

let books = 

export const seedUsers = async () => {
	try {
		await Author.deleteMany()
		await Author.insertMany(authors)
	} catch (error) {
		console.log(error)
	}
}