require 'jwt'

module AuthToken
  SECRET_TOKEN = 'c23122b7c7f2ec43ee6a13105fc1ab87ca3e1167863ae5300f12db96067928787a81d583adaa40862182359540a935d84193f62088f29942d62c9479b61b7827'
  
  def AuthToken.issue_token(payload)
    payload['exp'] = 24.hours.from_now.to_i # Set expiration to 24 hours.
    JWT.encode(payload, SECRET_TOKEN)
  end

  def AuthToken.valid?(token)
    begin
      JWT.decode(token, SECRET_TOKEN)
    rescue
      false
    end
  end
end
