class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :style
      t.string :brewery
      t.integer :brewery_id
      t.integer :beer_no
      t.integer :abv
      t.integer :ibu
      t.integer :ounces

      t.timestamps
    end
  end
end
