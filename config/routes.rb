Rails.application.routes.draw do
  namespace :api do
  	namespace :v1 do
  		resources :beers
  	end
  end

  namespace :api do
  	namespace :v1 do
  		resources :breweries
  	end
  end
end
