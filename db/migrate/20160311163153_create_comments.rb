class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
    	t.string :author
    	t.string :body
    	t.integer :rank
    	t.belongs_to :restaurant
    	t.timestamps
    end
  end
end
