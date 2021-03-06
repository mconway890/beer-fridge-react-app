module Api::V1
  class BreweriesController < ApplicationController
    before_action :set_brewery, only: [:show, :increase, :decrease, :destroy]
    # use increase and decrease as methods/routes instead of update containing both sides of logic
    # clicking like or dislike button will make fetch request to url '/increase' or '/decrease'

    def index
      @breweries = Brewery.all.order(:name)
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

    # create two methods that will handle increasing and decreasing votes
    # use increase and decrease methods as routes for when button is clicked
    def increase
      # increment the votes value by 1
      @brewery.votes += 1
      # save new votes value
      if @brewery.save
      # if brewery saves, render json
        render json: @brewery
      # else render error
      else
        render( status: 400, json: {error: "Could Not Update."})
      end
    end

    def decrease
      # decrement the votes value by 1
      @brewery.votes -= 1
      # save new votes value
      if @brewery.save
      # if brewerysaves, render json
        render json: @brewery
      # else render error
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
        params.fetch(:brewery, {}).permit(:id, :name, :review)
      end
  end
end
