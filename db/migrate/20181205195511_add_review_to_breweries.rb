class AddReviewToBreweries < ActiveRecord::Migration[5.2]
  def change
    add_column :breweries, :review, :text
  end
end
