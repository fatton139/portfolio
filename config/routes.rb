Rails.application.routes.draw do
  root to: 'pages#index'
  get 'about', to: 'pages#about'
end
