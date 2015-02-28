class WebSite < ActiveRecord::Base
  attr_accessible :name, :description
  
  belongs_to :user
  
  module Status
    UNVERIFIED = 0
    VERIFIED = 1
    REJECTED = 2
  end
  
  def status
    ['Unverified', 'Verified', 'Rejected'][self.status_id]
  end
end
