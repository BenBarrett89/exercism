class SpaceAge {
    private static final double EARTH_YEAR_IN_SECONDS = 31557600;
    private static final double MERCURY_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 0.2408467;
    private static final double VENUS_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 0.61519726;
    private static final double MARS_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 1.8808158;
    private static final double JUPITER_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 11.862615;
    private static final double SATURN_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 29.447498;
    private static final double URANUS_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 84.016846;
    private static final double NEPTUNE_YEAR_IN_SECONDS = EARTH_YEAR_IN_SECONDS * 164.79132;

    private double seconds;
    private double earth;
    private double mercury;
    private double venus;
    private double mars;
    private double jupiter;
    private double saturn;
    private double uranus;
    private double neptune;

    SpaceAge(double seconds){
        this.seconds = seconds;
        this.earth = seconds / EARTH_YEAR_IN_SECONDS;
        this.mercury = seconds / MERCURY_YEAR_IN_SECONDS;
        this.venus = seconds / VENUS_YEAR_IN_SECONDS;
        this.mars = seconds / MARS_YEAR_IN_SECONDS;
        this.jupiter = seconds / JUPITER_YEAR_IN_SECONDS;
        this.saturn = seconds / SATURN_YEAR_IN_SECONDS;
        this.uranus = seconds / URANUS_YEAR_IN_SECONDS;
        this.neptune = seconds / NEPTUNE_YEAR_IN_SECONDS;
    }

    double getSeconds() {
        return seconds;
    }

    double onEarth() {
        return earth;
    }

    double onMercury() {
        return mercury;
    }

    double onVenus() {
        return venus;
    }

    double onMars() {
        return mars;
    }

    double onJupiter() {
        return jupiter;
    }

    double onSaturn() {
        return saturn;
    }

    double onUranus() {
        return uranus;
    }

    double onNeptune() {
        return neptune;
    }
}
