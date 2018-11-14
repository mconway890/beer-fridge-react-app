class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :abv, :brewery, :description, :votes
end
