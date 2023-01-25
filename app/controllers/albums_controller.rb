class AlbumsController < ApplicationController
  
rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

def index
  render json: Album.all,status: :ok
end

def show
  album=Album.find_by!(id:params[:id])
  render json: album, serializer:AlbumPhotoSerializer, status: :ok
end
def create
  album=Album.create(album_params)
  render json: album,status: :created
end

private

def album_params
  params.permit(:user_id, :album_title)
end

def not_found_response
  render json: {error:"Album not found"},status: :not_found
end

end
