class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|

      t.string :img_url
      t.string :caption

      t.references :user

      t.timestamps

    end
  end
end
