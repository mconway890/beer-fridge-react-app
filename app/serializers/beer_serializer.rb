class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :abv, :brewery, :description, :votes, :brewery_id
  # attributes required by the client (the params for the class instance)
  belongs_to :brewery
end
