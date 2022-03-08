# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create( username: "bobby" )

Medium.create( name: "Polygondwanaland", description: "Polygondwanaland is the twelfth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard. The album was released under an open source licence—the band uploaded the master tapes online for anyone to use. It was released on 17 November 2017", 
image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Polygondwanaland.jpg", 
artist: "King Gizzard and the Lizard Wizard", company: "Flightless Records", rating: 10 )

Review.create( content: "My favorite!", user_id: 1, medium_id: 1)

Category.create( name: "Music", user_id: 1, medium_id: 1)