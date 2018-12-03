class AddVotesToBreweries < ActiveRecord::Migration[5.2]
  def change
    add_column :breweries, :votes, :integer, default: 0
  end
end
