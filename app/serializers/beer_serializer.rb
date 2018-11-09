class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :brewery_id
end
