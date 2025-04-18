package com.example.evictiontests.constants;

import java.util.HashMap;
import java.util.Map;

public class ElementMapper {

    private static final Map<String, String> elementMap = new HashMap<>();

    static {
        elementMap.put("back button", XPathConstants.BACK_BUTTON);

        elementMap.put("chat button", XPathConstants.CHAT_BUTTON);
        elementMap.put("chat now button", XPathConstants.CHAT_NOW_BUTTON);
        elementMap.put("chat tree button", XPathConstants.CHAT_TREE_BUTTON);
        elementMap.put("congrats text", XPathConstants.CONGRATS_TEXT);

        elementMap.put("facebook messenger chat button" , XPathConstants.FACEBOOK_MESSENGER_CHAT_BUTTON);
        elementMap.put("facing eviction text", XPathConstants.FACING_EVICTION_TEXT);
        elementMap.put("faqs button", XPathConstants.FAQS_BUTTON);
        elementMap.put("find a solution button", XPathConstants.FIND_A_SOLUTION_BUTTON);
        elementMap.put("finding resources text", XPathConstants.FINDING_RESOURCESS_TEXT);
        elementMap.put("frequently asked questions text", XPathConstants.FREQUENTLY_ASKED_QUESTIONS_TEXT);

        elementMap.put("google translate dropdown", XPathConstants.GOOGLE_TRANSLATE_DROPDOWN);

        elementMap.put("home button", XPathConstants.HOME_BUTTON);

        elementMap.put("i agree button", XPathConstants.I_AGREE_BUTTON);

        elementMap.put("legal aid society button", XPathConstants.LEGAL_AID_SOCIETY_BUTTON);
        elementMap.put("legal disclaimer popup", XPathConstants.LEGAL_DISCLAIMER_POPUP);

        elementMap.put("no button", XPathConstants.NO_BUTTON);

        elementMap.put("open chatbot button", XPathConstants.OPEN_CHATBOT_BUTTON);
        elementMap.put("open messenger chat button", XPathConstants.OPEN_MESSENGER_CHAT_BUTTON);

        elementMap.put("more information needed text", XPathConstants.MORE_INFORMATION_NEEDED_TEXT);

        elementMap.put("resources button", XPathConstants.RESOURCES_BUTTON);
        elementMap.put("resources tree button", XPathConstants.RESOURCES_TREE_BUTTON);

        elementMap.put("solution finder header", XPathConstants.SOLUTION_FINDER_HEADER);

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