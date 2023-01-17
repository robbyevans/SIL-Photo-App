class UserAlbumSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :albums
end
