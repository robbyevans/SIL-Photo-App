class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album_title

  has_many :photos
end
