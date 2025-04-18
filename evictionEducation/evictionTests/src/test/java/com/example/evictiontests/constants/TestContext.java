package com.example.evictiontests.constants;

import java.util.HashMap;
import java.util.Map;

public class TestContext {
    private static final Map<String, Object> data = new HashMap<>();

    public static void put(String key, Object value) {
        data.put(key, value);
    }

    public static <T> T get(String key, Class<T> clazz) {
        return clazz.cast(data.get(key));
    }

    public static boolean contains(String key) {
        return data.containsKey(key);
    }
}
