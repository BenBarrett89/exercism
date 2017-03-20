import java.time.LocalDate;
import java.time.LocalDateTime;

public class Gigasecond {
    private static final long GIGASECOND_IN_SECONDS = 1000000000;
    private LocalDateTime date;

    public Gigasecond(LocalDate localDate) {
        this(LocalDateTime.of(localDate.getYear(), localDate.getMonth(), localDate.getDayOfMonth(), 0, 0, 0));
    }

    public Gigasecond(LocalDateTime localDateTime) {
        this.date = localDateTime.plusSeconds(GIGASECOND_IN_SECONDS);
    }

    public LocalDateTime getDate() {
        return date;
    }
}
