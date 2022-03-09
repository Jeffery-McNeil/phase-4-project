Rails.application.routes.draw do
  resources :categories
  resources :reviews
  resources :media
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/user_media/:id", to: "media#user_media"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end
