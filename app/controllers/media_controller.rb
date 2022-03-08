class MediaController < ApplicationController

    def index 
        media = Medium.all
        render json: media, status: :ok
    end

    def create
        medium = Medium.create(media_params)
        render json: medium, status: :created
    end

    def destroy
        medium = Medium.find(params[:id])
        medium.destroy
        head :no_content
    end

    private

    def media_params
        params.permit( :name, :image, :description, :artist, :company, :rating)
    end

end
