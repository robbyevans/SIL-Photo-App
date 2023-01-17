class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :album_id, :photo_title, :img_url
end
