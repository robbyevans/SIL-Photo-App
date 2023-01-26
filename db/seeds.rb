# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



  images = [
   "https://picsum.photos/2000/3000",
   "https://picsum.photos/3000/2000",
   "https://picsum.photos/4000/3000",
   "https://picsum.photos/2000/1500",
   "https://picsum.photos/1000/2500",
   "https://picsum.photos/1500/3000",
   "https://picsum.photos/2500/3000",
   "https://picsum.photos/3000/2500",
   "https://picsum.photos/3500/3000",
   "https://picsum.photos/2000/1500",
   "https://picsum.photos/1000/2500",
   "https://picsum.photos/1500/2000",
 ]

puts "seeding...🌱"
6.times do
  User.create(
    name:Faker::Name.name,
    avatar:images[rand(1..10)],
    username:Faker::Name.first_name,
    password_digest:12345
  )
end
puts"users complete!✅"

puts "seeding albums...🌱"
10.times do 
  Album.create(
    user_id:rand(1..6),
    album_title:Faker::Address.country
  )
end
puts "album complete!✅"

puts "seeding photos..🌱"
20.times do 
  Photo.create(
    album_id:rand(1..10),
    photo_title:Faker::Mountain.range,
    img_url:images[rand(1..10)]
  )
end
  puts "photos complete!✅"
  puts "seeding complete!✅✅✅✅"