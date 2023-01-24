Rails.application.routes.draw do
  
  resources :photos
  resources :users,only: [:index,:show,:create]
  resources :albums,only: [:index,:show]
  resources :photos,only: [:index,:show]

  post"/signup", to: "users#create"
  post"/login", to: "sessions#create"
  delete"/logout", to: "sessions#destroy"


  get"/me", to: "users#show"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
