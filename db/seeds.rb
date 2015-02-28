# To create a user
# User.create(email: 'anton@geekatoo.com', password: 'ntcn.pth')

# To create a web sites
web_sites = []
5.times do |i|
  web_sites << WebSite.create(name: Faker::Commerce.department(2, true), description: Faker::Lorem.paragraph)
end
u = User.first
u.web_sites = web_sites
u.save!
