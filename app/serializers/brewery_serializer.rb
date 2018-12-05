class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :votes, :review
  # attributes required by the client (the params for the class instance)
end
