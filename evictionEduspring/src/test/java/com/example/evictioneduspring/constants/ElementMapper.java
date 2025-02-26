package com.example.evictioneduspring.constants;

import java.util.HashMap;
import java.util.Map;

public class ElementMapper {

    private static final Map<String, String> elementMap = new HashMap<>();

    static {
        elementMap.put("find a solution button", XPathConstants.FIND_A_SOLUTION_BUTTON);
        elementMap.put("faqs button", XPathConstants.FAQS_BUTTON);
        elementMap.put("chat now button", XPathConstants.CHAT_NOW_BUTTON);
    }

    public static String getXPath(String elementName) {
        String xpath = elementMap.get(elementName.toLowerCase());
        if (xpath == null) {
            throw new IllegalArgumentException("No XPath found for element name: " + elementName);
        }
        return xpath;
    }
}