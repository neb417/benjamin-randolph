require 'rails_helper'

RSpec.describe "Landing", type: :feature do
  describe "GET /index" do
    it 'renders text on page' do
      visit root_path

      within(".header-section") do
        expect(page).to have_content("Benjamin Randolph")
      end

      within(".about-section") do
        expect(page).to have_content("About me")
      end
    end
  end
end
