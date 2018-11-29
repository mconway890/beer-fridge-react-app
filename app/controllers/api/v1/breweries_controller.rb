module Api::V1
  class BreweriesController < ApplicationController
    before_action :set_brewery, only: [:show, :update, :destroy]

    def index
      @breweries = Brewery.all
      render json: @breweries
    end

    def create
      @brewery= Brewery.new(brewery_params)
      if @brewery.save
        render json: @brewery
      else
        render json: {message: brewery.errors}, status: 400
      end
    end

    def show
      render json: @brewery
    end

    def destroy
      @brewery.destroy
    end

    def update
      if @brewery.update(brewery_params)
        render json: @brewery
      else
        render( status: 400, json: {error: "Could Not Update."})
      end
    end

    private
      # Find record matching brewery by id
      def set_brewery
        @brewery= Brewery.find_by(id: params[:id])
      end

      # using `fetch` can supply a default and use
      # the Strong Parameters API from there
      def brewery_params
        params.fetch(:brewery, {}).permit(:id, :name)
      end
  end
end