class Medium < ApplicationRecord
    has_many :categories
    has_many :users, through: :categories
    has_many :reviews
    validates :rating, inclusion: { in: 1..10 }
end
