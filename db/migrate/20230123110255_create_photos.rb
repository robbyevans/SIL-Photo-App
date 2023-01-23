class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.integer :album_id
      t.string :photo_title
      t.string :img_url

      t.timestamps
    end
  end
end
