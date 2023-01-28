# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



  images = [
   "https://picsum.photos/id/27/2000/3000",
   "https://picsum.photos/id/28/3000/2000",
   "https://picsum.photos/id/29/4000/3000",
   "https://picsum.photos/id/30/2000/1500",
   "https://picsum.photos/id/35/1000/2500",
   "https://picsum.photos/id/45/1500/3000",
   "https://picsum.photos/id/55/2500/3000",
   "https://picsum.photos/id/47/3000/2500",
   "https://picsum.photos/id/50/3500/3000",
   "https://picsum.photos/id/53/2000/1500",
   "https://picsum.photos/id/74/1000/2500",
   "https://picsum.photos/id/78/1500/2000",
   "https://picsum.photos/id/77/2000/3000",
   "https://picsum.photos/id/54/3000/2000",
   "https://picsum.photos/id/88/4000/3000",
   "https://picsum.photos/id/130/2000/1500",
   "https://picsum.photos/id/315/1000/2500",
   "https://picsum.photos/id/57/1500/3000",
   "https://picsum.photos/id/65/2500/3000",
   "https://picsum.photos/id/66/3000/2500",
   "https://picsum.photos/id/99/3500/3000",
   "https://picsum.photos/id/97/2000/1500",
   "https://picsum.photos/id/93/1000/2500",
   "https://picsum.photos/id/22/1500/2000",
 ]

puts "seeding...🌱"
5.times do
  User.create(
    name:Faker::Name.name,
    avatar:images[rand(1..20)],
    username:Faker::Name.first_name,
    password_digest:12345
  )
end
puts"users complete!✅"

puts "seeding albums...🌱"
10.times do 
  Album.create(
    user_id:rand(1..5),
    album_title:Faker::Address.country
  )
end
puts "album complete!✅"

puts "seeding photos..🌱"
30.times do 
  Photo.create(
    album_id:rand(1..10),
    photo_title:Faker::Mountain.range,
    img_url:images[rand(1..24)]
  )
end
  puts "photos complete!✅"
  puts "seeding complete!✅✅✅✅"

  # puts "seeding extra.."

  # Album.create(
  #   user_id:1,
  #   album_title:"Madagascar"
  # )
  # Album.create(
  #   user_id:1,
  #   album_title:"Sycheles"
  # )

  # Photo.create(
  #   album_id:1,
  #   photo_title:Faker::Mountain.range,
  #   img_url:images[rand(1..10)]
  # )
  # Photo.create(
  #   album_id:1,
  #   photo_title:Faker::Mountain.range,
  #   img_url:images[rand(1..10)]
  # )
  # Photo.create(
  #   album_id:1,
  #   photo_title:Faker::Mountain.range,
  #   img_url:images[rand(1..10)]
  # )
  # Photo.create(
  #   album_id:1,
  #   photo_title:Faker::Mountain.range,
  #   img_url:images[rand(1..10)]
  # )
  # Photo.create(
  #   album_id:1,
  #   photo_title:Faker::Mountain.range,
  #   img_url:images[rand(1..10)]
  # )

  # puts "end of extras..."