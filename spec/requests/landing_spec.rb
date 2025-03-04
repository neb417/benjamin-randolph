require 'rails_helper'

RSpec.describe "Landing", type: :request do
  describe "GET /index" do
    it "responds with 200" do
      get "/"

      expect(response).to be_successful
    end
  end
end
