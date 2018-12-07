# nesting controller to avoid breaking changes and provide backward compatibility with API
module Api::V1
  class BeersController < ApplicationController
    before_action :set_beer, only: [:show, :increase, :decrease, :destroy]
    # use increase and decrease as methods/routes instead of update containing both sides of logic
    # clicking like or dislike button will make fetch request to url '/increase' or '/decrease'

    def index
      @beers = Beer.all.order(:name)
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

    # create two methods that will handle increasing and decreasing votes
    # use increase and decrease methods as routes for when button is clicked
    def increase
      # increment the votes value by 1
      @beer.votes += 1
      # save new votes value
      if @beer.save
      # if beer saves, render json
        render json: @beer
      # else render error
      else
        render( status: 400, json: {error: "Could Not Update."})
      end
    end

    def decrease
      # decrement the votes value by 1
      @beer.votes -= 1
      # save new votes value
      if @beer.save
      # if beer saves, render json
        render json: @beer
      # else render error
      else
        render( status: 400, json: {error: "Could Not Update."})
      end
    end

    private
      # Find record matching beer by id
      def set_beer
        @beer = Beer.find_by(id: params[:id])
      end

      # using `fetch` can supply a default and use
      # the Strong Parameters API from there
      def beer_params
        params.fetch(:beer, {}).permit(:id, :name, :style, :abv, :brewery, :description, :votes)
      end
  end
end
