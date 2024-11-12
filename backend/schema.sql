CREATE DATABASE tables_db;
USE tables_db;

CREATE TABLE tables (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    from_name VARCHAR(100),
    to_name VARCHAR(100),
    usd_cash DECIMAL(10,2),
    lbp_cash DECIMAL(10,2),
    evening_total_usd DECIMAL(10,2),
    evening_total_lbp DECIMAL(10,2),
    settlement_usd DECIMAL(10,2),
    settlement_lbp DECIMAL(10,2),
    settlements_difference DECIMAL(10,2),
    pdf_name VARCHAR(255),
    pdf_data LONGTEXT
);
