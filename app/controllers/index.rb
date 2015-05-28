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



  @user

end



get '/example.json' do
  content_type :json
  { :key1 => 'value1', :key2 => 'value2' }.to_json
end
