package com.example.evictiontests.constants;

import java.util.HashMap;
import java.util.Map;

public class ElementMapper {

    private static final Map<String, String> elementMap = new HashMap<>();

    static {
        elementMap.put("back button", XPathConstants.BACK_BUTTON);

        elementMap.put("chat now button", XPathConstants.CHAT_NOW_BUTTON);
        elementMap.put("congrats text", XPathConstants.CONGRATS_TEXT);

        elementMap.put("faqs button", XPathConstants.FAQS_BUTTON);
        elementMap.put("find a solution button", XPathConstants.FIND_A_SOLUTION_BUTTON);

        elementMap.put("i agree button", XPathConstants.I_AGREE_BUTTON);

        elementMap.put("no button", XPathConstants.NO_BUTTON);

        elementMap.put("open chatbot button", XPathConstants.OPEN_CHATBOT_BUTTON);
        elementMap.put("open messenger chat button", XPathConstants.OPEN_MESSENGER_CHAT_BUTTON);

        elementMap.put("resources button", XPathConstants.RESOURCES_BUTTON);

        elementMap.put("thirty day notice button", XPathConstants.THIRTY_DAY_NOTICE_BUTTON);
        elementMap.put("three day notice button", XPathConstants.THREE_DAY_NOTICE_BUTTON);

        elementMap.put("yes button", XPathConstants.YES_BUTTON);
    }

    public static String getXPath(String elementName) {
        String xpath = elementMap.get(elementName.toLowerCase());
        if (xpath == null) {
            throw new IllegalArgumentException("No XPath found for element name: " + elementName);
        }
        return xpath;
    }
}