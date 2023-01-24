class AlbumPhotoSerializer < ActiveModel::Serializer
  attributes :id, :album_title, :album_id

  has_many :photos
end
