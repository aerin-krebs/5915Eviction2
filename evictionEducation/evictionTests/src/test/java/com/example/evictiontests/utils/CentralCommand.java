package com.example.evictiontests.utils;

import javax.sql.DataSource;
import org.h2.jdbcx.JdbcDataSource;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CentralCommand {

    // Database connection constants
    private static final String DB_URL = "jdbc:h2:tcp://localhost:9092/~/yourdb";
    private static final String DB_USER = "sa";
    private static final String DB_PASSWORD = "";

    private final DataSource dataSource;

    // Constructor sets up the DataSource internally using constants
    public CentralCommand() {
        JdbcDataSource ds = new JdbcDataSource();
        ds.setURL(DB_URL);
        ds.setUser(DB_USER);
        ds.setPassword(DB_PASSWORD);
        this.dataSource = ds;
    }

    /**
     * Tests the connection to the database by running a simple query.
     */
    public boolean testConnection() {
        String testQuery = "SELECT 1";

        try {
            List<List<Object>> results = executeQueryWithoutParameters(testQuery);

            if (!results.isEmpty() && results.get(0).get(0).equals(1)) {
                System.out.println("✅ Database connection successful.");
                return true;
            } else {
                System.err.println("❌ Test query did not return expected result.");
                return false;
            }
        } catch (Exception e) {
            System.err.println("❌ Failed to test database connection: " + e.getMessage());
            return false;
        }
    }

    /**
     * Executes a query with parameters.
     */
    public List<List<Object>> executeQueryWithParameters(String sqlQuery, Object... params) {
        List<List<Object>> results = new ArrayList<>();

        try (Connection connection = dataSource.getConnection();
             PreparedStatement stmt = connection.prepareStatement(sqlQuery)) {

            for (int i = 0; i < params.length; i++) {
                stmt.setObject(i + 1, params[i]);
            }

            try (ResultSet rs = stmt.executeQuery()) {
                ResultSetMetaData metaData = rs.getMetaData();
                int columnCount = metaData.getColumnCount();

                while (rs.next()) {
                    List<Object> row = new ArrayList<>();
                    for (int col = 1; col <= columnCount; col++) {
                        row.add(rs.getObject(col));
                    }
                    results.add(row);
                }
            }

        } catch (SQLException e) {
            System.err.println("❌ Query execution failed: " + e.getMessage());
        }

        return results;
    }

    /**
     * Executes a query without parameters.
     */
    public List<List<Object>> executeQueryWithoutParameters(String sqlQuery) {
        return executeQueryWithParameters(sqlQuery);
    }

    /**
     * Executes a query with exactly one parameter.
     */
    public List<List<Object>> executeQueryWithOneParameter(String sqlQuery, Object param) {
        return executeQueryWithParameters(sqlQuery, param);
    }
}
