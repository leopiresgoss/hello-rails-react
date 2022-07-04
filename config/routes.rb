Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    resources :messages, only: %i[index]
  end
end
