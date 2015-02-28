class AddChangesToUserAndWebSite < ActiveRecord::Migration
  def change
    add_column :users, :role_id, :integer, default: 0
    add_column :web_sites, :url, :string
  end
end
