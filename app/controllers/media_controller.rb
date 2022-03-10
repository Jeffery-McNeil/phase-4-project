class MediaController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index 
        media = Medium.all.select { |m| m.users.ids.exclude?(session[:user_id])}
        render json: media, status: :ok
    end

    def show
        medium = Medium.find(params[:id])
        render json: medium, status: :ok
    end

    def user_media
        media = User.find(params[:id]).media
        render json: media, status: :ok
    end

    def create
        medium = Medium.create!(media_params)
        Category.create(user_id: session[:user_id], medium_id: medium.id)
        render json: medium, status: :created
    end

    def destroy
        medium = Medium.find(params[:id])
        medium.destroy
        head :no_content
    end

    def update
        medium = Medium.find(params[:id])
        medium.update(media_params)
        render json: medium, status: :ok
    end

    private

    def media_params
        params.permit( :name, :image, :description, :artist, :company, :rating)
    end

    def show_errors invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Does not exist" }, status: :not_found
    end

end
