class CreateMedia < ActiveRecord::Migration[7.0]
  def change
    create_table :media do |t|
      t.string :name
      t.string :description
      t.string :image
      t.string :artist
      t.string :company
      t.integer :rating
      t.string :category

      t.timestamps
    end
  end
end
