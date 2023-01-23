# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::Base

  def index
    # React app index page
    render file: 'public/index.html'
  end
end
class PhotosController < ApplicationController

  # rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
  # def index
  #   render json: Photo.all,status: :ok
  # end
  
  # def show
  #   photo=Photo.find_by!(id:params[:id])
  #   render json: photo, status: :ok
  # end
  
  # private
  
  # def not_found_response
  #   render json: {error:"Photo not found"},status: :not_found
  # end
  
  # end

  # model

  # class Photo < ApplicationRecord

  #   #   belongs_to :user
  #   #   belongs_to :album
      
  #   # end
    

  # serializer
  # class PhotoSerializer < ActiveModel::Serializer
    #   attributes :id, :album_id, :photo_title, :img_url
    # end
    

    # migration

    # class CreatePhotos < ActiveRecord::Migration[6.1]
    #   def change
    #     create_table :photos do |t|
    #       t.integer :album_id
    #       t.string :photo_title
    #       t.string :img_url
    
    #       t.timestamps
    #     end
    #   end
    # end
    