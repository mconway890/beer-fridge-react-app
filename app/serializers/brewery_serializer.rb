class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name
  # attributes required by the client (the params for the class instance)
end
