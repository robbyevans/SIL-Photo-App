# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding...🌱"
10.times do
  User.create(
    name:Faker::Name.name,
    username:Faker::Name.first_name,
    email:Faker::Name.first_name
  )
end
puts"users complete!✅"

puts "seeding albums...🌱"
10.times do 
  Album.create(
    album_id:rand(1..10),
    user_id:rand(1..10),
    album_title:Faker::Mountain.name
  )
end
puts "album complete!✅"

puts "seeding photos..🌱"
10.times do 
  Photo.create(
    album_id:rand(1..10),
    photo_title:Faker::Mountain.range,
    img_url:Faker::Avatar.image
  )
end
  puts "photos complete!✅"
  puts "seeding complete!✅✅✅✅"