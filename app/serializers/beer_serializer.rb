class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :abv, :brewery, :description, :votes
  # attributes required by the client (the params for the class instance)
end
