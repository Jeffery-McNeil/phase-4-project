class CategoriesController < ApplicationController

    def create
        category = Category.create(category_params)
        render json: category.medium_id, status: :created 
    end

    def destroy
        category = Category.find_by(medium_id: params[:id])
        category.delete
        head :no_content
    end

    private

    def category_params
        params.permit(:user_id, :medium_id)
    end

end
