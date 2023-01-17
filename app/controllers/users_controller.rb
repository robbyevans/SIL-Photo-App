class UsersController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
def index
  render json: User.all,status: :ok
end

def show
  user=User.find_by!(id:params[:id])
  render json: user,serializer:UserAlbumSerializer, status: :ok
end

private

def not_found_response
  render json: {error:"Lecturer not found"},status: :not_found
end

end
