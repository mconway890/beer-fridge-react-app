module Api::V1
  class BeersController < ApplicationController
    before_action :set_beer, only: [:show, :update, :destroy]

    def index
      @beers = Beer.all
      render json: @beers
    end

    def create
      @beer = Beer.new(beer_params)
      if @beer.save
        render json: @beer
      else
        render json: {message: beer.errors}, status: 400
      end
    end

    def show
      render json: @beer
    end

    def destroy
      @beer.destroy
    end

    def update
      if @beer.update(beer_params)
        render json: @beer
      else
        render( status: 400, json: {error: "Could Not Update."})
    end

    private

      def set_beer
        @beer = Beer.find_by(id: params[:id])
      end

      def beer_params
        params.require(:beer).permit(:name, :style, :abv, :brewery, :description)
      end
  end
end
