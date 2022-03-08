class Medium < ApplicationRecord
    has_many :categories
    has_many :users, through: :categories
    has_many :reviews
    
end
