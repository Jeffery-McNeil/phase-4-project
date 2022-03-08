class User < ApplicationRecord
    has_many :categories
    has_many :media, through: :categories
    has_many :reviews
end
