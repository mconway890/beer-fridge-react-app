class BeersController < ApplicationController
  def index
    binding.pry
    q = params[:q]

    if q.blank?
      render status: 400, json: { error: 'Expected parameter `q` '}
    else
      render(
        status: 200,
        json: Beer.where(["description LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end
end
