class ChangeAbvToBeDecimalInBeers < ActiveRecord::Migration[5.2]
  def change
    change_column :beers, :abv, :decimal
  end
end
