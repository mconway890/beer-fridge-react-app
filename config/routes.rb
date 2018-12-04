Rails.application.routes.draw do
  namespace :api do
  	namespace :v1 do
  		resources :beers, :breweries, only: [:create, :index, :show, :destroy]
  	end
  end

  patch '/api/v1/beers/:id/increase', to: 'api/v1/beers#increase'
  patch '/api/v1/beers/:id/decrease', to: 'api/v1/beers#decrease'
  patch '/api/v1/breweries/:id/increase', to: 'api/v1/breweries#increase'
  patch '/api/v1/breweries/:id/decrease', to: 'api/v1/breweries#decrease'
end

# only route to index and show so update method isn't looked for in controller
# update method replaced with increase and decrease
# patch request made to increase route in order to update vote count by 1
# patch request made to decrease route in order to update vote count down by 1
