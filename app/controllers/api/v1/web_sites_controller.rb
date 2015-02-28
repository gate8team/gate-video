class Api::V1::WebSitesController < ApplicationController
  before_filter :verify_jwt_token
  
  # returns all websites of current user
  def index
    respond_to do |format|
      format.json { render json: {data: current_user.web_sites}}
    end
  end
end
