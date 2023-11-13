class LogLineParser
  def initialize(line)
    @line = line
    @text = @line.gsub(/\[\w*\]:/, "").strip
    @level = /\[(?<level>\w*)\]:/.match(@line).named_captures["level"].downcase
  end

  def message
    return @text
  end

  def log_level
    return @level
  end

  def reformat
    return message + " (#{log_level})"
  end
end
