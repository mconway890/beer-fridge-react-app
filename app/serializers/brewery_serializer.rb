class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :votes
  # attributes required by the client (the params for the class instance)
end
