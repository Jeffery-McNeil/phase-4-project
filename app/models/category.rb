class Category < ApplicationRecord
    belongs_to :user
    belongs_to :medium
    validates :medium_id, uniqueness: true
end
