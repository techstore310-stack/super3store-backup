-- Super3Store V2 database schema
-- Core tables will be added incrementally.

CREATE TABLE IF NOT EXISTS system_info (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
