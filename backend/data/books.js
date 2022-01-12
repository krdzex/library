const books = [
    {
        "_id": "11111111book",
        "title": "Bloated JabbaScript Frameworks",
        "description": "Its amazing how loading a single webpage can cost you upwards of ~5MB. I think the average web page size is 3MB right now, I remember reading that somewhere, dont remember where though.<br>Might not matter when using wifi, but thats a whole 1% of my monthly cell data. 100 pages a month and im done. All of this for what? Usually some annoying animations, or other overengineered crap. Its amazing how loading a single webpage can cost you upwards of ~5MB. I think the average web page size is 3MB right now, I remember reading that somewhere, dont remember where though.<br>Might not matter when using wifi, but thats a whole 1% of my monthly cell data. 100 pages a month and im done. All of this for what? Usually some annoying animations, or other overengineered crap.",
        "img": "bjsf.jpg",
        "pages": "171",
        "price": "79.95",
        "publisher_id": "111publisher"
    },
    {
        "_id": "22222222book",
        "title": "Blaming the Architecture",
        "description": "It always depends on what you have in place when a system fails. You might not know at all if you don’t have monitoring in place. If you don’t have log monitoring in place, if you’re not monitoring, say queues for messaging or middleware, there could be a case where the tree fell in the forest and nobody knows. And it’s not until you have irate customers coming in and berating your software, and asking why it’s not working. And then you have to scramble to find out what’s going.<br>Whereas if you implement resiliency principles and techniques, a lot of times, not only can you react very fast, in many cases you can add self-healing. And so you don’t even need to page that person in the middle of the night to come in and fix it. It just fixes itself.",
        "img": "bta.jpg",
        "pages": "158",
        "price": "79.95",
        "publisher_id": "222publisher"
    },
    {
        "_id": "33333333book",
        "title": "Blame the Other Guy",
        "description": "In the months and years leading up to the recent wholesale murder of his subjects, President Bashar al -Assad of Syria, has enlisted the aid of Russian dictator Vladimir Putin. In August of 2013, former President Barack Obama, after having previously laid down the proverbial red line in the sand, went to Congress to get consent to start a ground war with Syrians loyal to Assad. Congress did nothing after months of criticizing Obama for not enforcing the “Red Line.” As has been proven for the past 75 days of the Trump Presidency, for Republicans it’s a lot more fun to say, “NO!” You get to blame the other guy and take no responsibility, for seven years, Republicans said no to healthcare, for seven years they said no to infrastructure, for eight years they said no, to President Obama. All the while giggling their way into full control of the Executive, Legislative and Judicial branches of government. ",
        "img": "btog.jpg",
        "pages": "111",
        "price": "69.95",
        "publisher_id": "333publisher"
    },
    {
        "_id": "44444444book",
        "title": "Blaming the User",
        "description": "I’m finally going home from a long business trip and I’m very excited. But my experience with United Airline’s customer service this morning completely killed my good mood.<br>They keep blaming me for their mistake. It’s a story I know well because I see it so commonly in Product Management too.<br>When I was booking my return ticket from London to Newark, the cheapest option was for something called “Mixed Cabin”. I could fly Business Class between London to Dublin and then Economy from Dublin to Newark. Since I had to get up at the ungodly hour of 5am to get to the airport, I thought that could be a nice treat on my first leg. So I booked it.",
        "img": "btu.jpg",
        "pages": "152",
        "price": "79.95",
        "publisher_id": "444publisher"
    },
    {
        "_id": "55555555book",
        "title": "Commenting Out Failed Tests",
        "description": "So now what should I do? That output prompts the question: what’s the correct port? Is it 1234, 4321 or is it some other port number? To sort this all out I’ll need to take on the responsibility of researching the right answer.<br>Almost certainly, Mr. or Ms. Comment-out-er gave me this chore because he/she did not have the time to sort it all out themselves. Also, likely, the person who changed the port number didn’t know there was a unit test failing or even that there was a unit test at all. I don’t need to know who did or didn’t deal with this; I’ll leave that to the archeologists.<br>The larger point is this: if you’re commenting out a failing unit test then you’re missing the point of a unit test. A unit test verifies that the code-under-test is working as intended. A failing test means you need to do something — other than commenting out the test.",
        "img": "coft.jpg",
        "pages": "166",
        "price": "69.95",
        "publisher_id": "555publisher"
    },
    {
        "_id": "66666666book",
        "title": "Copying and Pasting from Stack Overflow",
        "description": "Before you can copy and paste code, you have to make sure you have the legal right to copy and paste that code. Without that legal right, you would just be stealing other people's intellectual property. That would just be lazy.<br>Most code on Stack Overflow are 'snippets'. They do not meet standards of originality and as a result have no copyright protection. You are free to copy and paste them without any worry about losing a lawsuit. Some code on Stack Overflow are much longer than 'snippets'. They therefore qualify for copyright protection. By default, all content on Stack Overflow (including code) is licensed under the CC-BY-SA 3.0 license.<br>This license is not recommended for use in software at all, and SO is currently looking to replace this license for future code posted on its website. For now, though, the CC-BY-SA 3.0 is law. Even if SO does change its future licensing policies, all previous code will still remain under CC-BY-SA 3.0.",
        "img": "cpso.jpg",
        "pages": "159",
        "price": "69.95",
        "publisher_id": "555publisher"
    },
    {
        "_id": "77777777book",
        "title": "Changing Stuff and Seeing What Happens",
        "description": "It can be extremely difficult to focus on the good when, seemingly, bad things are happening in your life. However you can train your mind to focus on the good things in your life rather than dwelling on the bad. No it’s not one of those positive thinking articles that you’ve read all over the web and are sick and tired of. This is about changing the way you think, changing your thinking pattern. Do you use any of these thinking patterns in your day to day life? This is when you think nothing good will ever happen to you. This can be a deep seated way of thinking and it is a deep down inability to believe you are worthy of anything good happening to you e.g. “I’ll never have money, I’ve never had it before so I’ll never have it in the future, might as well carry on with this shitty job, at least it pays the mortgage.”",
        "img": "cswh.jpg",
        "pages": "129",
        "price": "59.95",
        "publisher_id": "444publisher"
    },
    {
        "_id": "88888888book",
        "title": "Coding on the Weekend",
        "description": "Before you click any other links on this page, you should read our Programmer 101 Guide so you can get acquainted with the basics. One of the first pieces of advice in the guide is to avoid getting hung up on choosing a programming language. Nonetheless, if you're having any trouble making a decision we asked our code-savvy readers for suggestions awhile back and that's a good resource for help. If you're looking to make web applications, you should take a look at our guide on building a web site from scratch with no experience as well.",
        "img": "cw.jpg",
        "pages": "142",
        "price": "49.95",
        "publisher_id": "333publisher"
    },
    {
        "_id": "99999999book",
        "title": "Doing it the Hard Way",
        "description": "When it comes to seducing their sexy ladies for a lifetime, these three gorgeous guys wonder why anyone would want it easy, when the hard way is oh-so-much more fun.... After an irresistible night of passion with Reya, muscle-bound Aaron longs to hold her close forever. Little does he know that the tall, sleek beauty has a carnal secret. TJ is a USA Today and NY Times bestseller, as well as a award-winning author of several romance genres, including paranormal, fantasy, sci-fi and urban fantasy romance.<br>No matter the genre TJ is penning, her favorite thing to do is build worlds. To take you somewhere extraordinary. To transport you to a place where you can close your eyes and slip into your fantasy...",
        "img": "dihw.jpg",
        "pages": "113",
        "price": "59.95",
        "publisher_id": "222publisher"
    },
    {
        "_id": "10101010book",
        "title": "Excuses to Miss Meetings",
        "description": "So I really want to go to this Yelp shindig next wednesday to meet all you fine fine people!  But I am supposed to go to a night meeting that night in Sonoma County if you can believe it!  So, what I need is a really good excuse to miss said meeting! Help me out so I can meet you all! Your Girl friend had to go to the optomatrist and get her eye's dialated so you have to drive her home. She did not write it on your calander so you forgot and could not plan another way to get her home safely.You always forget her appointments so she is very disappointed with you even though she is the one who forgot to write it down. Now you have to prove your love for her by taking care of her and her sick dog Bot who needs a suppository every evening to induce a bowel movement because she is so old ( the dog not the girlfriend). She ran out of prescription medication so now you need to get more medicine for the dog.",
        "img": "emm.jpg",
        "pages": "113",
        "price": "59.95",
        "publisher_id": "111publisher"
    },
    {
        "_id": "11011011book",
        "title": "Excuses for Not Writing Documentation",
        "description": "As a professional programmer, I've seen a lot of excuses for poor code over the years. It's absolutely amazing the amount of passion and energy that goes into defending bad code. What's more amazing is that if half of that energy were directed into putting quality in the code, the problem would disappear.<br>Here's a list of some of the excuses I've encountered over the ages. See how many your management or co-workers have used. Maybe you've used a few yourself. I know I have, but I grew out of it. (Mostly.)<br>This is the favorite excuse of the programmer in a hurry. You should write the comments before you write the program. That's so you can collect, focus and organize your thoughts so that your program is designed well.<br>The programmer in a hurry doesn't have time for planning. Or thinking for that matter. He wants to start coding now.",
        "img": "enwd.jpg",
        "pages": "153",
        "price": "79.95",
        "publisher_id": "111publisher"
    },
    {
        "_id": "12121212book",
        "title": "Excuses for Not Writing Unit Tests",
        "description": "<ol><li>I don’t have the time. But you’ll have the time to fix the bugs…<li>I don’t know how to write tests. No problem, anyone can learn.<li>I’m sure the code is working now. The competent programmer is fully aware of the limited size of his own skull …<li>This code is not testable. Learn or refactor.<li>It’s (UI|DB) code, we don’t test it. Because it never crashes ?<li>Because I need to refactor first … and I need tests to refactor ! Damn, you’ve fallen into the test deadlock !<li>It’s multithreaded code, it’s impossible to test. Because it’s fully tederministic ?<li>The QA department is already testing the code. Is that working well ?<li>I should not test my own code, I’ll be biased. Start testing other people’s code right now then !<li>I’m a programmer, not a tester. Professional programmers write tests.</ol>",
        "img": "ewut.jpg",
        "pages": "124",
        "price": "79.95",
        "publisher_id": "222publisher"
    },
    {
        "_id": "13131313book",
        "title": "Forgetting How Your Own Code Works",
        "description": "When I first coded, God and I alone understood it. 6 months later, only God.<br>This is an old programming joke, running around in different flavors. But the essence is the same. People forget. Every single time.<br>It’s even normal for people to forget the very syntax in which they coded! If a C++ programmer moved onto Java for a few years, he/she might later struggle remembering the C++ syntax.<br>Writing comments can go a long way. But I wonder why people expect programmers who write not-so-obvious code to write so-obvious comments! But please, do comment.<br>Use legible variable names and function names. Use simple and small functions. Don’t use magic numbers. Comment. And hopefully 6 months later, you might still remember what it does!",
        "img": "fhcw.jpg",
        "pages": "150",
        "price": "69.95",
        "publisher_id": "333publisher"
    },
    {
        "_id": "14141414book",
        "title": "Getting an Arduino LED to Blink",
        "description": "This example uses the built-in LED that most Arduino and Genuino boards have. This LED is connected to a digital pin and its number may vary from board type to board type. To make your life easier, we have a constant that is specified in every board descriptor file. This constant is LED_BUILTIN and allows you to control the built-in LED easily. Here is the correspondence between the constant and the digital pin. If you want to lit an external LED with this sketch, you need to build this circuit, where you connect one end of the resistor to the digital pin correspondent to the LED_BUILTIN constant. Connect the long leg of the LED (the positive leg, called the anode) to the other end of the resistor. Connect the short leg of the LED (the negative leg, called the cathode) to the GND. In the diagram below we show an UNO board that has D13 as the LED_BUILTIN value.\r\r\n",
        "img": "galb.jpg",
        "pages": "174",
        "price": "89.95",
        "publisher_id": "444publisher"
    },
    {
        "_id": "15151515book",
        "title": "Getting it to Work",
        "description": "One of the most important hiring criteria for many companies is the ability to work as a team player—yet, so many of us have colleagues who don’t play well with others.<br>“If you have one bad apple in the bunch, it can really hurt the morale and enthusiasm of an entire department,” says Andy Teach, author of From Graduation to Corporation, and host of the YouTube channel FromGradToCorp. “A department, or company, that works well together, has the most success together. When you enjoy working with your colleagues and look forward to interacting with them, everyone benefits.” Working with other team members whom you have a great work relationship with can actually make work fun, he says. “Morale is high, which leads to better productivity, which leads to better results.”",
        "img": "gitw.jpg",
        "pages": "180",
        "price": "69.95",
        "publisher_id": "555publisher"
    },
    {
        "_id": "16161616book",
        "title": "Googling the Error Message",
        "description": "Google serves some 80 percent of all search queries on the Internet, making it by far the most popular search engine. Its popularity is due not only to excellent search effectiveness, but also extensive querying capabilities. However, we should also remember that the Internet is a highly dynamic medium, so the results presented by Google are not always up-to-date – some search results might be stale, while other relevant resources might not yet have been visited by Googlebot (the automatic script that browses and indexes Web resources for Google).",
        "img": "gtem.jpg",
        "pages": "153",
        "price": "79.95",
        "publisher_id": "555publisher"
    },
    {
        "_id": "17171717book",
        "title": "Hating on Languages You Don't Use",
        "description": "I had to learn German in school and thought it was an ugly silly language. As an adult who became interested in language learning I realised I remembered a lot of German from school and decided to build on the little I already knew, despite still thinking it was ugly! What changed me completely was going on a trip to Germany which I found very beautiful we were in the Rhine valley. I was thrilled to realise I could communicate with the people in a basic way and thisgave me such a rush. Earlier this year I visited Vienna and went to see an opera there. It was Puccini's Boheme and the beauty of it almost brought me to tears. And guess what it was sung in German! It wasn't love at first site for me and German, but I've fallen deeply in love with the beauty of it over time. It might be the same for you and Spanish!",
        "img": "hldu.jpg",
        "pages": "122",
        "price": "89.95",
        "publisher_id": "444publisher"
    },
    {
        "_id": "18181818book",
        "title": "Hoping Nobody Hacks You",
        "description": "This book is a practical guide to discovering and exploiting security fl aws in web applications. By “web applications” we mean those that are accessed using a web browser to communicate with a web server. We examine a wide variety of different technologies, such as databases, fi le systems, and web services, but only in the context in which these are employed by web applications.<br>If you want to learn how to run port scans, attack fi rewalls, or break into servers in other ways, we suggest you look elsewhere. But if you want to know how to hack into a web application, steal sensitive data, and perform unauthorized actions, this is the book for you. There is enough that is interesting and fun to say on that subject without straying into any other territory.",
        "img": "hnhy.jpg",
        "pages": "169",
        "price": "49.95",
        "publisher_id": "333publisher"
    },
    {
        "_id": "19191919book",
        "title": "Hanging out on Slack",
        "description": "Big Brother isn’t just watching. He’s hanging out on Slack, too.<br>Most office workers know, on some level, that their work emails and messages aren’t private. They may not realize, however, the extent to which their communications are being analyzed and parsed for signs about employee happiness and satisfaction.<br>AIR, a Tokyo-based software company, is marketing software that scans conversations on workplace communication tool Slack to gauge team morale. Their product, called Vibe, looks for keywords and emoji, then sorts a team’s mood into five emotions: happiness, irritation, disapproval, disappointment, and stress. There’s even a bot that will notify managers of real-time changes in team morale.",
        "img": "hoos.jpg",
        "pages": "111",
        "price": "59.95",
        "publisher_id": "222publisher"
    },
    {
        "_id": "20202020book",
        "title": "Hating Other People's Code",
        "description": "You aren't a bad programmer for getting frustrated. In fact, it's a sign that you're a good programmer because you can identify what makes software work well instead of simply just working.<br>Here's my advice: whenever you find something that doesn't meet your standards, make note of it. Think about what you could change and what value it might provide so you can prioritize improvements. Whenever possible, make these improvements as part of a related effort, but be sure to give yourself the extra time. More importantly, make sure you have good test cases so you can ensure that your refactoring doesn't break something unexpectedly.",
        "img": "hopc.jpg",
        "pages": "139",
        "price": "59.95",
        "publisher_id": "111publisher"
    },
    {
        "_id": "21212121book",
        "title": "Hoping This Works",
        "description": "Wishing, Wanting and Hoping Does Not Work in Business.<br>What works in business is “doing”. Executing the plan requires effort. It is the muscle, the labor and the heavy lifting that gets the job done.<br>If you are wishing a prospect calls you to buy something, the wait is long. If you are wanting people to respond to your awesome tweet, the anticipation is agonizing. If you are hoping a great venture capitalist recognizes your incredible invention, your desires can go unfulfilled. The message is not harsh or meant to burst your bubble. It is a direct call to action. Your wish, want and hope strategy needs reconsideration. It is not time to give up. It is time to change your strategy. Winners get rewarded for hard work. They do what others won’t do and that is how they win.",
        "img": "htw.jpg",
        "pages": "186",
        "price": "49.95",
        "publisher_id": "111publisher"
    },
    {
        "_id": "22022022book",
        "title": "It Depends",
        "description": "When someone asks you a question, and you're not sure of the answer, you can say \"It depends.\" This phrase means that you can't answer until you know more information. In the example above, you can't answer the question, \"Do you want some breakfast?\" until you know what your mother is cooking.<br>You tell what information you need to know in order to make the decision using \"depends on ___\":<br>It depends on what you're making.<br>You can also just say \"It depends.\" and then ask a question:<br>A: Do you want to come?<br>B: It depends. Who else is going?",
        "img": "id.jpg",
        "pages": "159",
        "price": "79.95",
        "publisher_id": "222publisher"
    },
    {
        "_id": "23232323book",
        "title": "Memorizing Six Git Commands",
        "description": "First, you laugh, then you cry, then you cry again.<br>Then, if you’re like me, you wonder what “know” means.<br>Because a lot of people are taken to task for “not knowing” git, and thereby getting in trouble. The kind that ruins not only their day, but the day of everyone else depending on that repository.<br>That really sucks, and it turns off a lot of folks who would benefit from version control. It makes folks scared to ask for help, and it makes it hard to learn what to do and what not to do. I know git.<br>Or, rather, I did. I slurped down git ready. I even worked my way tortuously through Git From The Bottom Up, the whole thing, from byte level on up. I read articles on best practices, I experimented, I refined my workflows.<br>At the end, I Knew Git.",
        "img": "msgc.jpg",
        "pages": "168",
        "price": "89.95",
        "publisher_id": "333publisher"
    },
    {
        "_id": "24242424book",
        "title": "Programming by Trial and Error",
        "description": "You're not quite sure how to make a call to someone else's code or how to get rid of a bug. Normally, you would whip out a book to see just how to use that string class, or you would start up the old debugger, or you would carefully inspect the code to see what semantic error you've made.<br>But - for whatever reason - you decide to forego this approach. Instead, you use the trustworthy ScientificMethod! Formulate a \"hypothesis\", compile it, and see if it works! If not, try another \"hypothesis\"!<br>Example \"hypotheses\":<br>maybe changing a[i] to a[i-1] would help<br>maybe adding a few blank lines will get it to compile (it worked on project frump three months ago!)<br>maybe commenting out these lines will fix it",
        "img": "pbte.jpg",
        "pages": "121",
        "price": "79.95",
        "publisher_id": "444publisher"
    },
    {
        "_id": "25252525book",
        "title": "Pretending to Know About Stuff",
        "description": "I’m a programmer and I recently stopped pretending to know things I don’t know. I used to do it all the time. And if you’re a programmer, a designer, a marketer, or really any type of professional that takes pride in your career, you pretended to know things you don’t know. Maybe you still do.<br>But if you want to become better at your career, you need to stop pretending to know things that you don’t know. The reason why is probably not what you think. Not too long ago, I got into an informal conversation with Sam, a developer who I really respected. We started talking about the cool things we were working on, and Sam started raving to me about Elm, a programming language. I hardly knew anything about Elm. But I acted like I did, and I made it through the rest of the informal conversation by repeating some of the words he said and nodding my head every few seconds. I simply couldn’t bring myself to admit what I didn’t know.",
        "img": "pkas.jpg",
        "pages": "138",
        "price": "59.95",
        "publisher_id": "555publisher"
    },
    {
        "_id": "26262626book",
        "title": "Rewriting Your Front End Every Six Weeks",
        "description": "I’ve been thinking a lot about this post. I wrote a long reaction to it late last night before deciding to scrap it because of its tone. There’s a lot I could push back on, but I don’t think it’s worth doing so.<br>The only thing I want to talk about is the curriculum. Initially I also wanted to talk about your perception of the Hacker in Residence program (I’m a former HIR), but I’m already at a wall of text with the curriculum alone.<br>Curriculum<br>The curriculum is centered around one thing: Teaching you how to learn new things as an engineer. That’s it. They’re not about completing the basic requirements as quickly as possible. Everything else is a plot device. If you haven’t learned or grown a soft skill with each sprint, think about it some more. Here’s how I interpreted the curriculum, and this occurred to me around the second week of the program.",
        "img": "rfsw.jpg",
        "pages": "168",
        "price": "89.95",
        "publisher_id": "555publisher"
    },
    {
        "_id": "27272727book",
        "title": "Solving Imaginary Scaling Issues",
        "description": "Chapter 1: Databases with cool-sounding names<br>Chapter 2: Using BitTorrent for everything.<br>Chapter 3: Forget Torrents. Use the blockchain for everything.<br>Chapter 4: Sharding the database before adding any indexes.<br>Chapter 5: Upgrading to faster processors without checking if you're limited by disk I/O.<br>Chapter 6: Rewriting APIs in C for speed without compressing data on the wire.<br>Chapter 7: Putting large blobs of binary data into SQL databases for fun and profit.<br>Chapter 8: split everything into 35 microservices all maintained by 1 person.<br>Chapter 9: Blaming Everything On The Last Person To Quit",
        "img": "sisi.jpg",
        "pages": "125",
        "price": "89.95",
        "publisher_id": "444publisher"
    },
    {
        "_id": "28282828book",
        "title": "Turning Coffee Into Code",
        "description": "A programmer is a human, rock, or any other object capable of turning pizza and caffeine into code. Programmers minds are very complex - they like to explain things in ways that a normal human would not understand, and makes jokes that only programmers would laugh at.\r\r\nProgrammer 1: You create a gun module, a gun class, a foot module and a foot class. After realising you can't point the gun at the foot, you pass a reference to the gun to a foot object. After the foot is blown up, the gun object remains alive for eternity, ready to shoot all future feet that may happen to appear.",
        "img": "tcic.jpg",
        "pages": "187",
        "price": "89.95",
        "publisher_id": "333publisher"
    },
    {
        "_id": "29292929book",
        "title": "Trying Stuff Until it Works",
        "description": "An Influenster VoxBox is a box full of full-sized free products that you get to review and keep.<br>These boxes are often based on a theme but are sometimes a single product or group of products from the same company.<br>These are truly awesome boxes that can contain hundreds of dollars worth of free stuff. In the past, I've seen VoxBoxes that contain a Keurig coffee brewer, a skin care line, make-up, clothes, and all kinds of other products. Keep reading to see details of all the boxes I've received. You can visit Influenster and click Get Started and register by email or sign up with Facebook. You'll then receive a link in your email that you can visit to fill out your profile.<br>Influenster is a completely free program to join and you don't need an invite.",
        "img": "tsuw.jpg",
        "pages": "170",
        "price": "49.95",
        "publisher_id": "222publisher"
    },
    {
        "_id": "30303030book",
        "title": "Writing Code that Nobody Else Can Read",
        "description": "In the interests of creating employment opportunities in the Java programming field, I am passing on these tips from the masters on how to write code that is so difficult to maintain, that the people who come after you will take years to make even the simplest changes. Further, if you follow all these rules religiously, you will even guarantee yourself a lifetime of employment, since no one but you has a hope in hell of maintaining the code. Then again, if you followed all these rules religiously, even you wouldn't be able to maintain the code!<br>You don't want to overdo this. Your code should not look hopelessly unmaintainable, just be that way.<br>Otherwise it stands the risk of being rewritten or refactored.",
        "img": "wcnr.jpg",
        "pages": "121",
        "price": "49.95",
        "publisher_id": "111publisher"
    }
]

module.exports = books