class Api::V1::WebSitesController < ApplicationController
  before_filter :verify_jwt_token
  skip_before_filter :verify_authenticity_token, only: [:create]
  
  # returns all websites of current user
  def index
    respond_to do |format|
      format.json { render json: {data: current_user.web_sites.map(&:in_json)}}
    end
  end
  
  # create a new web site
  def create
    web_site = WebSite.new do |ws|
      ws.name = params[:web_site][:name]
      ws.description = params[:web_site][:description]
      ws.url = params[:web_site][:url]
      ws.user = current_user
    end.tap(&:save)
    
    respond_to do |format|
      format.json { render json: {data: web_site, message: {text: "Web site '#{web_site.name}' was successfully created", type: 'success'}}}
    end
  end
end
