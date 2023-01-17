class AlbumPhotoSerializer < ActiveModel::Serializer
  attributes :id, :album_title

  has_many :photos
end
