class ApiController < ApplicationController
  before_filter :verify_jwt_token

  def test
    respond_to do |format|
      format.json { render json: {message: 'Secret method is here :)'}}
    end
  end
end
