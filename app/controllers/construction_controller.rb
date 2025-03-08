class ConstructionController < ApplicationController
  def show
    flash[:notice] = "Page under construction. Please check back at a later date."
    flash.discard
  end
end
