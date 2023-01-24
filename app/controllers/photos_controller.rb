class PhotosController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
  def index
    render json: Photo.all,status: :ok
  end
  
  def show
    photo=Photo.find_by!(id:params[:id])
    render json: photo, status: :ok
  end
  
  private
  
  def not_found_response
    render json: {error:"Photo not found"},status: :not_found
  end
  
  end
