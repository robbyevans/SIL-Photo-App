class UserAlbumSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :albums
end
