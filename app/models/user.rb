class User < ApplicationRecord
    has_secure_password
    has_many :categories
    has_many :media, through: :categories
    has_many :reviews
end
