# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

COLUMNS = [
  'beer_no',
  'abv',
  'ibu',
  'id',
  'name',
  'style',
  'brewery_id',
  'ounces'
]

print "\nSeeding..."

dir = File.dirname(File.expand_path(__FILE__))
lineno = 1

CSV.foreach(File.join(dir, 'beers.csv')) do |row|
  lineno = $.

  next if lineno == 1
  print '.' if lineno % 1000 == 0

  entry = {}

  COLUMNS.each_with_index do |column, idx|
    entry[column] = row[idx]
  end

  #Beer.create!(entry)
end

print "done."
print "\n#{lineno} beer entries imported."
