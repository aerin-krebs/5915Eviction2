package com.example.evictioneduspring.utils;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.*;

import java.util.List;
import java.util.ArrayList;

@Component
public class CentralCommand {

    private final DataSource dataSource;

    @Autowired
    public CentralCommand(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    /**
     * Tests the connection to the database by running a simple query.
     * Prints success/failure messages and returns true if the connection is valid.
     */
    public boolean testConnection() {
        String testQuery = "SELECT 1";  // Simple query to validate connection

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
     *
     * @param sqlQuery
     * @param params
     * @return
     */
    public List<List<Object>> executeQueryWithParameters(String sqlQuery, Object... params) {
        List<List<Object>> results = new ArrayList<>();

        try (Connection connection = dataSource.getConnection();
             PreparedStatement stmt = connection.prepareStatement(sqlQuery)) {

            // Set query parameters
            for (int i = 0; i < params.length; i++) {
                stmt.setObject(i + 1, params[i]);
            }

            // Execute the query
            try (ResultSet rs = stmt.executeQuery()) {
                ResultSetMetaData metaData = rs.getMetaData();
                int columnCount = metaData.getColumnCount();

                // Process each row
                while (rs.next()) {
                    List<Object> row = new ArrayList<>();
                    for (int col = 1; col <= columnCount; col++) {
                        row.add(rs.getObject(col));  // Add column value to the row
                    }
                    results.add(row);  // Add row to results
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
        return executeQueryWithParameters(sqlQuery);  // Simply call the existing method with no params
    }

    /**
     * Executes a query with exactly one parameter.
     */
    public List<List<Object>> executeQueryWithOneParameter(String sqlQuery, Object param) {
        return executeQueryWithParameters(sqlQuery, param);  // Reuse the main method
    }
}