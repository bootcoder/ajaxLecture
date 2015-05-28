require 'json'

get '/' do
  erb :index
end

get '/users' do

end

post '/users' do

  p "*" * 90
  p params
  p "*" * 90
  @user = User.create(username: params[:username])


  @user.to_json

end

