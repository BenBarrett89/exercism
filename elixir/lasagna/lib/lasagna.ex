defmodule Lasagna do
  @expected_time_in_oven 40
  @preparation_time_per_layer 2

  @spec expected_minutes_in_oven() :: integer()
  def expected_minutes_in_oven, do: @expected_time_in_oven

  @spec remaining_minutes_in_oven(elapsed_minutes :: integer()) :: integer()
  def remaining_minutes_in_oven(elapsed_minutes) do
    expected_minutes_in_oven() - elapsed_minutes
  end

  @spec preparation_time_in_minutes(number_of_layers :: integer()) :: integer()
  def preparation_time_in_minutes(number_of_layers) do
    @preparation_time_per_layer * number_of_layers
  end

  @spec total_time_in_minutes(number_of_layers :: integer(), elapsed_minutes :: integer()) :: integer()
  def total_time_in_minutes(number_of_layers, elapsed_minutes) do
    preparation_time_in_minutes(number_of_layers) + elapsed_minutes
  end

  @spec alarm() :: String.t()
  def alarm, do: "Ding!"

end
