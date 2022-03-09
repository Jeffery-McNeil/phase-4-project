class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.integer :user_id
      t.integer :medium_id

      t.timestamps
    end
  end
end
