GateTv::Application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  
  # scope '/api' do
  #   scope '/web-sites' do
  #     get '/', to: ''
  #   end
  #   get '/test', to: 'api#test'
  # end

  namespace :api do
    namespace :v1 do
      scope '/web-sites' do
        get '/', to: 'web_sites#index'
        post '/create', to: 'web_sites#create'
      end
    end
  end
  
  root 'demo#index'
end
