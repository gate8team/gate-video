class CreateWebSites < ActiveRecord::Migration
  def change
    create_table :web_sites do |t|
      t.string :name
      t.string :description
      t.integer :status_id, default: 0
      t.integer :user_id
      t.timestamps
    end
    
    add_index :web_sites, :name
  end
end
