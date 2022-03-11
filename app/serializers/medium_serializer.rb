class MediumSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :artist, :company, :rating, :category
end