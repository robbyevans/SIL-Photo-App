class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :password,
  length: { minimum: 5 },
  if:  -> { new_record? || !password.nil? }
  has_many :albums
  has_many :photos, through: :albums
end
