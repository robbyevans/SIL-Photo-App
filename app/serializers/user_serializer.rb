class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email,:avatar

  has_many :albums
end
