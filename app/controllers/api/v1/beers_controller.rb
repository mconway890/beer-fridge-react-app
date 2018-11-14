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

    private

      def set_beer
        @beer = Beer.find_by(id: params[:id])
      end

      def beer_params
        params.require(:beer).permit(:name, :style, :abv, :brewery)
      end
  end
end
