class PhotosController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
  def index
    render json: Photo.all,status: :ok
  end
  
  def show
    photo=Photo.find_by!(id:params[:id])
    render json: photo, status: :ok
  end
  def create
    photo=Photo.create(photo_params)
    render json: photo, status: :created
  end

  def update
    photo=Photo.find_by!(id:params[:id])
    photo.update(photo_params)
    render json:photo, status: :created

  end
  
  private

  def photo_params
    params.permit(:album_id,:photo_title, :img_url)
  end
  
  def not_found_response
    render json: {error:"Photo not found"},status: :not_found
  end
  
  end
