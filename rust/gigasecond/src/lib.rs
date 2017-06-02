extern crate chrono;

use chrono::{DateTime, Duration, UTC};

pub fn after(start_date: DateTime<UTC>) -> DateTime<UTC> {
    return start_date + Duration::seconds(1_000_000_000)
}
