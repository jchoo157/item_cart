require 'test_helper'

class SiteControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get site_controller_index_url
    assert_response :success
  end

end
