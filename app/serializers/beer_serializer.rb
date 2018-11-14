class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :abv, :brewery, :description
end
