defmodule Lasagna do

  def expected_minutes_in_oven, do: 40
  def alarm, do: "Ding!"

  defp preparation_time_per_layer, do: 2

  def remaining_minutes_in_oven(elapsed_minutes) do
    expected_minutes_in_oven - elapsed_minutes
  end

  def preparation_time_in_minutes(number_of_layers) do
    preparation_time_per_layer * number_of_layers
  end

  def total_time_in_minutes(number_of_layers, elapsed_minutes) do
    preparation_time_in_minutes(number_of_layers) + elapsed_minutes
  end

end
