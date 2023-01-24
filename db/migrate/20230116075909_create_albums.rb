class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.integer :user_id
      t.string :album_title
      t.timestamps
    end
  end
end
