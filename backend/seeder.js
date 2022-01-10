import Author from "./src/models/authors.model"
import Publisher from "./src/models/publisher.model"
const authors = [
	{
		_id: "111111author",
		name: 'Chloe Hopper',
		img: 'chloehopper.jpg',
		biography: "Australian author Chloe Hooper, 39, is creating a singularly diverse literary career. Her 2002 debut novel, A Child's Book of True Crime, made the Orange prize shortlist, while The Tall Man (2009), a nonfiction investigation into the death of an Aboriginal man in police custody, earned praise from Philip Roth and Peter Carey. Her new novel is a gothic thriller, The Engagement.",
		birthDate: "5/23/1950",
		email: "chloehopper@school.com"
	},
	{
		_id: "222222author",
		name: 'David Remnick',
		img: 'davidremnick.jpg',
		biography: "My earliest memory is the Kennedy assassination. I was in kindergarten and the headmaster intoned the dramatic news over the loudspeaker. Then we were told, weirdly, to take a nap until our parents cameLanguage is the great human invention and to be a master of that, a real master, is to me an astonishing thing.Like every non- fiction writer, I started out thinking I'd write fiction. But I grew up with disabled parents and knew I had to make a living. I didn't have the notion that I would take two or three years on the largesse of home and see if I could become Philip Roth.",
		birthDate: "6/18/1955",
		email: "davidremnick@school.com"
	},
	{
		_id: "333333author",
		name: 'Joanna Kavena',
		img: 'joannakavena.jpg',
		biography: "Joanna Kavenna is a novelist and travel writer. She is the author of four novels, including Inglorious, which won the Orange award for new writers, and The Birth of Love, which was longlisted for the Orange prize. In 2013, she was named as one of Granta’s best young British novelists. Your new novel, A Field Guide to Reality, has your narrator on a quest to find the missing manuscript of a deceased professor. What did you want the novel to say about the notion of reality? I had this idea for years of a manual for fixing existential angst. I think we all ask ourselves these recurring philosophical questions: what is the meaning of life? Why does the universe exist? What is reality? Why am I here? So I made up a parallel version of Oxford and invented this professor who’d spent his entire life trying to compile this field guide to reality.",
		birthDate: "1/12/1967",
		email: "joannakavena@school.com"
	},
	{
		_id: "444444author",
		name: 'John Cheever',
		img: 'johncheever.jpg',
		biography: "During the late 1940s, John Cheever worked to an unconventional routine. In the morning he would put on his business suit, leave his apartment, and catch the lift downstairs with any commuters. Then, when they reached the ground floor, he would keep going, down to the basement, where he'd walk to his favourite storage room, strip down to his boxer shorts and spend the morning writing. At noon he put his suit back on and headed back upstairs. Lunch followed, then a leisurely afternoon. It worked for him. Or rather, it worked for his work. Despite their drudging reputation, fixed routines have proved an indispensable tool to artists of all kinds, from George Sand (who wrote through the night supported by chocolate and tobacco) to David Lynch (who no longer has a daily milkshake but still meditates twice a day). Daily Rituals, a print successor to Mason Currey's Daily Routines blog, is a compendium of these beguiling monotonies, a chance to see what great lives look like when the triumphs, dramas, disruptions and divorces have been all but boiled away. It will fascinate anyone who wonders how a day might best be spent, especially those who have wondered of their artistic heroes, as a baffled Colette once did of George Sand: how the devil did they manage?",
		birthDate: "5/27/1912",
		email: "johncheever@school.com"
	},
	{
		_id: "555555author",
		name: 'Joshua Cohen',
		img: 'joshuacohen.jpg',
		biography: "Still in his 30s, the brilliant American novelist Joshua Cohen has already published several novels, books of short stories and a masterpiece, Witz (2010), which is basically two-thirds David Foster Wallace to one third Philip Roth, but somehow adds up to considerably more than the sum of its parts. Moving Kings, his latest novel, combines the same ingredients, but perhaps adds up to rather less. The book begins as the story of David King, the middle-aged proprietor of King’s Moving in the New York Tri-state area: “David King the Moving King Will Move Your Mothertrucking Everything”. David is a kind of Jewish Tony Soprano, entirely vivid, his politics “aspirational, inferior: he was in favour of contacts, contracts, the right not to diet, and the right to jump lines at dessert stations”. David has got a lot of baggage – literally and metaphorically (David King = King, David, King David, yes?). The son of Holocaust survivors, he is divorced from his wife Bonnie, and his daughter Tammy has decided that Israel is a “criminal regime”: “What I learned at NYU was just how psycho Jews are,” she tells him.",
		birthDate: "9/6/1980",
		email: "joshuacohen@school.com"
	},
	{
		_id: "666666author",
		name: 'Patrick Ness',
		img: 'patrickness.jpg',
		biography: "The turbulent Saturday chronicled in Patrick Ness’s passionate and disturbing novel is like a day spent by many 17-year-olds in semi-rural America: going for a run, working in a superstore, feeling nervous about meeting their ex at a party, grabbing opportunities for clandestine afternoon sex. But for Adam, nothing is simple. His home life as the son of an insecure and unsuccessful evangelist preacher colours all his experience. His parents would rather share their house with a herd of pink elephants than accept that he is gay and the family rule (“the Yoke”, as father Brian calls it) is built on denial and hypocrisy. As Adam inches closer to freeing himself from the Yoke by accepting himself as worthy of love, a parallel drama is unfolding. A local girl, Katie, was recently murdered, and her spirit is roaming the neighbourhood. Adam crosses Katie’s path in the local forest, already notorious for meth factories and about to unleash its demons. He draws strength from their mutual desperation, just as he found his childhood best friend through a shared near-death experience.",
		birthDate: "10/17/1971",
		email: "patrickness@school.com"
	},
	{
		_id: "777777author",
		name: 'Rebecca Swift',
		img: 'rebeccaswift.jpg',
		biography: "Rebecca Swift, who has died aged 53 of cancer, believed that anyone who writes and wishes to be edited and advised constructively and professionally should be given that opportunity. To this end, in 1996 she founded The Literary Consultancy (TLC) with Hannah Griffiths. It was the first of its kind – a manuscript assessment agency offering detailed editorial feedback to anyone writing in English anywhere in the world. Set up in Becky’s north London flat on a capital sum of £600, TLC never borrowed another penny. From 1989 to 1995, Becky had been a junior editor at Virago Press. At that time, the “slush pile” – that mountain of unsolicited manuscripts – was one of the first casualties of the editorial department: publishers no longer had the resources to read unsolicited manuscripts, which were returned to the writer with a standard note.",
		birthDate: "8/16/1975",
		email: "rebeccaswift@school.com"
	},
	{
		_id: "888888author",
		name: 'Sarah Perry',
		img: 'sarahperry.jpg',
		biography: "Born in Chelmsford, Essex, Sarah Perry grew up in a strict Baptist family immersed in classic literature, Victorian hymns and the King James Bible. She has a PhD in creative writing from Royal Holloway, London, where she was supervised by Andrew Motion; she has been the writer in residence at Gladstone’s Library and the Unesco World City of Literature writer in residence in Prague. Her debut novel, After Me Comes the Flood, was published in 2014, followed in 2016 by The Essex Serpent. Inspired by the myth of a sea serpent on the Essex coast, the novel was named book of the year 2017 at the British Book awards and is out now in paperback.",
		birthDate: "11/28/1979",
		email: "sarahperry@school.com"
	},
	{
		_id: "999999author",
		name: 'Simon Mawer',
		img: 'simonmawer.jpg',
		biography: "The name’s Sutro. Marian Sutro. Alas, the temptation to write that is just too strong, even after a conversation with Simon Mawer about his new novel, Tightrope, and its lead character reveals a good-natured frustration with the fixations of the press. Reviews of Tightrope have been good. They have also evinced a fascination with the parts of Mawer’s story that deal with spies and spying. One critic – rather close to home – went further, declaring that Mawer has created “the female James Bond”. “I’m glad you came back to that because I’d almost forgotten it,” Mawer says with a dry laugh, after a dinner given by his American publisher in Cambridge, Massachusetts. “I’m a fairly easygoing chap, I don’t get excited about things. But there’s no way that’s a reasonable comment about Marian Sutro.” It may be an explicable comment. Mawer’s novel does not only, thanks to its striking jacket, look like a spy thriller. It is a spy thriller – a literary one for sure, but still a thrilling read about a spy.",
		birthDate: "12/26/1948",
		email: "simonmawer@school.com"
	},
	{
		_id: "101010author",
		name: 'Tom Winton',
		img: 'tomwinton.jpg',
		biography: "A friend recommended this as an antidote to my temporary inability to read anything over 100 pages. I’d never read Winton before and became an instant fan. The most startling piece is one in which he recounts catastrophic accidents that have marked his life. I’m the most appalling ghoul and tell myself that as a writer I’m not only entitled but almost obliged to peer at the wreckage of road accidents and so on. Winton offers a masterclass in turning appalling incidents into meditations on mortality, fatherhood and responsibility.",
		birthDate: "8/4/1960",
		email: "tomwinton@school.com"
	},
];


// const books = [
//     {
//         _id: '61a30af61b14c0e64bdb9999',
//         title: 'Bloated JabbaScript Frameworks',
//         description: 'Its amazing how loading a single webpage can cost you upwards of ~5MB. I think the average web page size is 3MB right now, I remember reading that somewhere, dont remember where though.<br>Might not matter when using wifi, but thats a whole 1% of my monthly cell data. 100 pages a month and im done. All of this for what? Usually some annoying animations, or other overengineered crap. Its amazing how loading a single webpage can cost you upwards of ~5MB. I think the average web page size is 3MB right now, I remember reading that somewhere, dont remember where though.<br>Might not matter when using wifi, but thats a whole 1% of my monthly cell data. 100 pages a month and im done. All of this for what? Usually some annoying animations, or other overengineered crap.',
//         image: 'bjsf.jpg',
//         author: ["61a095ca21d98d34f4816c28"],
//         pages: 171,
//         price: 79.95,
//         publisher: ['61a0a306b2f6ede6e6887a24'],
//     },
//     {
//         _id: '61a30af91b14c0e64bdb999c',
//         title: 'Blaming the Architecture',
//         description: 'It always depends on what you have in place when a system fails. You might not know at all if you don’t have monitoring in place. If you don’t have log monitoring in place, if you’re not monitoring, say queues for messaging or middleware, there could be a case where the tree fell in the forest and nobody knows. And it’s not until you have irate customers coming in and berating your software, and asking why it’s not working. And then you have to scramble to find out what’s going.<br>Whereas if you implement resiliency principles and techniques, a lot of times, not only can you react very fast, in many cases you can add self-healing. And so you don’t even need to page that person in the middle of the night to come in and fix it. It just fixes itself.',
//         image: 'bta.jpg',
//         author: ["61a095ca21d98d34f4816c24"],
//         pages: 158,
//         price: 79.95,
//         publisher: ['61a0a309b2f6ede6e6887a27'],
//     },
//     {
//         _id: '61a30af91b14c0e64bdb999e',
//         title: 'Blame the Other Guy',
//         description: 'In the months and years leading up to the recent wholesale murder of his subjects, President Bashar al -Assad of Syria, has enlisted the aid of Russian dictator Vladimir Putin. In August of 2013, former President Barack Obama, after having previously laid down the proverbial red line in the sand, went to Congress to get consent to start a ground war with Syrians loyal to Assad. Congress did nothing after months of criticizing Obama for not enforcing the “Red Line.” As has been proven for the past 75 days of the Trump Presidency, for Republicans it’s a lot more fun to say, “NO!” You get to blame the other guy and take no responsibility, for seven years, Republicans said no to healthcare, for seven years they said no to infrastructure, for eight years they said no, to President Obama. All the while giggling their way into full control of the Executive, Legislative and Judicial branches of government.',
//         image: 'btog.jpg',
//         author: ["61a095ca21d98d34f4816c2a"],
//         pages: 111,
//         price: 69.95,
//         publisher: ['61a0a309b2f6ede6e6887a29'],
//     },
//     {
//         _id: '61a30af91b14c0e64bdb99a0',
//         title: 'Blaming the User',
//         description: 'I’m finally going home from a long business trip and I’m very excited. But my experience with United Airline’s customer service this morning completely killed my good mood.<br>They keep blaming me for their mistake. It’s a story I know well because I see it so commonly in Product Management too.<br>When I was booking my return ticket from London to Newark, the cheapest option was for something called “Mixed Cabin”. I could fly Business Class between London to Dublin and then Economy from Dublin to Newark. Since I had to get up at the ungodly hour of 5am to get to the airport, I thought that could be a nice treat on my first leg. So I booked it.',
//         image: 'btu.jpg',
//         author: ["61a095c921d98d34f4816c20"],
//         pages: 152,
//         price: 79.95,
//         publisher: ['61a0a309b2f6ede6e6887a2b'],
//     },
//     {
//         _id: '61a30af91b14c0e64bdb99a2',
//         title: 'Commenting out Failed Tests',
//         description: 'So now what should I do? That output prompts the question: what’s the correct port? Is it 1234, 4321 or is it some other port number? To sort this all out I’ll need to take on the responsibility of researching the right answer.<br>Almost certainly, Mr. or Ms. Comment-out-er gave me this chore because he/she did not have the time to sort it all out themselves. Also, likely, the person who changed the port number didn’t know there was a unit test failing or even that there was a unit test at all. I don’t need to know who did or didn’t deal with this; I’ll leave that to the archeologists.<br>The larger point is this: if you’re commenting out a failing unit test then you’re missing the point of a unit test. A unit test verifies that the code-under-test is working as intended. A failing test means you need to do something — other than commenting out the test.',
//         image: 'coft.jpg',
//         author: ["61a095ca21d98d34f4816c28"],
//         pages: 166,
//         price: 69.95,
//         publisher: ['61a0a309b2f6ede6e6887a2d'],
//     },
//     {
//         _id: '61a30af91b14c0e64bdb99a4',
//         title: 'Copying and Pasting from Stack Overflow',
//         description: 'Before you can copy and paste code, you have to make sure you have the legal right to copy and paste that code. Without that legal right, you would just be stealing other people\'s intellectual property. That would just be lazy.<br>Most code on Stack Overflow are \'snippets\'. They do not meet standards of originality and as a result have no copyright protection. You are free to copy and paste them without any worry about losing a lawsuit. Some code on Stack Overflow are much longer than \'snippets\'. They therefore qualify for copyright protection. By default, all content on Stack Overflow (including code) is licensed under the CC-BY-SA 3.0 license.<br>This license is not recommended for use in software at all, and SO is currently looking to replace this license for future code posted on its website. For now, though, the CC-BY-SA 3.0 is law. Even if SO does change its future licensing policies, all previous code will still remain under CC-BY-SA 3.0.',
//         image: 'cpso.jpg',
//         author: ["61a095ca21d98d34f4816c24", "61a095ca21d98d34f4816c2e"],
//         pages: 159,
//         price: 69.95,
//         publisher: ['61a0a309b2f6ede6e6887a2d'],
//     },
//     {
//         _id: '61a30afa1b14c0e64bdb99a6',
//         title: 'Changing Stuff and Seeing What Happens',
//         description: 'It can be extremely difficult to focus on the good when, seemingly, bad things are happening in your life. However you can train your mind to focus on the good things in your life rather than dwelling on the bad. No it’s not one of those positive thinking articles that you’ve read all over the web and are sick and tired of. This is about changing the way you think, changing your thinking pattern. Do you use any of these thinking patterns in your day to day life? This is when you think nothing good will ever happen to you. This can be a deep seated way of thinking and it is a deep down inability to believe you are worthy of anything good happening to you e.g. “I’ll never have money, I’ve never had it before so I’ll never have it in the future, might as well carry on with this shitty job, at least it pays the mortgage.”',
//         image: 'cswh.jpg',
//         author: ["61a095c621d98d34f4816c1b"],
//         pages: 129,
//         price: 59.95,
//         publisher: ['61a0a309b2f6ede6e6887a2b'],
//     },
//     {
//         _id: '61a30afa1b14c0e64bdb99a8',
//         title: 'Cooding on the Weekend',
//         description: 'Before you click any other links on this page, you should read our Programmer 101 Guide so you can get acquainted with the basics. One of the first pieces of advice in the guide is to avoid getting hung up on choosing a programming language. Nonetheless, if you\'re having any trouble making a decision we asked our code-savvy readers for suggestions awhile back and that\'s a good resource for help. If you\'re looking to make web applications, you should take a look at our guide on building a web site from scratch with no experience as well.',
//         image: 'cw.jpg',
//         author: ["61a095ca21d98d34f4816c24"],
//         pages: 142,
//         price: 49.95,
//         publisher: ['61a0a309b2f6ede6e6887a29'],
//     },
//     {
//         _id: '61a30afa1b14c0e64bdb99aa',
//         title: 'Doing it the Hard Way',
//         description: 'When it comes to seducing their sexy ladies for a lifetime, these three gorgeous guys wonder why anyone would want it easy, when the hard way is oh-so-much more fun.... After an irresistible night of passion with Reya, muscle-bound Aaron longs to hold her close forever. Little does he know that the tall, sleek beauty has a carnal secret. TJ is a USA Today and NY Times bestseller, as well as a award-winning author of several romance genres, including paranormal, fantasy, sci-fi and urban fantasy romance.<br>No matter the genre TJ is penning, her favorite thing to do is build worlds. To take you somewhere extraordinary. To transport you to a place where you can close your eyes and slip into your fantasy...',
//         image: 'dihw.jpg',
//         pages: 113,
//         author: ["61a095c921d98d34f4816c1e"],
//         price: 59.95,
//         publisher: ['61a0a309b2f6ede6e6887a27'],
//     },
//     {
//         _id: '61a30afa1b14c0e64bdb99ac',
//         title: 'Excuses to Miss Meetings',
//         description: 'So I really want to go to this Yelp shindig next wednesday to meet all you fine fine people!  But I am supposed to go to a night meeting that night in Sonoma County if you can believe it!  So, what I need is a really good excuse to miss said meeting! Help me out so I can meet you all! Your Girl friend had to go to the optomatrist and get her eye\'s dialated so you have to drive her home. She did not write it on your calander so you forgot and could not plan another way to get her home safely.You always forget her appointments so she is very disappointed with you even though she is the one who forgot to write it down. Now you have to prove your love for her by taking care of her and her sick dog Bot who needs a suppository every evening to induce a bowel movement because she is so old ( the dog not the girlfriend). She ran out of prescription medication so now you need to get more medicine for the dog.',
//         image: 'emm.jpg',
//         author: ["61a095ca21d98d34f4816c24"],
//         pages: 113,
//         price: 59.95,
//         publisher: ['61a0a306b2f6ede6e6887a24'],
//     },
//     {
//         _id: '61a30afa1b14c0e64bdb99ae',
//         title: 'Excuses for Not Writing Documentation',
//         description: 'As a professional programmer, I\'ve seen a lot of excuses for poor code over the years. It\'s absolutely amazing the amount of passion and energy that goes into defending bad code. What\'s more amazing is that if half of that energy were directed into putting quality in the code, the problem would disappear.<br>Here\'s a list of some of the excuses I\'ve encountered over the ages. See how many your management or co-workers have used. Maybe you\'ve used a few yourself. I know I have, but I grew out of it. (Mostly.)<br>This is the favorite excuse of the programmer in a hurry. You should write the comments before you write the program. That\'s so you can collect, focus and organize your thoughts so that your program is designed well.<br>The programmer in a hurry doesn\'t have time for planning. Or thinking for that matter. He wants to start coding now.',
//         image: 'enwd.jpg',
//         author: ["61a095c621d98d34f4816c1b", "61a095c921d98d34f4816c1e"],
//         pages: 153,
//         price: 79.95,
//         publisher: ['61a0a306b2f6ede6e6887a24'],
//     },
//     {
//         _id: '61a30afa1b14c0e64bdb99b0',
//         title: 'Excuses for Not Writing Unit Tests',
//         description: '<ol><li>I don’t have the time. But you’ll have the time to fix the bugs…<li>I don’t know how to wri...

// 	}
// ]

const publishers = [
	{
		_id: "111publisher",
		name: 'Fairview Press',
		address: {
			road: '2450 Riverside Avenue South',
			zipCode: '55401',
			city: 'Minneapolis',
			country: 'USA',
		}
	},
	{
		_id: "222publisher",
		name: 'Harlequin Enterprises Ltd',
		address: {
			road: '22 Adelaide Street West',
			zipCode: 'M5H 4E3',
			city: 'Toronto',
			country: 'CAN',
		}
	},
	{
		_id: "333publisher",
		name: 'Parragon',
		address: {
			road: 'B-38, Sector 5',
			zipCode: 'BA2',
			city: 'Bath',
			country: 'ENG',
		}
	},
	{
		_id: "444publisher",
		name: 'Barrie & Jenkins',
		address: {
			road: '289 Westbourne Grove',
			zipCode: 'W11 2QA',
			city: 'London',
			country: 'ENG',
		}
	},
	{
		_id: "555publisher",
		name: 'Times Books',
		address: {
			road: '115 West 18th Street',
			zipCode: '10021',
			city: 'New York',
			country: 'USA'
		}

	}
]

export const seedUsers = async () => {
	try {
		await Author.deleteMany()
		await Author.insertMany(authors)
		await Publisher.deleteMany()
		await Publisher.insertMany(publishers)
	} catch (error) {
		console.log(error)
	}
}