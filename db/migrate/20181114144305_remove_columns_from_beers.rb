class RemoveColumnsFromBeers < ActiveRecord::Migration[5.2]
  def change
    remove_column :beers, :beer_no, :integer
    remove_column :beers, :ibu, :integer
    remove_column :beers, :ounces, :integer
    remove_column :beers, :brewery_id, :integer
  end
end
