class WebSite < ActiveRecord::Base
  belongs_to :user
  
  module Status
    UNVERIFIED = 0
    VERIFIED = 1
    REJECTED = 2
  end
  
  def status
    ['Unverified', 'Verified', 'Rejected'][self.status_id]
  end
  
  def verify!
    self.update_attributes(status_id: WebSite::Status::VERIFIED)
  end

  def reject!
    self.update_attributes(status_id: WebSite::Status::REJECTED)
  end
  
  def in_json
    {
      id: self.id,
      name: self.name,
      description: self.description,
      status: self.status,
      status_id: self.status_id
    }
  end
end
