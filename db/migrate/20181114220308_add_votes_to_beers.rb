class AddVotesToBeers < ActiveRecord::Migration[5.2]
  def change
    add_column :beers, :votes, :integer
  end
end
