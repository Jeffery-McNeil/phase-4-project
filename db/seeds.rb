# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Review.create( content: "My favorite!", user_id: 1, medium_id: 1)

Category.create(user_id: 1, medium_id: 1)

Medium.create( name: "12 Bar Bruise", description: "12 Bar Bruise is the debut studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard. It was released on 7 September 2012 on Flightless.", 
image: "https://upload.wikimedia.org/wikipedia/en/9/9f/12_Bar_Bruise_King_Gizzard.jpg", 
category: "music", artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Eyes Like the Sky", description: "Described as a 'cult western audio book', the album is narrated and written by Broderick Smith, the frontman for the 1970s Australian rock group The Dingoes and the father of King Gizzard keyboardist Ambrose Kenny Smith.", 
image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Eyes_Like_The_Sky_King_Gizzard.jpg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Float Along - Fill Your Lungs", description: "Float Along – Fill Your Lungs is the third studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard, released months after their second album, Eyes Like The Sky.", 
image: "https://upload.wikimedia.org/wikipedia/en/b/b1/Float_Along_-_Fill_Your_Lungs_King_Gizzard.jpg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Oddments", description: "Oddments is the fourth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard.", 
image: "https://upload.wikimedia.org/wikipedia/en/3/32/Oddments_King_Gizzard.jpg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "I'm in Your Mind Fuzz", description: "I'm In Your Mind Fuzz is the fifth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard.", 
image: "https://upload.wikimedia.org/wikipedia/en/2/20/I%27m_in_Your_Mind_Fuzz_King_Gizzard.jpg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Quarters!", description: "Quarters! is the sixth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard. It was released on 12 May 2015 on Heavenly Records peaking at No. 99 on the ARIA Charts, a first for the band", 
image: "https://upload.wikimedia.org/wikipedia/en/a/ab/Quarters_King_Gizzard.jpeg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Paper Mâché Dream Balloon", description: "Paper Mâché Dream Balloon is the seventh studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard. It was released on 13 November 2015 on the band's Bandcamp, and then a week later on Heavenly Records.", 
image: "https://upload.wikimedia.org/wikipedia/en/e/ec/Paper_Mache_Dream_Balloon.jpg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Nonagon Infinity", description: "Nonagon Infinity is the eighth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard. It was released on 29 April 2016 on ATO Records", 
image: "https://upload.wikimedia.org/wikipedia/en/2/29/Nonagon_Infinity.png", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Flying Microtonal Banana", description: "Flying Microtonal Banana (subtitled Explorations into Microtonal Tuning, Volume 1) is the ninth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard", 
image: "https://upload.wikimedia.org/wikipedia/en/4/49/Flying_Microtonal_Banana.jpg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Murder of the Universe", description: "Murder of the Universe is the tenth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard.", 
image: "https://upload.wikimedia.org/wikipedia/en/a/ad/Murder_Of_The_Universe.jpg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Sketches of Brunswick East", description: "Sketches of Brunswick East is the eleventh studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard, and the third by Mild High Club.", 
image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/KGLW_Sketches-artwork.jpg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Polygondwanaland", description: "Polygondwanaland is the twelfth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard. The album was released under an open source licence—the band uploaded the master tapes online for anyone to use. It was released on 17 November 2017", 
image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Polygondwanaland.jpg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Gumboot Soup", description: "Gumboot Soup is the thirteenth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard", 
image: "https://upload.wikimedia.org/wikipedia/en/6/6e/King_Gizzard_%26_The_Lizard_Wizard_-_Gumboot_Soup.jpg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Fishing for Fishies", description: "Fishing for Fishies is the fourteenth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard.", 
image: "https://upload.wikimedia.org/wikipedia/en/3/33/King_Gizzard_and_the_Lizard_Wizard_-_Fishing_for_Fishies.png", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "Infest the Rats' Nest", description: "Infest the Rats' Nest is the fifteenth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard.", 
image: "https://upload.wikimedia.org/wikipedia/en/2/2e/King_Gizzard_%26_the_Lizard_Wizard_-_Infest_the_Rats%27_Nest.png", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Medium.create( name: "K.G.", description: "K.G. (subtitled Explorations into Microtonal Tuning, Volume 2) is the sixteenth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard, released on 20 November 2020 on their own label.", 
image: "https://upload.wikimedia.org/wikipedia/en/8/87/KG_album_cover.jpg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "KGLW", rating: 10 )

Medium.create( name: "L.W.", description: "L.W. (subtitled Explorations into Microtonal Tuning, Volume 3) is the seventeenth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard, officially released on 25 February 2021 on their own label", 
image: "https://upload.wikimedia.org/wikipedia/en/9/93/LW_album_cover.png", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "KGLW", rating: 10 )

Medium.create( name: "Butterfly 3000", description: "Butterfly 3000 is the 18th studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard, released on 11 June 2021. It is the band's first album not released on Flightless Records, instead being released on the band's own label KGLW.", 
image: "https://upload.wikimedia.org/wikipedia/en/4/47/Butterfly_3000_cover.jpg", 
category: "music",  artist: "King Gizzard and the Lizard Wizard", company: "KGLW", rating: 10 )

Medium.create( name: "Star Trek: The Next Generation", description: "Star Trek: The Next Generation (TNG) is an American science fiction television series created by Gene Roddenberry. It originally aired from September 28, 1987 to May 23, 1994 in syndication, spanning 178 episodes over seven seasons. The third series in the Star Trek franchise, it is the second sequel to Star Trek: The Original Series.",
image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Star_Trek_The_Next_Generation_Logo.svg", 
category: "TV show", artist: "Gene Roddenberry", company: "Paramount")

Medium.create( name: "Twin Peaks", description: "Twin Peaks is an American mystery-horror serial drama television series created by Mark Frost and David Lynch. It premiered on ABC on April 8, 1990, and ran for two seasons until its cancellation in 1991. In the years following its release, the show gained a devoted cult following and has been referenced in a wide variety of media",
image: "https://upload.wikimedia.org/wikipedia/en/e/ea/TwinPeaks_openingshotcredits.jpg", 
category: "TV show", artist: "David Lynch and Mark Frost", company: "Lynch/Frost Productions")

Medium.create( name: "Mulholland Drive", description: "Mulholland Drive (stylized as Mulholland Dr.) is a 2001 surrealist neo-noir[6][7] mystery film written and directed by David Lynch and starring Naomi Watts, Laura Harring, Justin Theroux, Ann Miller, Mark Pellegrino, and Robert Forster.",
image: "https://upload.wikimedia.org/wikipedia/en/0/0f/Mulholland.png", 
category: "Movie", artist: "David Lynch", company: "Universal Pictures")

Medium.create( name: "The Lighthouse", description: "The Lighthouse is a 2019 film directed and produced by Robert Eggers, who co-wrote the screenplay with his brother, Max Eggers. Set in the 1890s, it stars Willem Dafoe and Robert Pattinson as two lighthouse keepers who descend into madness when a storm strands them on the remote island where they are stationed.",
image: "https://upload.wikimedia.org/wikipedia/en/2/2c/The_Lighthouse.jpeg", 
category: "Movie", artist: "Robert Eggers", company: "A24")