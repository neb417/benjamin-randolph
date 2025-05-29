require 'rails_helper'

RSpec.describe "Code", type: :request do
  describe "GET /index" do
    it "responds with 200" do
      get code_path

      expect(response).to be_successful
    end
  end
end
