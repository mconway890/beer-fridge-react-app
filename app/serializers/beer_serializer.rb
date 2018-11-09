class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :abv, :brewery_id
end
